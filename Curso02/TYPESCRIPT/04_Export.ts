
//Por dios por dios, solo una clase por fichero

//Exportando una clase
export class Calculadora {
    public sumar(s1:number, s2:number):number{
        return s1+s2;
    }
}

export class Saludador {
    public saludar(nombre:string):string{
        return "Hola "+nombre;
    }
}

//Exportando una función
export let funcion = function(){
    console.log("Soy una función")
}

//Exportando una variable
export let dato:number = 100

//Exportando un objeto
export let obj = {
    prop1: "valor 1",
    prop2: "valor 2",
    prop3: "valor 3",
}
