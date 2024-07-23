import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Pedido } from '../../../modelo/entidades/pedido';
import { ServicioCesta } from '../../../modelo/servicios/servicioCesta';
import { ServicioAutenticacion } from '../../../modelo/servicios/servicioAutenticacion';
import { Usuario } from '../../../modelo/entidades/usuario';
import { CampoFormularioComponent } from '../../common/campo-formulario/campo-formulario.component';
import { ServicioOrdenesDeCompra } from '../../../modelo/servicios/servicioOrdenesDeCompra';

@Component({
  selector: 'app-formulario-compra',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule, CampoFormularioComponent],
  templateUrl: './formulario-compra.component.html'
})
export class FormularioCompraComponent {

  public formulario:FormGroup
  private cesta:Pedido
  private usuario:Usuario

  constructor(
    private servicioCesta:ServicioCesta,
    private servicioOrdenesDeCompra:ServicioOrdenesDeCompra,
    private formBuilder:FormBuilder,
    private servicioAutenticacion: ServicioAutenticacion,
    private router:Router
  ){
    this.usuario = servicioAutenticacion.getUsuario()

    if(!this.usuario.direccion || !this.usuario.telefono){
      alert("Por favor complete su perfil antes de comprar")
      router.navigateByUrl("/tienda/perfil")
    }

    this.formulario = formBuilder.group({
      direccionFacturacion : formBuilder.control('', [ Validators.required ]),
      direccionEntrega     : formBuilder.control('', [ Validators.required ]),    
      formaPago            : formBuilder.control('', [ Validators.required ]),    
    })

    let valores:any = {
      direccionFacturacion : this.usuario.direccion,
      direccionEntrega     : this.usuario.direccion,    
      formaPago            : ''    
    }

    this.formulario.setValue(valores)
    this.cesta = servicioCesta.getCesta()
  }

  public comprar():void{

    this.formulario.markAllAsTouched()

    if(this.formulario.invalid){
      return
    }

    this.cesta.direccionEntrega     = this.formulario.value.direccionEntrega
    this.cesta.direccionFacturacion = this.formulario.value.direccionFacturacion
    this.cesta.formaPago            = this.formulario.value.formaPago
    this.cesta.usuario = this.usuario

    //llamadita
    this.servicioOrdenesDeCompra.enviarOrdenDeCompra(this.cesta)
      .subscribe({
        next: () => {
          alert("Compra realizada con éxito.")
          this.cesta.vaciar()
          //navegar
          this.router.navigateByUrl("/tienda/catalogo")
        },
        error: (err) => {
          console.log(err)
          alert(JSON.stringify(err?.error?.mensaje))
        }
      })
  }

}
