
export class Disco {

    public constructor(
            public titulo : string|null = null, 
            public grupo  : string|null = null,
            public year   : number|null = null){
        }

    public vaciar():void{
        this.titulo = null
        this.grupo  = null
        this.year   = null
    }

}
