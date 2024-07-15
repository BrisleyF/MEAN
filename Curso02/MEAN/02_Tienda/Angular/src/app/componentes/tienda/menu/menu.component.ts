import { Component, OnDestroy } from '@angular/core';
import { ServicioAutenticacion } from '../../../modelo/servicios/servicioAutenticacion';
import { Router, RouterLink } from '@angular/router';
import { Usuario } from '../../../modelo/entidades/usuario';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './menu.component.html'
})
export class MenuComponent implements OnDestroy {

  public nombre:string = ''
  private subscripcion:Subscription

  constructor(
      private servicioAutenticacion:ServicioAutenticacion,
      private router:Router
    ){
    //let usuario:Usuario = servicioAutenticacion.getUsuario()
    //this.nombre = usuario.nombre
    //this.nombre = servicioAutenticacion.getUsuario().nombre
    this.subscripcion = servicioAutenticacion.getSubjectUsuario()
      .subscribe({
        next : (usuario:Usuario) => { 
          console.log("USUARIO RECIBIDO EN MENU_COMPONENT")
          this.nombre = usuario.nombre
        },
        error: (error) => console.log(error)
      })
  }

  ngOnDestroy(): void {
    console.log("Cancelando la subscripción")
    this.subscripcion.unsubscribe()
  }

  public logout():void {
    this.servicioAutenticacion.logout()
    this.router.navigateByUrl("/")
    
    //Cortar por lo sano: Si haces logout hacemos como si se diera a F5
    //window.location.href="/"

  }

}


