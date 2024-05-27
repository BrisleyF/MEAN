import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './Componets/navbar/navbar.component';
import { ListaNoticiasComponent } from './Componets/lista-noticias/lista-noticias.component';
import { FormularioComponent } from './Componets/formulario/formulario.component';
import { NoticiasService } from './services/noticias.service';
import { SpinnerComponent } from './shared/spinner/spinner.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, ListaNoticiasComponent, FormularioComponent, SpinnerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  public listaNoticias: any[] = [];
  public loading:boolean = false;

  constructor(private _api:NoticiasService){};

  buscarNoticias(params:any){
    this._api.getNoticias(params).subscribe(result => {
      this.listaNoticias = result.articles
      this.loading = false;
    });
  }

}
