let mongoose = require("mongoose")
const Usuario = require("../entidades/usuario").Usuario
const UsuarioHistorico = require("../entidades/usuarioHistorico").UsuarioHistorico
const crearError = require("../../util/errorUtil").crearError

exports.buscarPorLogin = async function(login){
    try {
        //return await mongodbUtil.esquema.collection("usuarios").findOne({ login : login })
        return await Usuario.findOne({ login : login })
    } catch (error) {
        console.log(error)
        throw crearError(500, "Error con la base de datos")
    }
}

exports.insertarUsuario = async function(usuario){
    try {
        //Validar los datos    
        if(!usuario.login   || usuario.login.trim()   == "" || 
           !usuario.correoE || usuario.correoE.trim() == "" || 
           !usuario.nombre  || usuario.nombre.trim()  == "" ){
            throw crearError(400)
        }
        
        //Comprobar que el login no está repetido
        let usuarioEncontrado = await exports.buscarPorLogin(usuario.login)
        if(usuarioEncontrado){
            throw crearError(400, "Ya existe el login") 
        }

        //Le asignamos el rol y la fecha de alta al usuario
        usuario.rol = "CLIENTE"
        usuario.fechaAlta = Date.now()
        
        //QUITAR EL _ID
        delete usuario._id
        //calcular el hash del password y guardar el hash
        //insertar el usuario

        //return await mongodbUtil.esquema.collection("usuarios").insertOne(usuario)
        let usuarioMG = new Usuario(usuario)
        return await usuarioMG.save()
    } catch ( error ){
        if(error.codigo){
            throw error
        }
        console.log(error)
        throw crearError(500, "Error con la base de datos")
    }
}

//Autenticación: si
//Autorización :
//-clientes : solo pueden modificarse a si mismos
//-empleados: pueden modificar cualquier usuario
exports.modificarUsuario = async function(usuario, autoridad){
    
    //Validación
    if(!usuario.login     || usuario.login.trim()     == "" || 
       !usuario.correoE   || usuario.correoE.trim()   == "" || 
       !usuario.nombre    || usuario.nombre.trim()    == "" ||
       !usuario.direccion || usuario.direccion.trim() == "" ||
       !usuario.telefono  || usuario.telefono.trim()  == "" ){
        throw crearError(400) 
    }     
                    
    //Autorización 
    if(autoridad.rol!="EMPLEADO" && autoridad._id!=usuario._id){                        
        throw crearError(403, 'Los clientes solo pueden modificarse a si mismos') 
    }
    
    try {
        //Modificar 
        //let resultado = await mongodbUtil.esquema.collection("usuarios").findOneAndUpdate( 
        let resultado = await Usuario.findByIdAndUpdate( 
                usuario._id,                
                {
                    $set : {
                        nombre    : usuario.nombre,
                        correoE   : usuario.correoE,
                        telefono  : usuario.telefono,
                        direccion : usuario.direccion
                    }
                }
            ) 
        if(!resultado){
            throw crearError(404, "El usuario no existe")
        }
    } catch ( error ) {
        if(error.codigo){
            throw error
        }
        console.log(error)
        throw crearError(500, "Error con la base de datos")
    }

}

exports.borrarUsuario = async function(idUsuario, autoridad){

    //Buscamos el usuario a partir del id
    //Lo insertamos en la colección 'usuarios_historico'
    //Lo eliminamos de la colección 'usuarios'

    let session 
    try {
        //INICIO DE LA TX
        session = await mongoose.startSession();
        session.startTransaction()

        //Autorización
        if(autoridad.rol!='EMPLEADO' && autoridad._id!=idUsuario){
            throw crearError(403, "Los clientes solo pueden darse de baja a si mismos")
        }

        //Este find by id no necesita estár dentro de la transacción
        let usuario = await Usuario.findById(idUsuario)
        //Pero si la unimos a la sesión tampoco pasa nada
        //let usuario = await Usuario.findById(idUsuario).session(session)

        if(!usuario){
            throw crearError(404, "El cliente no existe")
        }            

        //Aqui creamos un objeto plano a partir del usuario para 
        //eliminarle el _id y que de ese modo el objeto 'UsuarioHitórico'
        //no tenga valor en el id
        let usuarioAPaloseco = usuario.toObject()
        delete usuarioAPaloseco._id
        let usuarioHistorico = new UsuarioHistorico(usuario)

        //Asignamos una fecha de baja
        usuarioHistorico.fechaBaja = Date.now()
        //Esta consulta si que debe de estar asociada a la transacción
        await usuarioHistorico.save({ session })

        await usuario.deleteOne({ session })
        //También podríamos haberlo hecho así:
        //await Usuario.findByIdAndDelete(usuario._id).session(session)

        //COMMIT
        await session.commitTransaction()
    } catch (error) {
        //ABORT (rollback)
        await session.abortTransaction()
        if(error.codigo){
            throw error
        }
        console.log(error)
        throw crearError(500, "Error con la bb.dd. al eliminar el usuario.")
    } finally {
        await session.endSession()
    }

}




