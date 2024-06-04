// LOGICA DE NEGOCIO
const mongodbUtil = require("../util/mongodbUtil");

exports.listarPeliculas = function(criterioBusqueda){
    //Logica de negocio
    //BB.DD
    let peliculas;
    
    let coleccion = mongodbUtil.esquema.collection("peliculas");
    return coleccion.find(criterioBusqueda).toArray()
}

exports.insertarPeliculas = function(pelicula){

    // Promesas antes del async away 

    return new Promise(function(resolve, reject){

        if(!pelicula.titulo || pelicula.titulo.trim().length == 0){
            reject({
                codigo  : "400",
                mensaje : "El titulo es obligatorio"
            });
            return;
        }

        mongodbUtil.esquema.collection("peliculas").insertOne(pelicula)
            .then(resultado => {
                console.log(resultado);
                resolve(resultado);
            })
            .catch(error => {
                console.log(error);
                reject({
                    codigo  : "500",
                    mensaje : "Error con la bb.dd. al insertar la pelicula."
                });
            });

    })
}