const fs = require("fs"); // Modula viene por defecto con Node.js

// readFileSync: leer de manera sincrona los ficheros y espera la respuesta. Mala practica.

/* let contenido1 = fs.readFileSync("./fichero1.txt").toString();
let contenido2 = fs.readFileSync("./fichero2.txt").toString();
let contenido3 = fs.readFileSync("./fichero3.txt").toString();
let contenido4 = contenido1+contenido2+contenido3;
fs.writeFileSync("./fichero4.txt", contenido4);
console.log(contenido1); */


// readFile: leer los fecheros de maneras asincrona. 
// El hilo da la orden de leer y que ejecute el calback pero no se queda a esperar la respuesta.
// calback: funcion que se ejecuta cuando se realice la tarea, es decir al final.
// calback se utilizaba hasta que salieron las promesas, ya que se generaba un calback hell.
// No usaremos calback en los proyectos.

fs.readFile("./fichero1.txt", function(error, contenido){
    if(error){
        console.log(error);
        return;
    }
    let contenido1 = contenido.toString();
    console.log(contenido1);

    fs.readFile("./fichero2.txt", function(error, contenido){
        if(error){
            console.log(error);
            return;
        }
        let contenido2 = contenido.toString();
        console.log(contenido2);

        fs.readFile("./fichero3.txt", function(error, contenido){
            if(error){
                console.log(error);
                return;
            }
            let contenido3 = contenido.toString();
            console.log(contenido3);
            
            let contenido4 = contenido1+"\n"+contenido2+"\n"+contenido3;
            
            fs.writeFile("./fichero4.txt", contenido4, function(error){
                if(error){
                    console.log(error);
                    return;
                }
                console.log("Fichero creado");
            });
        });
    });
});

console.log("Fin");
