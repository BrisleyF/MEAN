import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Observable, tap } from 'rxjs';
import { configuracion } from '../../util/configuracion';
import { Usuario } from '../entidades/usuarios';

@Injectable({
    providedIn : "root"
})
export class ServicioAutenticacion {

    public constructor(private httpClient:HttpClient){}

    // Login
    // Logout
    
    public getUsuario():Usuario{
        //console.log(sessionStorage.getItem("usuario"))
        return JSON.parse(sessionStorage.getItem("usuario") ?? "");
    }
    
    public getJWT():string {
        return sessionStorage.getItem("JWT") ?? ""
    }

    public login(credenciales:any):Observable<any>{

        return this.httpClient.post(configuracion.urlServicio+"/login", credenciales)
            .pipe(
                tap( (respuesta:any) => {
                    console.log("guardando el JWT en el session storage")
                    sessionStorage.setItem("JWT", respuesta.jwt)
                    sessionStorage.setItem("usuario", JSON.stringify(respuesta.usuario))
                })
            )
    }

    public logout():void{
        sessionStorage.clear();
    }

}