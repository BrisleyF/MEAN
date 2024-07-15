import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ServicioAutenticacion } from '../../../modelo/servicios/servicioAutenticacion';
import { Usuario } from '../../../modelo/entidades/usuario';
import { ServicioUsuarios } from '../../../modelo/servicios/servicioUsuarios';
import { Router } from '@angular/router';

@Component({
  selector: 'app-perfil',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './perfil.component.html'
})
export class PerfilComponent {

  public formulario:FormGroup 

  constructor(private servicioAutenticacion:ServicioAutenticacion,
              private servicioUsuarios:ServicioUsuarios,
              private router:Router){
    this.formulario = new FormGroup({
      nombre            : new FormControl('', [ Validators.required ]),
      correoE           : new FormControl('', [ Validators.required, Validators.email ]),        
      telefono          : new FormControl('', [ Validators.required ]),
      direccion         : new FormControl('', [ Validators.required ]),
    }) 
    
    //let datosUsuario = sessionStorage.getItem("usuario")
    let usuario:Usuario = servicioAutenticacion.getUsuario()
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

    this.formulario.markAllAsTouched()
    if(this.formulario.invalid){
      console.log("datos invalidos")
      console.log(this.formulario.errors)
      return
    }

    //El formulario no tiene todos los datos del usuario. Solo tiene los que se pueden cambiar
    let datosFormulario = this.formulario.value
    let usuario:Usuario = this.servicioAutenticacion.getUsuario()
    usuario.correoE   = datosFormulario.correoE
    usuario.direccion = datosFormulario.direccion
    usuario.telefono  = datosFormulario.telefono
    usuario.nombre    = datosFormulario.nombre

    this.servicioUsuarios.modificarUsuario(usuario)
    .subscribe({
      next : resultado => console.log(resultado),
      error : error => console.log(error)
    })

  }

  public bajaUsuario():void{
    this.servicioUsuarios.borrarUsuario()
    .subscribe({
      next: () => this.router.navigateByUrl("/"),
      error: error => {
        console.log(error)
        alert("Fallo al borrar el usuario")
      }
    })
  }

}
