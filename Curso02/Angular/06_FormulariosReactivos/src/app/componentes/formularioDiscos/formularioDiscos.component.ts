import { Component } from '@angular/core';
import { Disco } from '../../modelo/entidades/disco';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ServicioDiscos } from '../../modelo/servicios/servicio.discos';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-formulario-discos',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './formularioDiscos.component.html',
})
export class FormularioDiscosComponent {

  //En lugar de tener un disco para unirlo al formulario con [(ngModel)]
  //tenemos un objeto del tipo FormGroup
  //public disco:Disco = new Disco() //Este es el disco que está unido al formulario con ngModel
  public formulario:FormGroup

  public constructor(
      private formBuilder   :FormBuilder,
      private servicioDiscos:ServicioDiscos,
      private router        :Router,
      private activatedRoute:ActivatedRoute
    ){

    this.formulario = formBuilder.group({
      //Id no aparece en el formulario, pero los discos lo tienen
      id     : formBuilder.control(''),
      titulo : formBuilder.control('', [ Validators.required ]),
      grupo  : formBuilder.control('', [ Validators.required ]),
      year   : formBuilder.control('', [ Validators.required, Validators.pattern('^[0-9]{4}$') ]),
      genero : formBuilder.control(''),
      notas  : formBuilder.control('')    
    })      

    let idDiscoSel:number = activatedRoute.snapshot.params["id-disco"]
    if(idDiscoSel){
      let discoEncontrado:Disco|undefined = servicioDiscos.buscarPorId(idDiscoSel)
      if(discoEncontrado){
        this.formulario.setValue(discoEncontrado)
      }
    }
  }

  public insertar():void {

    this.formulario.markAllAsTouched()
    
    if(this.formulario.invalid){
      console.log("Datos invalidos")
      return
    }

    let disco:Disco = this.formulario.value
    this.servicioDiscos.insertar(disco)
    this.router.navigateByUrl('/listadoDiscos')
  }

  public vaciar():void {
    this.formulario.setValue(new Disco())
  }

}
