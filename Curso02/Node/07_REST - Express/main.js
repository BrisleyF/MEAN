const http = require("http");
const express = require('express');
const mongodbUtil = require("./util/mongodbUtil");
const endpointPeliculas = require("./endpoints/endpointPelicula");
require('dotenv').config({path: '../.env'});
const interceptorCORS = require("./middleware/interceptorCORS").interceptorCORS;
const interceptorLOG = require("./middleware/interceptorLOG").interceptorLOG;

// Conetar la BB.DD.
mongodbUtil.conectar()
    .then(arrancarServidor)
    .catch(error => console.log(error))

function arrancarServidor(){
    
    let app = express();
    
    app.use(interceptorLOG);
    app.use(interceptorCORS);

    app.use(express.json({
        limit: '5mb' //Tamaño máximo del body que estamos dispuestos a leer. IMPRESCINDIBLE
    }))

    app.get("/peliculas", endpointPeliculas.listarPeliculas);
    app.post("/peliculas", endpointPeliculas.insertarPeliculas);
    app.use(express.static("/cliente"));
    app.disable("x-powered-by");

    console.log("Arrancando el servidor...")
    http.createServer(app).listen(5000, function(){
        console.log("Esperando peticiones para el servicio en el puerto 5000")
    })

    let appCliente = express()
    appCliente.use(express.static("./cliente"))
    http.createServer(appCliente).listen(80, function(){
        console.log("Esperando peticiones web en el puerto 80")
    })    
}