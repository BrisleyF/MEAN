require("./util/configuracion")
const express = require('express')
const http = require('http')
const mongodbUtil = require('./util/mongodbUtil')
const interceptorCORS = require('./middleware/interceptorCORS').interceptorCORS
const interceptorLog = require('./middleware/interceptorLog').interceptorLog
const usuariosRouter = require('./endpoints/endpointUsuarios').router;

mongodbUtil.conectar()
    .then(() => {
        arrancarServidor()
    })
    .catch( error => console.log("No se pudo conectar a la bb.dd"))

function arrancarServidor(){
    let app = express()

    //Middleware
    app.use(interceptorCORS)
    app.use(interceptorLog)
    app.use(express.json({
        limit: '5mb' //Tamaño máximo del body que estamos dispuestos a leer. IMPRESCINDIBLE
    }))

    app.use(usuariosRouter);

    app.disable("x-powered-by");

    let puerto = process.env["http.puerto"]
    http.createServer(app)
        .listen(
                puerto, 
                () => console.log("Esperando peticiones en el puerto "+puerto)
            )
}








