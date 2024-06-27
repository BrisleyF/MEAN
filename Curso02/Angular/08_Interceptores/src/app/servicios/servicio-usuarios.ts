import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, pipe, tap } from 'rxjs';

@Injectable( { providedIn : 'root' } )
export class ServicioUsuarios {

    public constructor(private httpClient:HttpClient){
    }

    /*
    public listarUsuarios():Observable<any> {
        return this.httpClient.get("https://reqres.in/api/users")
    }
    */

    public listarUsuarios():Observable<any> {
        return this.httpClient.get("https://reqres.in/api/users")
            .pipe(
                tap(respuesta => console.log("ANTES:",respuesta)),
                map((respuesta:any) => respuesta.data),
                tap(respuesta => console.log("DESPUES:",respuesta)),                
            )
    }



}
