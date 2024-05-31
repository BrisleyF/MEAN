class Coche {
    constructor(
        public marca:string,
        public modelo:string
    ){        
    }
}

class Pelicula {
    constructor(
        public titulo:string,
        public year:number
    ){        
    }
}

class AlmacenamientoCoches {
    public coches:Coche[] = []

    public add(coche:Coche):void{
        this.coches.push(coche)
    }
}

class AlmacenamientoPeliculas {
    public peliculas:Pelicula[] = []

    public add(pelicula:Pelicula):void{
        this.peliculas.push(pelicula)
    }
}

let coche1:Coche = new Coche("FIAT", "Uno 45s")
let pelicula1:Pelicula = new Pelicula("2001", 1968)

let almacenamientoCoches1:AlmacenamientoCoches = new AlmacenamientoCoches()
almacenamientoCoches1.add(coche1)
//almacenamientoCoches1.add(pelicula1)

let almacenamientoPeliculas1:AlmacenamientoPeliculas = new AlmacenamientoPeliculas()
//almacenamientoPeliculas1.add(coche1)
almacenamientoPeliculas1.add(pelicula1)

//////////////////
//              //
// CON GENERICS //
//              //
//////////////////

class Almacenamiento <T> {

    public elementos:T[]

    public add(elemento:T):void{
        this.elementos.push(elemento)
    }    

    public get(pos:number):T{
        return this.elementos[pos]
    }    

}

let almacenamientoCoches2:Almacenamiento<Coche> = new Almacenamiento()
let almacenamientoPeliculas2:Almacenamiento<Pelicula> = new Almacenamiento()

almacenamientoCoches2.add(coche1)
//almacenamientoPeliculas2.add(coche1)
//almacenamientoCoches2.add(pelicula1)
almacenamientoPeliculas2.add(pelicula1)

let coche2:Coche = almacenamientoCoches2.get(0)
//let pelicula2:Pelicula = almacenamientoCoches2.get(0)