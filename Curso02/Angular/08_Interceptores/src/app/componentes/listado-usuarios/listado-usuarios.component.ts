import { Component, OnInit } from '@angular/core';
import { ServicioUsuarios } from '../../servicios/servicio-usuarios';
import { ServicioPeliculas } from '../../servicios/servicio-peliculas';
//import { HttpClient } from '@angular/common/http';
//import { Observable } from 'rxjs';

@Component({
  selector: 'app-listado-usuarios',
  standalone: true,
  templateUrl: './listado-usuarios.component.html'
})
export class ListadoUsuariosComponent implements OnInit {

  public usuarios:any[] = []
  public peliculas:any[] = []

  //Jamás de los jamases utilizaremos el objeto HttpClient desde un componente
  //Debe hacerse desde un servicio
  constructor(/*private httpClient:HttpClient*/
              private servicioUsuarios:ServicioUsuarios,
              private servicioPeliculas:ServicioPeliculas,) {
  }

  ngOnInit(): void {
  }

  public listarUsuarios():void{

    //Sin funcion flecha:
    /*
    let that = this

    let observable:Observable<any> = this.httpClient.get("https://reqres.in/api/users")
    observable.subscribe(
      //Esta función es...anónima, anidada, closure 
      function(respuesta:any){
        console.log(respuesta.data)
        //Aqui, dentro de la función anidada, 'this' no es 'ListadoUsuariosComponent'
        that.usuarios = respuesta.data
      },
      function(err){
        console.log(err)
      }
    )
    */

    //Con funciones flecha:
    /*
    let observable:Observable<any> = this.httpClient.get("https://reqres.in/api/users")
    observable.subscribe(
      //Esta función es...anónima, anidada, closure 
      //En typescript si usamos una función flecha no ponemos los tipos de los parámetros
      respuesta => {
        console.log("Respuesta:",respuesta.data)
        //Aqui, dentro de la función flecha, 'this' sigue siendo 'ListadoUsuariosComponent'
        this.usuarios = respuesta.data
      },
      err => console.log(err)
    )
    */
   
    //Llamando al servicio
    this.servicioUsuarios.listarUsuarios()
      .subscribe({
          //next : respuesta => this.usuarios=respuesta.data,
          next : respuesta => this.usuarios=respuesta,
          error: error => console.log(error)
      })

  }

  public listarPeliculas():void{
    this.servicioPeliculas.listarPeliculas()
      .subscribe({
        next : respuesta => this.peliculas=respuesta,
        error: error => console.log(error)
      })    
  }

}


