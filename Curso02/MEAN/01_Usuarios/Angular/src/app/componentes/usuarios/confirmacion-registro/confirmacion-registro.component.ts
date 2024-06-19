import { Component } from '@angular/core';
import { ServicioAlmacenamiento } from '../../../util/servicioAlmacenamiento';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-confirmacion-registro',
  standalone: true,
  imports: [RouterLink, FormsModule],
  templateUrl: './confirmacion-registro.component.html'
})
export class ConfirmacionRegistroComponent {

  public terminosAceptados:boolean = false;

  public constructor(private servicioAlmacenamiento:ServicioAlmacenamiento){
    console.log(servicioAlmacenamiento.getItem("datosRegistro"))
  }

  public registrarUsuario():void{
    
  }
}
