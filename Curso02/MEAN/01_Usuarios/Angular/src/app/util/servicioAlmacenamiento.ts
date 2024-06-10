import { Injectable } from "@angular/core";


@Injectable({
    providedIn : 'root'
})
export class ServicioAlmacenamiento {

    public almacenamientoMemoria:any[string] = []

    public setItem(clave:string, valor:any):void {
        this.almacenamientoMemoria[clave] = valor
    }

    public getItem(clave:string):any {
        return this.almacenamientoMemoria[clave]
    }

    public removeItem(clave:string):void {
        delete this.almacenamientoMemoria[clave]
    }

}

