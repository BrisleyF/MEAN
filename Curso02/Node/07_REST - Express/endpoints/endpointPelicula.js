// LOGICA DE CONTROL
const negocioPelicula = require("../negocio/negocioPeliculas");

exports.listarPeliculas = function(request, response){
    // Recoger de la peticion el criterio de busqueda
    let criterio = {};
    negocioPelicula.listarPeliculas(criterio)
        .then(peliculas => {
            //response.setHeader('Content-Type', 'application/json');
            response.json(peliculas);
        })
        .catch(error => {
            console.log(error);
            response
                .status(500)
                .end("Error al listar las peliculas.");
        })
}

exports.insertarPeliculas = function(request, response){

    let pelicula = request.body;

    negocioPelicula.insertarPeliculas(pelicula)
    .then((resultado) => {
        response.statusCode = 201;
        response
            .status(201)
            .json(resultado)
    })
    .catch((error) => {
        console.log(error);
        response
            .status(error.codigo)
            .json(error.mensaje)
    });

}