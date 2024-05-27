// LOGICA DE CONTROL
const negocioPelicula = require("../negocio/negocioPeliculas");

exports.listarPeliculas = function(request, response){
    // Recoger de la peticion el criterio de busqueda
    let criterio = {};
    negocioPelicula.listarPeliculas(criterio)
        .then(peliculas => {
            response.setHeader('Content-Type', 'application/json');
            response.end(JSON.stringify(peliculas));
        })
        .catch(error => {
            response.statusCode = 500;
            console.log(error);
            response.end();
        })
}

exports.insertarPeliculas = function(request, response){
    request.on('data', function(body){
        let peliculas = JSON.parse(body);
        negocioPelicula.insertarPeliculas(peliculas)
            .then(resultado => {
                response.statusCode = 201;
                response.end();
            })
            .catch(error => {
                console.log(error);
                response.statusCode = error.codigo;
                response.end(error.mensaje);
            })
    })
}