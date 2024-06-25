import { Component } from '@angular/core';
import { RouterOutlet, Router } from '@angular/router';
import { MenuComponent } from '../../tienda/menu/menu.component';

@Component({
  selector: 'app-maquetacion-tienda',
  standalone: true,
  imports: [RouterOutlet, MenuComponent],
  templateUrl: './maquetacion-tienda.component.html'
})
export class MaquetacionTiendaComponent {

  public constructor(public router:Router){
    // Es este componente el que debe decidir que se mostrara en la tienda
    router.navigateByUrl("/tienda/perfil")
  }


}
