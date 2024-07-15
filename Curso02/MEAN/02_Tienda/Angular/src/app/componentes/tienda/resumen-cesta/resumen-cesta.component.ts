import { Component } from '@angular/core';
import { Pedido } from '../../../modelo/entidades/pedido';
import { ServicioCesta } from '../../../modelo/servicios/servicioCesta';

@Component({
  selector: 'app-resumen-cesta',
  standalone: true,
  imports: [],
  templateUrl: './resumen-cesta.component.html'
})
export class ResumenCestaComponent {
  public cesta!:Pedido

  public constructor(private servicioCesta:ServicioCesta){
    this.cesta = servicioCesta.getCesta()
  }
}
