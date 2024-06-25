const negocioUsuario = require("../negocio/negocioUsuarios");
//const express = require("express");
//let router = express.Router();
//router.get('/usuarios', ...);


const router = require("express").Router();

router.post('/usuarios', insertarUsuario);
router.put('/usuarios/:id', modificarUsuario);
router.delete('/usuario/:id', bajaUsuario);
router.head('/usuarios', comprobarLoginUsuario);

exports.router = router;

// FUNCIONES DE LOGICA DE CONTROL

/* 
POST /usuarios
Content-type: application/json
*/

function insertarUsuario(request, response){
    let usuario = request.body;

    negocioUsuario.insertarUsuario(usuario)
    .then( resultado => {
        response
            .status(201)
            .json(resultado)
    } )
    .catch( error => {
        console.log(error);
        response
        .status(error.codigo)
        .json(error)
    } )
}


// PUT /usuarios/:id
function modificarUsuario(request, response){
    let idUsuario = request.params.id;
    let usuario = request.body;

    if(usuario._id != idUsuario){
        response.status(400).json("Que cojones estas haciendo con los id");
        return;
    }
    

    negocioUsuario.modificarUsuario(usuario)
    .then( () => {
        response.json({ mensaje: "El usuario se modifico correctamente"})
    })
    .catch( error => {
        console.log(error);
        response
            .status(error.codigo)
            .json(error)
    })
}

function bajaUsuario(request, response){

}

//HEAD /usuarios?login=xXx
function comprobarLoginUsuario(request, response){

    let login = request.query.login
    if(!login){
        response.status(400).end("Falta el login")
        return
    }

    negocioUsuario.buscarPorLogin(login)
    .then( usuario => {
        if(usuario){
            response.json()
        }else{
            response
            .status(404)
            .json({codigo:404, mensajes: "No existe un usuario con ese login"})
        }

        response.json() //Es un head, no pondremos nada en el body
        //response
        //    .setHeader("content-type", "application/json")
        //    .end() //Es un head, no pondremos nada en el body
    })
    .catch(error => {
        console.log(error)
        response
            .status(error.codigo)
            .json(error)
    })

}