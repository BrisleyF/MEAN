const mensajes = {
    "400" : "Datos inválidos",
    "401" : "Requerida autenticación",
    "403" : "Permisos insuficientes"
}

exports.crearError = function(codigo, mensaje){
    if(!mensaje){
        mensaje = mensajes[codigo]
    }

    return {
        codigo  : codigo,
        mensaje : mensaje
    }
}
