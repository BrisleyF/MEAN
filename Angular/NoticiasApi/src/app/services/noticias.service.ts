import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
require('dotenv').config({path: '../.env'});
// Ahora puedes acceder a las variables de entorno
const api = process.env.API;

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  constructor(private _http:HttpClient) { }

  getNoticias(params:any):Observable<any>{
    const URL = api;
    return this._http.get(URL);
  }
}
