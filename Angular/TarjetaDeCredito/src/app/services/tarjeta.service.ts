import { Observable } from 'rxjs';
import { Tarjeta } from './../Models/tarjeta';
import { CrearTarjetaComponent } from './../components/crear-tarjeta/crear-tarjeta.component';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TarjetaService {
  private _URL:string = "http://localhost:3000/api/";

  constructor(private _http:HttpClient) { }

  CrearTarjeta(Tarjeta:Tarjeta):Observable<any>{
    return this._http.post(this._URL+"addCard",Tarjeta)
  }
  mostrarTarjeta():Observable<any>{
    return this._http.get(this._URL);
  }
}
