import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, Subject, tap } from "rxjs";
import { configuracion } from "../../util/configuracion";
import { Usuario } from "../entidades/usuario";

@Injectable({
    providedIn : 'root'
})
export class ServicioAutenticacion {

    private subjectUsuario:BehaviorSubject<Usuario>

    public constructor(private httpClient:HttpClient){
        //Esto es por si el usuario pulsa F5 y hay un usuario en el sessionStorage
        let usuario = this.getUsuario()
        this.subjectUsuario = new BehaviorSubject(usuario)
    }

    public getSubjectUsuario():Subject<Usuario> {
        return this.subjectUsuario
    }

    public getUsuario():Usuario {
        console.log("GET USUARIO")
        return JSON.parse(sessionStorage.getItem("usuario") ?? "{}")
    }

    public setUsuario(usuario: Usuario): void {
        sessionStorage.setItem("usuario", JSON.stringify(usuario))
        this.subjectUsuario.next(usuario)
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
                    //sessionStorage.setItem("usuario", JSON.stringify(respuesta.usuario))
                    this.setUsuario(respuesta.usuario)
                })
            )
    }

    public logout():void{
        sessionStorage.clear()
        //Si un subject emite el evento 'complete' todas las subscripciones
        //activas se cancelarán
        //this.subjectUsuario.complete()
        //Una vez emitido el 'complete' el subject ya no sirve pa na y necesitamos uno nuevo
        //this.subjectUsuario = new BehaviorSubject(new Usuario())
    }

}