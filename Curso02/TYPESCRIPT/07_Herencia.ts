
abstract class Animal {
    public nombre:string
    public peso:number
    public edad:number

    public abstract saludar():void
}

class Perro extends Animal{
    //RAZA
    public morder(){
        console.log("ÑACA")
    }

    //Sobreescritura de métodos
    public saludar(): void {
        console.log("Hola, soy el perro "+this.nombre+" y digo GUAU GUAU")
    }
}

class Gato extends Animal{
    public arañar(){
        console.log("RAAAAS")
    }

    public saludar(): void {
        console.log("Hola, soy el gato "+this.nombre+" y digo MIAU MIAU")
    }    
}

let perros:Perro[] = [ 
    new Perro(),
    new Perro()
]
let gatos:Gato[] = [ 
    new Gato(),
    new Gato()
]

let zoo:Animal[] = [ 
    new Perro(),
    new Gato()
]


zoo.forEach( (animal:Animal) => animal.saludar)

//Polimorfismo: referenciar a un objeto específico con una variable genérica
let animal1:Animal = new Perro()

