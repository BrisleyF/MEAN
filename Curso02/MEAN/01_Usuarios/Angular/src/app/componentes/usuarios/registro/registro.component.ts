import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './registro.component.html'
})
export class RegistroComponent {

  public formulario:FormGroup

  constructor(
      formBuilder:FormBuilder
    ) {

    /*No estamos obligados a utilizar el formBuilder:
    this.formulario = new FormGroup({
      login             : new FormControl('', [ Validators.required ]),
      nombre            : new FormControl('', [ Validators.required ]),
      correoE           : new FormControl('', [ Validators.required, Validators.email ]),        
      password          : new FormControl('', [ Validators.required ]),
      confirmarPassword : new FormControl('', [ Validators.required ]),
      idioma            : new FormControl('', [ Validators.required ])        
    })*/
    
    this.formulario = formBuilder.group({
      login             : formBuilder.control('', [ Validators.required ]),
      nombre            : formBuilder.control('', [ Validators.required ]),
      correoE           : formBuilder.control('', [ Validators.required, Validators.email ]),        
      password          : formBuilder.control('', [ Validators.required ]),
      confirmarPassword : formBuilder.control('', [ Validators.required ]),
      //idioma            : formBuilder.control('', [ Validators.required ])        
    })

  }







}