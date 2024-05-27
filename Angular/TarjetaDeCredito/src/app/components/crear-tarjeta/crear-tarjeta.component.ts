import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { TarjetaService } from '../../services/tarjeta.service';
import { Tarjeta } from '../../Models/tarjeta';

@Component({
  selector: 'app-crear-tarjeta',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './crear-tarjeta.component.html',
  styleUrl: './crear-tarjeta.component.css'
})
export class CrearTarjetaComponent {
  form:FormGroup;

  constructor(private _fb:FormBuilder, private _ts:TarjetaService){
    this.form = this._fb.group({
      titular: ["",[Validators.required, Validators.email]],
      numeroTarjeta: ["",[Validators.required, Validators.minLength(16), Validators.maxLength(16)]],
      fechaCaducidad: ["", [Validators.required,Validators.pattern(/^(0[1-9]|1[0-2])\/\d{2}$/)]],
      cvv: ["",[Validators.required,  Validators.minLength(3), Validators.maxLength(3)]],

    });
  }

  agregarTarjeta(){
    const formValues = this.form.value;
    const tarjeta: Tarjeta = new Tarjeta(formValues.titular, formValues.numeroTarjeta, formValues.cvv, formValues.fechaCaducidad);
    this._ts.CrearTarjeta(tarjeta).subscribe((response)=>{
      alert(response.msj)
    })
    console.log(this.form);
  }
}
