//////////////
//Interfaces//
//////////////

//El nombre de la interfaz, por convenio, va en Pascal case (uppercamel case)
//Una interfaz es un contrato que deben cumplir los objetos 

//Definimos el tipo 'Avion'
interface Avion {
    //No tienen modificadores de acceso
    id:number,
    fabricante:string,
    modelo:string,
    year:number
    //Tambien podemos definir firmas de funciones
}

//Si hemos definido un nuevo tipo ya podemos crear variables del tipo Avion
let a1:Avion = {
    id : 1,
    fabricante : 'Mig',
    modelo : '29',
    year : 1979
}

/*
//No transpila:
let a2:Avion = {
    id : 1,
    fabricante : 'Mig',
    //modelo : '29',
    year : 1979
}

//No transpila:
let a3:Avion = {
    id : 1,
    fabricante : 'Mig',
    modelo : '29',
    year : 1979,
    movida : "???"
}
*/


//La variable a3 no es del tipo 'Avion' pero si tiene las características necesarias para serlo
let a3 = {
    id : 1,
    fabricante : 'Mig',
    modelo : '29',
    year : 1979
}
//Podemos asignarla a una variable del tipo 'Avion'
let a4:Avion = a3;

//Esto implica que podemos, por ejemplo, obtener un objeto del tipo Avion 
//a partir de un JSON (en realidad nos están dando cuartelillo)
let json = JSON.stringify(a3)
let a5:Avion = JSON.parse(json)

///////////////////////////
// METODOS EN INTERFACES //
///////////////////////////

interface GestorAlmacenamiento {
    nombre:string
    setItem(clave:string, valor:any):void
}

let almacenamientoBBDD:GestorAlmacenamiento = {
    nombre: 'BBDD',
    setItem: function(){
        console.log("guardando en la base de datos...")
    }
}

//Mejor utilizamos una clase que implemente la interfaz 
class AlmacenamientoLocal implements GestorAlmacenamiento {
    nombre:string = "LOCAL"

    setItem(clave:string, valor:any):void{
        console.log("Guardando en almacenamiento local")
    }
}

class AlmacenamientoSesion implements GestorAlmacenamiento {
    nombre:string = "SESION"

    setItem(clave:string, valor:any):void{
        console.log("Guardando en almacenamiento session")
    }
}

class AlmacenamientoCookie implements GestorAlmacenamiento {
    nombre:string = "COOKIE"

    setItem(clave:string, valor:any):void{
        console.log("Guardando en almacenamiento session")
    }
}

let al1:AlmacenamientoLocal  = new AlmacenamientoLocal()
let al2:AlmacenamientoSesion = new AlmacenamientoSesion()
let al3:AlmacenamientoCookie = new AlmacenamientoCookie()

let al4:GestorAlmacenamiento = new AlmacenamientoLocal()
let al5:GestorAlmacenamiento = new AlmacenamientoSesion()
let al6:GestorAlmacenamiento = new AlmacenamientoCookie()

console.log("FIN")


