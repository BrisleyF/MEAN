import { Component } from '@angular/core';
import { CabeceraComponent } from './componentes/cabecera/cabecera.component';
import { MenuComponent } from './componentes/menu/menu.component';
import { DiscosComponent } from './componentes/discos/discos.component';
import { PieComponent } from './componentes/pie/pie.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CabeceraComponent, MenuComponent, DiscosComponent, PieComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
}
