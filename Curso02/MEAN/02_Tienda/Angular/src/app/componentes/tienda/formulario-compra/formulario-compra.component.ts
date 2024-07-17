
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Pedido } from '../../../modelo/entidades/pedido';
import { ServicioCesta } from '../../../modelo/servicios/servicioCesta';
import { ServicioAutenticacion } from '../../../modelo/servicios/servicioAutenticacion';
import { Usuario } from '../../../modelo/entidades/usuario';

@Component({
  selector: 'app-formulario-compra',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './formulario-compra.component.html'
})
export class FormularioCompraComponent {

  public formulario:FormGroup
  private cesta:Pedido

  constructor(
    private servicioCesta:ServicioCesta,
    /*private servicioOrdenesCompra:ServicioOrdenesCompra,*/
    private formBuilder:FormBuilder,
    private servicioAutenticacion: ServicioAutenticacion
  ){
    this.formulario = formBuilder.group({
      domicilioFiscal   : formBuilder.control('', [ Validators.required ]),
      direccionEntrega  : formBuilder.control('', [ Validators.required ]),    
      formaPago         : formBuilder.control('', [ Validators.required ]),    
    })

    let usuario:Usuario = servicioAutenticacion.getUsuario()
    let valores:any = {
      domicilioFiscal   : usuario.direccion,
      direccionEntrega  : usuario.direccion,    
      formaPago         : ''    
    }

    this.formulario.setValue(valores)
    this.cesta = servicioCesta.getCesta()
  }

  public comprar():void{

    this.formulario.markAllAsTouched()

    if(this.formulario.invalid){
      return
    }

    this.cesta.direccionEntrega = this.formulario.value.direccionEntrega
    this.cesta.domicilioFiscal  = this.formulario.value.domicilioFiscal
    this.cesta.formaPago        = this.formulario.value.formaPago

    //llamadita
    /*
    this.servicioOrdenesCompra.enviarOrdenCompra(this.cesta)
      .subscribe({
        next: () => {
          this.cesta.vaciar()
          //navegar
        },
        error: (err) => {
          console.log(err)
          alert("ZASCA")
        }
      })
    */

  }

}
