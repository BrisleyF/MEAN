import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserDetailsComponent } from './userDetails/user-details.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UserDetailsComponent, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  //title = 'Ejercicio-2';

  userForm: any = {nombre:"", email:""};

  onSubmit(form: any){
    console.log(form.nombre.value);
    this.userForm = {nombre: form.nombre.value, email: form.email.value};
  }
}
