import { Component } from '@angular/core';
import { ServicioCesta } from '../../../modelo/servicios/servicioCesta';
import { Pedido } from '../../../modelo/entidades/pedido';
import { DetalleCestaComponent } from '../detalle-cesta/detalle-cesta.component';
import { CurrencyPipe } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cesta',
  standalone: true,
  imports: [ RouterLink, DetalleCestaComponent, CurrencyPipe ],
  templateUrl: './cesta.component.html'
})
export class CestaComponent {

  public cesta:Pedido

  public constructor(private servicioCesta:ServicioCesta){
    this.cesta = servicioCesta.getCesta()
  }
  
  public vaciarCesta(){
    this.cesta.vaciar()
  }

}
