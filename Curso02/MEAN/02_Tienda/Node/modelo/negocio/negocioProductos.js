const Producto = require("../entidades/producto").Producto
const crearError = require("../../util/errorUtil").crearError
const validar = require("../../util/validacionUtil").validar

exports.ServicioProductos = class {

    reglasProductoInsercion = {
        nombre      : "required|min:3|max:20",
        categoria   : "required|min:3|max:20",
        fabricante  : "required|min:3|max:50",
        descripcion : "required|min:20",
        precio      : "numeric",
        existencias : "numeric",
    }  

    /*{
        "fabricante" : "Tal",
        "categoria"  : "Pascual",
        "precio"     : { gt : 100 } 
    }*/
    async listarProductos(criterio){
        try {
            return await Producto.find(criterio) //no devuelve cursor sino la promesa del array
        } catch (error) {
            console.log(error)
            throw crearError(500, "Error al buscar el producto")
        }    
    }

    async buscarProductoPorId (idProducto){
        try {
            return await Producto.findById(idProducto)
        } catch (error) {
            console.log(error)
            throw crearError(500, "Error al buscar el producto")
        }
    }

    async insertarProducto(producto, autoridad){

        try {
            if(autoridad.rol != "EMPLEADO"){
                throw crearError(403, "Solo los empleados pueden insertar productos")
            }

            //Validar...
            //let validador = new Validator(producto, reglasProductoInsercion)
            //if(validador.fails()){
            //    throw crearError(400, "Datos del producto inválidos", validador.errors.errors)
            //}

            let error = validar(producto, this.reglasProductoInsercion)
            if(error){
                throw error
            }

            let productoMG = new Producto(producto)
            return await productoMG.save()
        } catch (error) {
            if(error.codigo){
                throw error
            }
            console.log(error)
            throw crearError(500, "Error al insertar el producto.")
        }

    }
}

