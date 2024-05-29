import { Disco } from "../entidades/disco";

export class ServicioDiscos {

    private discos:Disco[] = [];
    
    public insertar(disco:Disco):void{
        disco.id = Date.now(); // timestamp
        this.discos.push(disco);
    }

    public listar():Disco[]{
        // truqui cutre
        return JSON.parse(JSON.stringify(this.discos));
    }

    public buscarPorId(id:number):Disco|undefined{
        // con un bucle
        /*
        for (let disco of this.discos) {
            if(disco.id == id){
                return disco;
            }
        } */

        return this.discos.find(d => d.id == id);

    }
}



