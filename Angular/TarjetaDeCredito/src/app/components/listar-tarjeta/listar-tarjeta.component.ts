import { Component, OnInit } from '@angular/core';
import { TarjetaService } from '../../services/tarjeta.service';
import { Tarjeta } from '../../Models/tarjeta';

@Component({
  selector: 'app-listar-tarjeta',
  standalone: true,
  imports: [],
  templateUrl: './listar-tarjeta.component.html',
  styleUrl: './listar-tarjeta.component.css'
})
export class ListarTarjetaComponent implements OnInit {
  public listaTarjetas:any[] = [];
  constructor(private _ts:TarjetaService){};

  ngOninit(): void {
    this._ts.mostrarTarjeta().subscribe((data) => this.listaTarjetas = data); 
  }
}
