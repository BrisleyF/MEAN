import { Component } from '@angular/core';
import { ServicioAlmacenamiento } from '../../../util/servicioAlmacenamiento';

@Component({
  selector: 'app-confirmacion-registro',
  standalone: true,
  imports: [],
  templateUrl: './confirmacion-registro.component.html'
})
export class ConfirmacionRegistroComponent {

  public constructor(private servicioAlmacenamiento:ServicioAlmacenamiento){
    console.log(servicioAlmacenamiento.getItem("datosRegistro"))
  }

}
