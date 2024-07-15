const ServicioProductos = require("../modelo/negocio/negocioProductos").ServicioProductos
const crearError = require("../util/errorUtil").crearError

//////////////
// ENDPOINT //
//////////////

exports.EndpointProductos = class {

    servicioProductos

    constructor(){
        this.servicioProductos = new ServicioProductos()
    }

    async buscarProductoPorId(request, response){
        let idProducto = request.params.id

        console.log("BUSCANDO EL PRODUCTO: "+idProducto)


        try {
            let productoEncontrado = await this.servicioProductos.buscarProductoPorId(idProducto)
            if(productoEncontrado){
                response
                    .status(200)
                    .json(productoEncontrado)
            } else {
                response.status(404).json(crearError(404, "El producto no existe"))
            }
        } catch (error){
            console.log(error)
            response
                .status(error.codigo)
                .json(error)         
        }
    }

    async listarProductos(request, response){
        try {
            let productos = await this.servicioProductos.listarProductos({})
            response
                .status(200)
                .json(productos)
        } catch (error){
            console.log(error)
            response
                .status(error.codigo)
                .json(error)         
        }
    }

    /*
    POST /usuarios
    Content-type: application/json
    ------------------------------
    { usuario }
    */
    async insertarProducto(request, response){        
        try {
            let producto = request.body
            let resultado = await this.servicioProductos.insertarProducto(producto, request.autoridad)
            response
                .status(201)
                .json(resultado)
        } catch (error){
            console.log(error)
            response
                .status(error.codigo)
                .json(error)         
        }
    }

}