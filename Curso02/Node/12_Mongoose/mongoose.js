
//npm install mongoose
let mongoose = require("mongoose")

let urlBBDD = "mongodb://localhost:27017/mongoose"

//Delegamos en mongoose el establecimiento de la conexión con el servidor de BB.DD.


console.log("Conectando con la base de datos")
mongoose
    .connect(urlBBDD)
    //.then( () => {
    //   pruebasMongoose() 
    //})
    .then(pruebasMongoose)
    .catch( err => console.log(err))

function pruebasMongoose(){

    //En Mongoose definimos los ESQUEMAS que se utilizarán en la base de datos
    //Para cada colección definiremos un objeto con sus propiedades
    //Y SUS TIPOS (son los tipos del Bson)
    //-ObjectId
    //-String
    //-Number
    //-Date
    //-boolean
    //-buffer
    //-Object 
    //-Decimal128
    //-Array
    //-Map 

    //Pasos a seguir
    //-definir el esquema
    //-a partir del esquema crear el modelo
    //-una vez que tengamos el modelo ya podemos disfrutar de la comodidad que resulta
    //de que hagan las cosas por ti

    //Cuando creamos el esquema estamos definiendo como serán los documentos que van
    //a estar en una coleccion, pero no indicamos cuál colección es
    let esquemaUsuario = new mongoose.Schema({
        //Si queremos que sea el driver el que le de valor al _id
        //no lo añadiremos al esquema            
        //_id       : ObjectID,
        login: {
            type    : String,
            required: true
        },
        password  : String,
        rol       : String,
        nombre    : String,
        direccion : String,
        telefono  : String,
        correoE   : String,
        idioma    : String        
    })

    //Creamos el modelo
    //let Modelo = mongoose.model('nombre de la colección', esquema)
    //Cuando definimos el modelo indicamos el nombre de la colección
    //y nos olvidamos de ella para siempre   
    //
    //mongoose.model devuelve una función prototipo (o una clase)
    //si la invocamos con 'new' tendremos un hermoso objeto cuyas propiedades
    //son las definidas en el esquema y que además tiene una serie de
    //funciones relacionadas con la persistencia 

    let Usuario = mongoose.model('usuarios', esquemaUsuario) 
    
    //A partir de este momento cada vez que necesitemos un usuario hacemos el new del prototipo
    let usuario = new Usuario()

    //Como no le hemos pasado valores de momento solo tiene _id
    console.log(usuario)

    //El prototipo define unas cuantas funciones estupendas
    //for(let propiedad in usuario){
    //    console.log(propiedad)
    //}

    usuario.login     = "harpo"
    usuario.password  = "1234567890"
    usuario.nombre    = "Harpo"
    usuario.direccion = "C/Tal"

    //Nadie nos impide añadirle propiedades que no están en el esquema, pero
    //luego mongoose las ignorará
    usuario.trololo = "lololo"   
    
    console.log(usuario) 
    
    /////////////////////////
    //INSERTAR UN DOCUMENTO//
    /////////////////////////  
    
    //La llamada a 'save' inserta el objeto en la colección correspondiente
    //Save es asíncrono y funciona con callbacks y promesas
    //Una vez insertado nos proporcionan el objeto tal cual haya quedado
    //en la base de datos

    //Cuidado! Debemos asegurarnos de que el objeto no tiene null como valor de _id
    //antes del save si queremos que nos devuelvan el _id generado por la libredía de mongoDB     

    console.log("Insertando el usuario...")
    usuario.save()
        .then(usuarioInsertado => {
            console.log("Usuario insertado")

            let usrNormalYCorriente = {
                login     : 'budspencer',
                password  : '1234567890',
                nombre    : 'Bud Spencer',
                direccion : 'S.F.',
                //Esta propiedad no está en el esquema que hemos definido y se ignorará
                TOCOTO    : 'ARSA'
            }
            let usuario2 = new Usuario(usrNormalYCorriente)            
            return usuario2.save()
        })
        .then( usuarioInsertado => {
            console.log("Usuario2 insertado")

            ////////////////////
            //BÚSQUEDA POR _ID//
            ////////////////////  
            
            //Para buscar documentos utilizamos directamente el modelo

            //Si el _id es ObjectId mongoose hace automáticamente la conversión de string a ObjectId
            //Usuario.findOne({ _id : new ObjectId("619b52ac79600e9686e1214c")})
            //Usuario.find({ _id : new ObjectId("619b52ac79600e9686e1214c")}) //Esto devuelve un array
            //Usuario.find({ ciudad : "Chinchón" }) //un array con los usuarios que son de Chinchón
            return Usuario.findById("6687dd1a9f70a001046d92e2")
        }).then( usuarioEncontrado => {
            if(!usuarioEncontrado){
                console.log("El usuario no existe")
                return
            }

            console.log("Usuario encontrado:", usuarioEncontrado)

            //////////
            //BORRAR//
            //////////  
            
            //Podemos hacerlo en dos fases:
            //-buscar el objeto
            //-pedirle que se borre   
            //
            /*
            Usuario.findById("619b56007e18fada98600631")
            .then( usrEncontrado => {
                console.log("Borrar:", usrEncontrado)
                return usrEncontrado.deleteOne()
            })
            .then(resultado => {
                console.log("Usuario borrado.")
            })
            .catch(err => console.log(err))
            */

            //Tambien podemos utilizar directamente el modelo para borrar en una única consulta
            return Usuario.findByIdAndDelete("6687dd1a9f70a001046d92e2")
        } )
        .then( resultado => {
            console.log("Usuario borrado")
            console.log(resultado)

            /////////////
            //MODIFICAR//
            /////////////

            /*Podemos buscar el objeto, cambiarle los valores y modificarlo (dos consultas)
            Usuario.findById("619b59cff64461ef4abd73e8")
            .then( usuarioEncontrado => {
                console.log("=======================================================")
                console.log(usuarioEncontrado)
                usuarioEncontrado.telefono = "555 654 321"
                //save si el objeto tiene un valor en _id que existe en la colección MODIFICA
                return usuarioEncontrado.save()
            })
            .then(x => {
                console.log("Usuario modificado")
            })
            .catch( error => console.log(error) )
            */
           
            //O podemos modificar directamente utilizando el modelo(una única consulta)
            return Usuario.findByIdAndUpdate("6687dd1a9f70a001046d92e0", { correoE : "VAMOS QUE NOS VAMOS" } )
        })
        .then( resultado => {
            console.log("Usuario modificado")
            mongoose.disconnect()
        })
        .catch( err => {
            console.log(err)
        }) 

}

////////////////////////////////////////////////

/*

function crearModelo(coleccion, esquema ){
    let Prototipo = function(){
        for(let clave in esquema){
            this[clave] = ""
        }
    }
    Prototipo.prototype.save = function(){
        console.log("Guardando en mongoDB...", this, " en la coleccion "+coleccion)
    }

    Prototipo.buscar = function(){
        console.log("Haciendo un find a la coleccion "+coleccion)
    }

    return Prototipo
}

/////////////////////////////////////////////////
let esquemaProducto = {
    nombre : "estring",
    fabricante : "estring",
    peso : "namber"
}
let Producto = crearModelo("productos", esquemaProducto)
/////////////////////////////////////////////////
let esquemaCoche = {
    marca : "estring",
    modelo : "estring",
    matricula : "namber"
}
let Coche = crearModelo("coches", esquemaCoche)
console.log("==================================")

let p1 = new Producto()
console.log(p1)
p1.save()
Producto.buscar()
let c1 = new Coche()
console.log(c1)
c1.save()
Coche.buscar()

console.log("==================================")
 
*/







