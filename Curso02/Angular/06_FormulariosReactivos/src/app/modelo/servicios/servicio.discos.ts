import { Injectable } from "@angular/core";
import { Disco } from "../entidades/disco";

@Injectable({
    providedIn : "root"
})
export class ServicioDiscos {

    private discos:Disco[] = []

    public constructor(){
        console.log("CREANDO SERVICIO_DISCOS")

        this.discos.push({
            id     : 1,
            titulo : "AAA",
            grupo  : "",
            genero : "",
            year   : 0,
            notas  : ""
        })
        this.discos.push({
            id     : 2,
            titulo : "BBB",
            grupo  : "",
            genero : "",
            year   : 0,
            notas  : ""
        })
        this.discos.push({
            id     : 3,
            titulo : "CCC",
            grupo  : "",
            genero : "",
            year   : 0,
            notas  : ""
        })
    }

    public insertar(disco:Disco):void{
        console.log("Insertar en ServicioDiscos")

        disco.id = Date.now() //timestamp
        this.discos.push(disco)
    }

    public listar():Disco[]{
        console.log("Listar en ServicioDiscos")

        //let json:string = JSON.stringify(this.discos)
        //let nuevoArray:Disco[] = JSON.parse(json)
        //return nuevoArray
        return JSON.parse(JSON.stringify(this.discos))
    }

    public buscarPorId(id:number):Disco|undefined{
        return this.discos.find(function(e){
            return e.id == id
        })
    }

}

