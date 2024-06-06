import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CabeceraComponent } from './componentes/maquetacion/cabecera/cabecera.component';
import { PieComponent } from './componentes/maquetacion/pie/pie.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CabeceraComponent, PieComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angular';
}
