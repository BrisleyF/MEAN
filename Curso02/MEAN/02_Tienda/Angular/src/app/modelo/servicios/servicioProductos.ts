import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { configuracion } from "../../util/configuracion";
import { Observable } from "rxjs";

@Injectable({
    providedIn : 'root'
})
export class ServicioProductos {

    public constructor(private httpClient:HttpClient){}

    public listar():Observable<any>{
        return this.httpClient.get(configuracion.urlServicio+"/seguro/productos")
    }

}