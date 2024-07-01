const fs = require("fs/promises")

/*
function concatenarFicheros(){
    return new Promise(function(resolve, reject) {
        let contenido1 
        let contenido2

        fs.readFile("./fichero1.txt")
        .then( contenido => {
            contenido1 = contenido.toString()
            return fs.readFile("./fichero2.txt")
        })
        .then( contenido => {
            contenido2 = contenido.toString()
            return fs.readFile("./fichero3.txt")
        })
        .then( contenido => {
            let contenido3 = contenido.toString()
            return fs.writeFile("./fichero4.txt", contenido1+"\n"+contenido2+"\n"+contenido3) 
        })
        .then( () => {
            console.log("Fichero creado")
            resolve()
        })
        .catch( err => {
            console.log( err )
            reject({ codigo:500, mensaje:"Error al concatenar los ficheros" })
        })
    })
}
*/
    
///////////////////////////
// AHORA CON ASYNC-AWAIT //
///////////////////////////

//Una función asíncrona devuelve SIEMPRE una promesa
async function concatenarFicheros(){
    try {
        let contenido1 =  await fs.readFile("./fichersfedderegfedo1.txt")
        let contenido2 =  await fs.readFile("./fichero2.txt")
        let contenido3 =  await fs.readFile("./fichero3.txt")    
        let contenido4 = contenido1+'\n'+contenido2+'\n'+contenido3    
        await fs.writeFile("./fichero4.txt", contenido4)
        console.log("Fichero creado")
    } catch ( error ){
        console.log(error)
        throw { codigo:500, mensaje:"Error al concatenar los ficheros" }
    }
}

//Si invocamos una función asíncrona fuera de una función asíncrona estamos obligados
//a trabajar con la promesa que se devuelve
concatenarFicheros()
.then( () => { console.log("FIN")} )
.catch( error => console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>", error) )

console.log("Fin en falso")


