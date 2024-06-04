require('dotenv').config({path: '../.env'});
const mongodb = require("mongodb");

const databaseUrl = process.env.DATABASE_URL_PELICULAS;
exports.esquema = null;

exports.conectar = function(){

    return new Promise(function(resolve, reject){
        console.log(databaseUrl);
        const client = new mongodb.MongoClient(databaseUrl);
        client.connect()
        .then( dbs => {
            console.log("Se conecto a la BB.DD");
            exports.esquema = dbs.db("esquema-peliculas");
            resolve();
        })
        .catch( error => {
            console.log(error);
            reject({
                codigo: "500",
                mensaje: "No se pudo conectar a la base de datos."
            });
        })
    })
}