import { HttpClient } from "@angular/common/http";
import { Pedido } from "../entidades/pedido";
import { Injectable } from "@angular/core";
import { configuracion } from "../../util/configuracion";
import { Observable } from "rxjs";

@Injectable({
    providedIn : 'root'
})
export class ServicioOrdenesCompra {

    constructor(private httpClient:HttpClient){
    }

    public enviarOrdenDeCompra(ordenDeCompra:Pedido):Observable<any>{
        /*
        let ordenDeCompra:any = {
            formaPago : cesta.formaPago,
            direccionFacturacion : cesta.direccionFacturacion,
            direccionEntrega : cesta.direccionEntrega,
            usuario: {
                    _id : cesta.usuario?._id,
                },
            detalles : cesta.detalles
        } 
        */          
        return this.httpClient.post(configuracion.urlServicio+"/seguro/ordenesDeCompra", ordenDeCompra)
    }

}