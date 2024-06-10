import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { ServicioAlmacenamiento } from '../../../util/servicioAlmacenamiento';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './registro.component.html'
})
export class RegistroComponent {

  public formulario:FormGroup
  public errorConfirmarPassword:string = ''

  public constructor(
      formBuilder:FormBuilder,
      private router:Router,
      private servicioAlmacenamiento:ServicioAlmacenamiento
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

  public siguiente(){

    this.formulario.markAllAsTouched()
    let valorFormulario = this.formulario.value

    if(valorFormulario.password != valorFormulario.confirmarPassword){
      this.errorConfirmarPassword = "Los password no coinciden."
      return
    } 
    this.errorConfirmarPassword = ''

    if(this.formulario.invalid){
      return
    }

    //guardar y navegar
    this.servicioAlmacenamiento.setItem("datosRegistro", valorFormulario)
    this.router.navigateByUrl("/confirmacion")
  }

}
