const fs = require("fs/promises")


///////////////////////////////////////////
// Función asíncrona que 'devuelve' algo //
///////////////////////////////////////////

async function leerFichero(ruta){
    try {
        return await fs.readFile(ruta)
    } catch ( error ){
        console.log(error)
        throw "ZASCA!"
    }
}

leerFichero("./fichero1.txt")

//Esta función devuelve un 10
function movida1(){
    return 10
}

let x = movida1()
console.log(x)


//Esta función devuelve la promesa de un 10
//Es una promesa que siempre ejecuta 'resolve'
async function movida2(){
    return 10
}

let y = movida2()
console.log(y)

movida2()
.then( numero => console.log(numero))
//.catch() NUNCA VA A FALLAR


