import { Subscription } from 'rxjs';
import { Component, OnDestroy } from '@angular/core';
import { ServicioAutenticacion } from '../../../modelo/servicios/servicioAutenticacion';
import { Router, RouterLink } from '@angular/router';
import { Usuario } from '../../../modelo/entidades/usuario';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './menu.component.html'
})
export class MenuComponent implements OnDestroy {

  public nombre:string = ''
  private subscription:Subscription

  constructor(
      private servicioAutenticacion:ServicioAutenticacion,
      private router:Router
    ){
    //let usuario:Usuario = servicioAutenticacion.getUsuario()
    //this.nombre = usuario.nombre
    //this.nombre = servicioAutenticacion.getUsuario().nombre

    this.subscription = servicioAutenticacion.getSubjectUsuario()
      .subscribe({
        next : (usuario:Usuario) => { this.nombre = usuario.nombre},
        error: (error) => console.log(error)
      })
  }
  ngOnDestroy(): void {
    console.log("cancelando la subscripcion");
    this.subscription.unsubscribe();
  }

  public logout():void{
    //this.subscription.unsubscribe();
    this.servicioAutenticacion.logout()
    this.router.navigateByUrl("/")
  }

}
