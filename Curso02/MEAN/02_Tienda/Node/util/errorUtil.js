const mensajes = {
    "400" : "Datos inválidos",
    "401" : "Requerida autenticación",
    "403" : "Permisos insuficientes"
}

//El parámetro 'data' será opcional
exports.crearError = function(codigo, mensaje, data){
    if(!mensaje){
        mensaje = mensajes[codigo]
    }

    let error = {
        codigo  : codigo,
        mensaje : mensaje
    }
    if(data){
        error.data = data
    }

    return error
}
