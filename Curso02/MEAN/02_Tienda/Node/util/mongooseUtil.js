const mongoose = require("mongoose")

exports.conectar = async function(){
    try {
        console.log("Conectando con la bb.dd...")
        let cadenaDeConexion = process.env["mongodb.url"]
        await mongoose.connect(cadenaDeConexion)
        console.log("Conexión establecida.")
    } catch (error) {
        console.log(error)
        throw ({ codigo : "500",  mensaje : "no se pudo onectar con la bb.dd"} )        
    }
}

