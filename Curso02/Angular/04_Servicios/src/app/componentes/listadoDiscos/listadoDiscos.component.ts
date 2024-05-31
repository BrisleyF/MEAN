import { Component } from '@angular/core';
import { Disco } from '../../modelo/entidades/disco';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { ServicioDiscos } from '../../modelo/servicios/servicioDiscos';

/*
camelCase
PascalCase
snake_case
kebab-case
*/
@Component({
  selector: 'app-listado-discos',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './listadoDiscos.component.html',
})
export class ListadoDiscosComponent {

  public discos:Disco[] //Este es el array que está unido al @for

  public constructor(private servicioDiscos:ServicioDiscos){
    console.log("CREANDO LISTADO_DISCOS_COMPONENT")
    this.discos = servicioDiscos.listar()
  }

}
