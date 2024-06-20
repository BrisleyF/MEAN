import { ServicioUsuarios } from '../../../modelo/servicios/servicioUsario';
import { ServicioAlmacenamiento } from './../../../util/servicioAlmacenamiento';
import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-confirmacion-registro',
  standalone: true,
  imports: [RouterLink, FormsModule],
  templateUrl: './confirmacion-registro.component.html'
})
export class ConfirmacionRegistroComponent {

  public terminosAceptados:boolean = false;

  public constructor(
    private servicioAlmacenamiento:ServicioAlmacenamiento,
    private ServicioUsuarios:ServicioUsuarios,
    private router:Router
  ){
    console.log(servicioAlmacenamiento.getItem("datosRegistro"))
  }

  public registrarUsuario():void{
    let usuario = this.servicioAlmacenamiento.getItem("datosRegistro");

    delete usuario.confirmarPassword;

    this.ServicioUsuarios.insertarUsuario(usuario)
    .subscribe({
      next: () => {
        alert("Registro completado con existo, redirigiendo a la pantalla de home.");
        this.servicioAlmacenamiento.clear();
        this.router.navigateByUrl("/");
      },
      error: error => {
        console.log(error);
        alert("Hubo un fallo durante el registro");
      }
    })
  }
}
