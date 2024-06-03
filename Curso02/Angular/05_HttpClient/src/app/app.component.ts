import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CabeceraComponent } from './componentes/cabecera/cabecera.component';
import { MenuComponent } from './componentes/menu/menu.component';
import { ListadoUsuariosComponent } from './componentes/listado-usuarios/listado-usuarios.component';
import { PieComponent } from './componentes/pie/pie.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CabeceraComponent, MenuComponent, ListadoUsuariosComponent, PieComponent],
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'Ej05_HttpClient';
}
