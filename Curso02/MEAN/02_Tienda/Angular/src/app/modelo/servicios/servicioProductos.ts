import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { configuracion } from "../../util/configuracion";
import { firstValueFrom, map, mergeMap, Observable } from "rxjs";
import { ImagenesUtil } from "../../util/imagenesUtil";

@Injectable({
    providedIn : 'root'
})
export class ServicioProductos {

    public constructor(private httpClient:HttpClient){}

    public listar():Observable<any>{
        return this.httpClient.get(configuracion.urlServicio+"/seguro/productos")
    }

    public getImagenProducto(imageUrl:string): Observable<any> {
        return this.httpClient.get(configuracion.urlServicio+"/"+imageUrl, { responseType: 'blob' })
        .pipe(
                //Usamos mergemap cuando lo que 'sale' de un map es un observable
                //Equivale a un 'await' en JS
                //Equivale a devolver en un 'then' una promesa
                mergeMap( (data:any) => {
                    return ImagenesUtil.createImageFromBlob(data)
                }) 
            )                
    }     

}