import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable( { providedIn : 'root' } )
export class ServicioPeliculas {

    public constructor(private httpClient:HttpClient){
    }

    public listarPeliculas():Observable<any> {
        return this.httpClient.get("http://localhost:5000/peliculas")
    }

}
