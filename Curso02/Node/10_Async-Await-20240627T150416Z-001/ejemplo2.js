//npm install mongodb
const mongodb = require("mongodb")

//1-Conectar
//2-Insertar un disco
//3-Listar los discos
//4-Desconectar

/*
function ejecutarProcesoBatch(){

    return new Promise(function(resolve, reject) {

        const url = "mongodb://localhost:27017"
        const client = new mongodb.MongoClient(url)

        let coleccion
        let dbs

        client.connect()
        .then( _dbs => {
            dbs = _dbs
            let esquema = dbs.db("esquema-discos")
            coleccion = esquema.collection("discos")
            
            let disco = {
                titulo : "Number of the beast",
                grupo  : "Iron Maiden",
                year   : 1982,
                discografica : "SPM"
            }  
            return coleccion.insertOne(disco)   
        })
        .then( resultado => {
            console.log("Resultado de la inserción:", resultado)
            return coleccion.find().toArray()
        })
        .then( discos => {
            console.log(discos)
            return dbs.close()
        })
        .then( () => {
            console.log("Desconectado")
            resolve()
        })    
        .catch(error => {
            console.log(error)
            reject({ codigo:500, mensaje:"Error ejecutando el proceso"})
        })
    })        

}
*/

async function ejecutarProcesoBatch(){
    const url = "mongodb://localhost:27017"
    const client = new mongodb.MongoClient(url)

    try {
        let dbs = await client.connect()
        let esquema = dbs.db("esquema-discos")
        let coleccion = esquema.collection("discos")

        let disco = {
            titulo : "Number of the beast",
            grupo  : "Iron Maiden",
            year   : 1982,
            discografica : "SPM"
        }  

        let resultado = await coleccion.insertOne(disco)   
        console.log("Resultado de la inserción:", resultado)
        let discos = await coleccion.find().toArray()
        console.log(discos)
        await dbs.close()
    } catch (error) {
        console.log(error)
        throw { codigo:500, mensaje:"Error con la base de datos" }
    }
}

ejecutarProcesoBatch()
.then( () => console.log("FIN"))
.catch( error => console.log(">>>>>>>>>>", error))
