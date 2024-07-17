import { Component } from '@angular/core';
import { Pedido } from '../../../modelo/entidades/pedido';
import { ServicioCesta } from '../../../modelo/servicios/servicioCesta';
import { DetallePedido } from '../../../modelo/entidades/detallePedido';

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

  public aumentar(detalle:DetallePedido):void {
    this.cesta.addProducto(detalle.producto, 1, detalle.producto.precio)
  }

  public disminuir(detalle:DetallePedido):void {
    this.cesta.quitarProducto(detalle.producto, 1)
  }
  
  public eliminar(detalle:DetallePedido):void {
    this.cesta.eliminarDetalle(detalle.producto)
  }

}
