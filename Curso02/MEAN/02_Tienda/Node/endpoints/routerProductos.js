const EndpointProductos = require("./endpointProductos").EndpointProductos
const router = require("express").Router()

let endpointProductos = new EndpointProductos()

//router.get('/seguro/productos', endpointProductos.listarProductos)

router.get('/seguro/productos', function(request, response){
    endpointProductos.listarProductos(request, response)
})
router.get('/seguro/productos/:id',endpointProductos.buscarProductoPorId.bind(endpointProductos))
router.post('/seguro/productos', endpointProductos.insertarProducto.bind(endpointProductos))
//router.put('/seguro/productos/:id', endpointProductos.modificarProducto.bind(endpointProductos))
//router.delete('/seguro/productos/:id', endpointProductos.borrarProducto.bind(endpointProductos))

exports.router = router

