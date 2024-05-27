const fs = require("fs/promises"); // Modula viene por defecto con Node.js

// Las promesas son calback pero sin calback hell.

/* let promesa = fs.readFile("./fichero1.txt");
// calback que procesa el exito
promesa.them(function(){

})
// calback que procesa el error
promesa.catch(function(){

}) */

let contenido1;
let contenido2;

fs.readFile("./fichero1.txt")
    .then(function(contenido){
        contenido1 = contenido.toString();
        return fs.readFile("./fichero2.txt");
    })
    .then(function(contenido){
        contenido2 = contenido.toString();
        return fs.readFile("./fichero3.txt");
    })
    .then(function(contenido){
        let contenido3 = contenido.toString();
        return fs.writeFile("./fichero4.txt", contenido1+"\n"+contenido2+"\n"+contenido3);
    })
    .then(function(){
        console.log("Fichero creado");
    })
    .catch(function(error){
        console.log(error);

    })

console.log("FIN");