export class Producto {

    public constructor(
            public _id        :string = '',
            public nombre     :string = '',
            public categoria  :string = '', //categoria { _id, nombre, descripcion }
            public fabricante :string = '',
            public descripcion:string = '',
            public imagen     :string = '',
            public precio     :number = 0,
            public existencias:number = 0,
        ){}

}