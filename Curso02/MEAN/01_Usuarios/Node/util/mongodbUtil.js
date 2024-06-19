const mongodb = require("mongodb")

exports.esquema = null

exports.conectar = function(){
    return new Promise(function(resolve, reject){

        console.log("Conectando con mongoDB...")
        const url = process.env["mongodb.url"]
        const client = new mongodb.MongoClient(url)
        client.connect()
            .then( dbs => {
                console.log("Conexión establecida")
                exports.esquema = dbs.db(process.env["mongodb.esquema"])
                resolve()
            })
            .catch(error => {
                console.log(error)
                reject({ 
                    codigo : "500", 
                    mensaje : "no se pudo onectar con la bb.dd"}
                )
            })
    })
}
