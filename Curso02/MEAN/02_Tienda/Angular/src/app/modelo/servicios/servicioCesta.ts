import { Injectable } from "@angular/core";
import { Pedido } from "../entidades/pedido";
import { ServicioAutenticacion } from "./servicioAutenticacion";
import { Usuario } from "../entidades/usuario";

@Injectable(/*{
    providedIn : 'root'
}*/)
export class ServicioCesta {

    //La responsabilidad de esta clase es
    //asegurarse de que todo el mundo está utilizando
    //el mismo pedido (cesta)
    //Para ello tiene declarado como atributo un objeto del tipo pedido

    private cesta:Pedido 

    constructor(private servicioAutenticacion:ServicioAutenticacion){

        console.log("CREANDO EL SERVICIO_CESTA")

        this.cesta = new Pedido()

        /*leer los detalles del local storage para asignarselos a la cesta
        {
            "123456789012345678901234" : [ detalle1, detalle2, ...],  (harry callahan)
            "432109876543210987654321" : [ detalle1, detalle2, ...]   (bud spencer)
        }
        */
        let cestasJSON = localStorage.getItem("cestas")
        if(cestasJSON){
            let cestas = JSON.parse(cestasJSON)
            let usuario:Usuario = servicioAutenticacion.getUsuario()
            let detalles = cestas[usuario._id]
            //La clase pedido tiene los metodos get y set para el array de detalles
            //En esta línea se está llamando a 'set detalles(...)' que en su código
            //recalcula el total
            if(detalles){
                this.cesta.detalles = detalles
            }
        }

        //Nos subscribimos a los cambios en la cesta
        this.cesta.getSubjectCestaCambiada()
            .subscribe({
                next: evento => this.guardarCesta(evento),
                error: error => console.log(error)
            })
    }

    public getCesta(){
        return this.cesta
    }

    public guardarCesta(evento:string):void{
        //guardar los detalles de la cesta en el local estorage
        console.log("ServicioCesta, evento recibido: "+evento)
        let cestas = JSON.parse(localStorage.getItem("cestas") ?? "{}")
        cestas[this.servicioAutenticacion.getUsuario()._id] = this.cesta.detalles
        localStorage.setItem("cestas", JSON.stringify(cestas))
    }

}