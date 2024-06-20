const mongodbUtil = require('../util/mongodbUtil')
const crearError = require("../util/errorUtil").crearError

exports.buscarPorLogin = function(login){

    return new Promise(function(resolve, reject){
        mongodbUtil.esquema.collection("usuarios").findOne({ login : login })
        //.then( usuario => {
        //   resolve(usuario)
        //})
        .then(resolve)
        .catch(error => {
            console.log(error)
            reject( crearError(500, "Error con la base de datos"))
        })
    })
}

exports.insertarUsuario = function(usuario){
    
    return new Promise(function(resolve, reject){
        // validar los datos
        // comprobar que el login 
        // insertar el usuario

        if(!usuario.login || usuario.login.trim() == "" ||
        !usuario.correoE ||  usuario.correoE.trim() == "" ||
        !usuario.nombre || usuario.nombre.trim() == ""){
            reject(crearError(400, "Datos invalidos"));
            return;
        }

        exports.buscarPorLogin(usuario.login)
        .then( usuarioEncontrado => {
            // Si se ha encontrado significa que no se debe insertar
            if(usuarioEncontrado){
                reject( crearError(400, "Ya existe el login"));
                return;
            }

            delete usuario._id;
            return mongodbUtil.esquema.collection("usuarios").insertOne(usuario);
        })
        .then(resultado => {
            resolve(resultado);
        })
        .catch(error => reject(crearError(500, "Fallo en la bb.dd al insertar el usuario")))
    
    })
}