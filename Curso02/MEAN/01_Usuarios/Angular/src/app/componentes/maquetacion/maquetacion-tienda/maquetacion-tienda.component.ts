import { ServicioAutenticacion } from '../../../modelo/servicios/servicioAutenticacion';
import { Component } from '@angular/core';
import { MenuComponent } from '../../tienda/menu/menu.component';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-maquetacion-tienda',
  standalone: true,
  imports: [RouterOutlet, MenuComponent],
  templateUrl: './maquetacion-tienda.component.html'
})
export class MaquetacionTiendaComponent {

  constructor(
    private router:Router,
    private ServicioAutenticacion:ServicioAutenticacion
  ){
    //No es responsabilidad de este componente el impedir que el usuario
    //navege utilizando las guardas.
    if(ServicioAutenticacion.getJWT() == ""){
      console.log("ANDE VAS");
      router.navigateByUrl("/");
      return;
    }

    //Es este componente el que deide que se verá nada más entrar a la tienda
    router.navigateByUrl("/tienda/perfil")
  }

}
