import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
    providedIn : "root"
})

export class ServicioUsuarios {
    constructor(private httpClient:HttpClient){

    }

    public comprobarLogin(login:string):Observable<any> {
        return this.httpClient.head("http://localhost:7000/usuarios?login="+login);
    }
}