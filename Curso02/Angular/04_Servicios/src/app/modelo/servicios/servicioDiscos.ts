import { Injectable } from "@angular/core";
import { Disco } from "../entidades/disco";

@Injectable({
    providedIn : 'root'
})
export class ServicioDiscos {

    private discos:Disco[] = []

    constructor(){
        console.log("Creando servicio discos")
    }

    public insertar(disco:Disco):void{
        disco.id = Date.now() //timestamp
        this.discos.push(disco)
    }

    public listar():Disco[]{
        //Truqui cutrecillo
        return JSON.parse(JSON.stringify(this.discos))
    }

    public buscarPorId(id:number):Disco|undefined{
        /*
        //Con un bucle
        for(let disco of this.discos){
            if(disco.id == id){
                return disco
            }
        }
        */        
        return this.discos.find( d => d.id == id )
    }

}




