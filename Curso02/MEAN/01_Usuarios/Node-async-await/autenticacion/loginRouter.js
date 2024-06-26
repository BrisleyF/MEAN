//npm install jsonwebtoken
const jwt = require("jsonwebtoken")
const negocioUsuarios = require("../negocio/negocioUsuarios")
const crearError = require("../util/errorUtil").crearError
const getClaveJWT = require("../util/JWTUtil").getClaveJWT
//const Router = require("express").Router
//let router = Router()
const router = require("express").Router()

//Esto no es REST
router.post("/login", login)
//Exportamos el router
exports.router = router

///////////////////////////////////////
// FUNCIONES DE LA LÓGICA DE CONTROL //
///////////////////////////////////////

//POST /login
//CT: app/json
//------------
//{
//  login   : 'antunez',
//  password: '1234'
//}
function login(request, response){

    let credenciales = request.body

    negocioUsuarios.buscarPorLogin(credenciales.login)
    .then( usuario => {

        if(!usuario || usuario.password != credenciales.password){
            response.status(401).json(crearError(401,"Credenciales incorrectas"))
            return
        }

        //Creamos el token
        let token = jwt.sign(
            { 
                _id    : usuario._id, 
                login  : usuario.login, 
                rol    : usuario.rol,
                movida : "ABCDEF" //Podemos poner lo que nos de la gana, pero solo pondremos cosas útiles para el servidor
            }, 
            getClaveJWT(), 
            { 
                algorithm: 'HS512' //SHA512 con firma de clave simétrica
            }
        )  
        
        delete usuario.password
        let respuesta = {
            jwt : token,
            usuario: usuario
        }
        response.json(respuesta)
    })
    .catch(error => {
        console.log(error)
        response
            .status(error.codigo)
            .json(error)
    })

}