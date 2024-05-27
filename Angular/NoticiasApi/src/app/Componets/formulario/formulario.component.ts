import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [FormsModule,  CommonModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {
  public categoriaSeleccionado:string = "general";
  public paisSeleccionado:string = "gb";

  public categorias:any[] = [
    {value:'general', nombre:'General'},
    {value:'business', nombre:'Negocios'},
    {value:'entertaiment', nombre:'Entretenimiento'},
    {value:'health', nombre:'Salud'},
    {value:'science', nombre:'Ciencia'},
    {value:'technology', nombre:'Tecnologia'},
    {value:'sports', nombre:'Deportes'}
  ];

  public paises:any[] = [
    {value:'gb', nombre:'Reino Unido'},
    {value:'de', nombre:'Alemania'},
    {value:'us', nombre:'Estados Unidos'},

  ]

  @Output() public parametrosSeleccionados:any = new EventEmitter<any>();

  buscarNoticias(){
    const PARAMETROS = {
      categoria: this.categoriaSeleccionado,
      pais: this.paisSeleccionado,
    }
    this.parametrosSeleccionados.emit(PARAMETROS)
  }
}
