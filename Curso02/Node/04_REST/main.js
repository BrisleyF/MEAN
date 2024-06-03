const http = require("http");
const mongodbUtil = require("./util/mongodbUtil");
const endpointPeliculas = require("./endpoints/endpointPelicula");
require('dotenv').config({path: '../.env'});
// Ahora puedes acceder a las variables de entorno
const port = process.env.PORT;

// Conetar la BB.DD.
mongodbUtil.conectar()
    .then(arrancarServidor)
    .catch(error => console.log(error))

function arrancarServidor(){
    // Se le pasa la funcion sin parentesis, ya que quiero pasar la funcion como argumento mas no llamarla.
    // Se usa un calback para que se ejecuten el codigo justo cuando se crea el servidor y esta escuchando.
    console.log("Arrancando el Servidor");
    http.createServer(procesarPeticion).listen(port, function(){
        console.log("Esperando peticion en el puerto 3000")
    });
}    

function procesarPeticion(request, response){
    console.log("========");
    let metodo = request.method;
    let ruta = request.url;
    console.log(`Peticion recibida: ${metodo} ${ruta}`);

    //Cross Origin Resource Sharing
    //Vamos a añadir estos headers a todas las respuestas que demos, sean options o no:
    response.setHeader("Access-Control-Allow-Origin", "*")
    response.setHeader('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH,OPTIONS')
    response.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization")

    if(metodo=="GET" && ruta=="/peliculas"){
        endpointPeliculas.listarPeliculas(request, response);
        //console.log("GET");
    } else if(metodo=="POST" && ruta=="/peliculas"){
        endpointPeliculas.insertarPeliculas(request, response);
        //console.log("POST");
    } else {
        console.log("No se encontro la peticion");
        response.statusCode = 404;
        response.end();
    }
}