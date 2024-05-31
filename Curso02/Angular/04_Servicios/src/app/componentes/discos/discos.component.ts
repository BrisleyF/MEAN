import { Component } from '@angular/core';
import { Disco } from '../../modelo/entidades/disco';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-discos',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './discos.component.html',
  providers: []
})
export class DiscosComponent {

  public disco:Disco    = new Disco() //Este es el disco que está unido al formulario con ngModel
  public discos:Disco[] = [] //Este es el array que está unido al @for

  public constructor(){
    this.obtenerDiscos()
  }

  public insertar():void{
    console.log("Insertar en DiscosComponent")
    this.obtenerDiscos()
    this.vaciar()
  }

  public modificar():void{
  }

  public borrar():void{
  }

  public vaciar():void{
    this.disco = new Disco()
  }

  public seleccionar(disco:Disco):void{

  }

  public obtenerDiscos():void{
  }

}
