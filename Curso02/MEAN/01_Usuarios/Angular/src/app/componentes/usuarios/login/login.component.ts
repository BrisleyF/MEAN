import { RouterLink } from '@angular/router';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './login.component.html'
})

export class LoginComponent {

  public formulario:FormGroup;

  constructor(){
    this.formulario = new FormGroup({
      login             : new FormControl('', [ Validators.required ]),      
      password          : new FormControl('', [ Validators.required ]),
  })
  }

  public entrar():void{

  }
}
