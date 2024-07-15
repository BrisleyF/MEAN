import { DetallePedido } from "./detallePedido";
import { Producto } from "./producto";
import { Usuario } from "./usuario";

export class Pedido {

    constructor(
        public _id              : string|null  = null,
        public codigo           : string|null  = null,
        public fecha            : string|null  = null,
        public estado           : string|null  = null,
        public domicilioFiscal  : string|null  = null,
        public direccionEntrega : string|null  = null,
        public usuario          : Usuario|null = null,
        public detalles         : DetallePedido[] = [],
        public total            : number       = 0,
        public formaPago        : string|null  = null
    ){}

    public addProducto(producto:Producto, cantidad:number, precio:number ):void{
        
        /*
        for(let detalle of this.detalles){
            if(detalle.producto._id == producto._id){
                detalle.cantidad += cantidad
                return
            }
        }
        */

        let detalleEncontrado:DetallePedido|undefined = this.detalles
            .find( detalle => detalle.producto._id == producto._id )
        if(detalleEncontrado){
            detalleEncontrado.cantidad += cantidad
            this.calcularTotal()
            return
        }

        let nuevoDetalle:DetallePedido = new DetallePedido(producto, cantidad, precio)
        this.detalles.push(nuevoDetalle)
        this.calcularTotal()
    }

    public quitarProducto(producto:Producto, cantidad:number):void{
        let detalleEncontrado:DetallePedido|undefined = this.detalles
            .find( detalle => detalle.producto._id == producto._id )
        if(detalleEncontrado){
            detalleEncontrado.cantidad -= cantidad
            if(detalleEncontrado.cantidad <= 0){
                this.eliminarDetalle(producto)
                return
            }
            this.calcularTotal()
            return
        }
    }

    public eliminarDetalle(producto:Producto):void{
        /*
        for(let a=0; a<this.detalles.length; a++){
            let detalle:DetallePedido = this.detalles[a]
            if(detalle.producto._id == producto._id){
                this.detalles.splice(a,1)
                break
            }
        }
        */

        /*
        let posicion:number = this.detalles
            .findIndex( detalle => detalle.producto._id==producto._id)
        this.detalles.splice(posicion, 1)
        */

        this.detalles = this.detalles.filter( detalle => detalle.producto._id!=producto._id)
        this.calcularTotal()
    }

    private calcularTotal():void{    
        /*
        let total:number = 0
        for(let detalle of this.detalles){
            total += detalle.cantidad*detalle.precio
        }
        this.total = total
        */

        this.total = this.detalles.reduce( 
            (total, detalle) => total+=detalle.cantidad*detalle.precio, 
            0
        ) 
    }

}

