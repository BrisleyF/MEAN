import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ServicioAutenticacion } from '../../../modelo/servicios/servicioAutenticacion';

@Component({
  selector: 'app-perfil',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './perfil.component.html'
})
export class PerfilComponent {

  public formulario:FormGroup 

  constructor(private servicioAutenticacion:ServicioAutenticacion){
    this.formulario = new FormGroup({
      nombre            : new FormControl('', [ Validators.required ]),
      correoE           : new FormControl('', [ Validators.required, Validators.email ]),        
      telefono          : new FormControl('', [ Validators.required ]),
      direccion         : new FormControl('', [ Validators.required ]),
    }) 
    
    //let datosUsuario = sessionStorage.getItem("usuario")
    let usuario = servicioAutenticacion.getUsuario()

    //podemos pasa los datos al formGroup formControl a formControl...
    //this.formulario.get('nombre')?.setValue(usuario.nombre)
    //this.formulario.get('correoE')?.setValue(usuario.correoE)
    //this.formulario.get('telefono')?.setValue(usuario.telefono)
    //this.formulario.get('direccion')?.setValue(usuario.direccion)
    //...o crear un objeto con las propiedades requeridas y pasárselo del tirón
    let objAux = {
      nombre   : usuario.nombre,
      correoE  : usuario.correoE,
      telefono : usuario.telefono ?? '',
      direccion: usuario.direccion ?? ''
    }
    this.formulario.setValue(objAux)    

  }

  public guardar():void{

  }

  public bajaUsuario():void{

  }


}
