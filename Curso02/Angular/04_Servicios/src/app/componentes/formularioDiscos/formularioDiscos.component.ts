import { Component } from '@angular/core';
import { Disco } from '../../modelo/entidades/disco';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { ServicioDiscos } from '../../modelo/servicios/servicioDiscos';

@Component({
  selector: 'app-formulario-discos',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './formularioDiscos.component.html',
})
export class FormularioDiscosComponent {

  public disco:Disco = new Disco() //Este es el disco que está unido al formulario con ngModel

  public constructor(
      private router        :Router,
      private activatedRoute:ActivatedRoute,
      private servicioDiscos:ServicioDiscos
    ){
    console.log("CREANDO FORMULARIO_DISCOS_COMPONENT")

      //
      //FALTA LO DE SELECCIONAR EL DISCO
      //

  }

  public insertar():void {
    //Faltan las validaciones
    this.servicioDiscos.insertar(this.disco)
    this.router.navigateByUrl('/listadoDiscos')
  }

  public vaciar():void {
    this.disco = new Disco()
  }

}
