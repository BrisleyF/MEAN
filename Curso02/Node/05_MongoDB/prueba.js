// npm install mongodb
require('dotenv').config({path: '../.env'});
const mongodb = require("mongodb");
const url = process.env.DATABASE_URL;


const client = new mongodb.MongoClient(url);

let coleccion;
let dbs;

client.connect()
.then(_dbs => {
    dbs = _dbs;
    let esquema = dbs.db("esquema-discos");
    coleccion = esquema.collection("disco");

    //INSERTAR
    let disco = {
        //_id : "Tocoto", dejar que mongo genere el _id
        titulo : "back in black",
        grupo  : "AC/DC",
        year   : 1980,
        discografia : "NPI"
    }
    return coleccion.insertOne(disco);
})
.then( resultado => {
    console.log("Resultado de la insercion: ", resultado);

    //return coleccion.find().toArray();

    let cursor = coleccion.find(); // Esto es sincrono y devulve un cursor
    // toArray (o cualquier otro metodo de recorrer el cursor) es asincrono
    return cursor.toArray();
})
.then( discos => {
    console.log(discos);
    return dbs.close();
})
.then( () => {
    console.log("Desconectado");
})
.catch(error => console.log(error));