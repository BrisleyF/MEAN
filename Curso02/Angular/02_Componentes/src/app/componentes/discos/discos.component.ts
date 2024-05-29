import { ServicioDiscos } from './../../modelo/servicios/servicioDiscos';
import { Component } from '@angular/core';
import { Disco } from '../../modelo/entidades/disco';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-discos',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './discos.component.html',
  styleUrl: './discos.component.css',
})

export class DiscosComponent {
	public disco:Disco = new Disco();
	public discos!:Disco[]
	private servicioDiscos:ServicioDiscos = new ServicioDiscos();

	public constructor(){
		this.servicioDiscos = new ServicioDiscos();
		this.listarDiscos();
	}

	public listarDiscos(){
		this.discos = this.servicioDiscos.listar();
	}

	public insertar():void{
		this.servicioDiscos.insertar(this.disco);
		this.vaciarFormulario();
		this.listarDiscos();
	}

	public modificar():void{

	}

	public borrar():void{

	}

	public vaciarFormulario():void{
		this.disco = new Disco;
	}

	public seleccionarDisco(disco:Disco):void{
		if(!disco.id){
			return
		}

		let discoEncontrado = this.servicioDiscos.buscarPorId(disco.id);

		if(discoEncontrado){
			this.disco = discoEncontrado;
		}
	}
}
