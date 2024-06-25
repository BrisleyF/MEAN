import { Component } from '@angular/core';
import { ServicioAutenticacion } from '../../../modelo/servicios/servicioAutenticacion';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [],
  templateUrl: './menu.component.html',
})
export class MenuComponent {

  constructor(
    private servicioAutenticacion:ServicioAutenticacion,
    private router:Router
  ){}

  public usuario = this.servicioAutenticacion.getUsuario()

  public logout():void{
    this.servicioAutenticacion.logout();
    this.router.navigateByUrl("/");
  }
}
