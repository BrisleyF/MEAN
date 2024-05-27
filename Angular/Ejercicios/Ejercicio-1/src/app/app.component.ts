import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  buttonColor: boolean = false; // Estado inicial del color del botón

  cambiarColor(){
    // Alternar entre true (verde) y false (azul)
    this.buttonColor = !this.buttonColor;
  }
}
