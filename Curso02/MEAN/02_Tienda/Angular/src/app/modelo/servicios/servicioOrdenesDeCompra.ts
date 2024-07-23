import { HttpClient } from "@angular/common/http";
import { Pedido } from "../entidades/pedido";
import { Injectable } from "@angular/core";
import { configuracion } from "../../util/configuracion";
import { Observable } from "rxjs";

@Injectable({
    providedIn : 'root'
})
export class ServicioOrdenesDeCompra {

    constructor(private httpClient:HttpClient){
    }

    public enviarOrdenDeCompra(ordenDeCompra:Pedido):Observable<any>{

        //Tenemos que quitarle el subject al objeto pedido porque crea una referencia circular
        //que impide la generación del jotasón
        //Creamos 'al vuelo' un objeto con las propiedades necesarias, obteniendo los valores del pedido
        let ordenDeCompraSinSubject :any = {
            formaPago : ordenDeCompra.formaPago,
            direccionFacturacion : ordenDeCompra.direccionFacturacion,
            direccionEntrega : ordenDeCompra.direccionEntrega,
            usuario: ordenDeCompra.usuario,
            detalles : ordenDeCompra.detalles
        } 

        return this.httpClient.post(configuracion.urlServicio+"/seguro/ordenesDeCompra", ordenDeCompraSinSubject)
    }

}