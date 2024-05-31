import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { CabeceraComponent } from './componentes/cabecera/cabecera.component';
import { MenuComponent } from './componentes/menu/menu.component';
import { DiscosComponent } from './componentes/discos/discos.component';
import { PieComponent } from './componentes/pie/pie.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CabeceraComponent, MenuComponent, PieComponent, DiscosComponent],
  templateUrl: './app.component.html'
})
export class AppComponent {
  
}
