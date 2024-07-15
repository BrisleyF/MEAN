import { Component } from '@angular/core';
import { Producto } from '../../../modelo/entidades/producto';
import { ServicioProductos } from '../../../modelo/servicios/servicioProductos';
import { ProductoComponent } from '../producto/producto.component';

@Component({
	selector: 'app-catalogo',
	standalone: true,
	imports: [ProductoComponent],
	templateUrl: './catalogo.component.html'
})
export class CatalogoComponent {

	public productos:Producto[] = []

	public constructor(private servicioProductos:ServicioProductos){
		this.listarProductos()
	}

	public listarProductos():void{
		this.servicioProductos.listar()
		.subscribe({
			next: productos => this.productos = productos,
			error: error => console.log(error)
		})		
	}

	/*
	//Si no hicieramos el componente 'ProductoComponent' tendríamos esta función aquí
	public comprar(producto:Producto):void{
		console.log("COMPRAR:"+producto.nombre)
	}
	*/

}
