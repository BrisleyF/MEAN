import { Injectable } from "@angular/core";
import { Pedido } from "../entidades/pedido";

@Injectable({
    providedIn : 'root'
})
export class ServicioCesta {

    //La responsabilidad de esta clase es
    //asegurarse de que todo el mundo está utilizando
    //el mismo pedido (cesta)
    //Para ello tiene declarado como atributo un objeto del tipo pedido

    private cesta:Pedido = new Pedido()

    public getCesta(){
        return this.cesta
    }
   
}