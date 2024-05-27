import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-lista-noticias',
  standalone: true,
  imports: [],
  templateUrl: './lista-noticias.component.html',
  styleUrl: './lista-noticias.component.css'
})
export class ListaNoticiasComponent {
  @Input() listadoNoticias:any[]=[];
}
