import { Injectable } from "@angular/core";

@Injectable({
    providedIn : "root"
})
export class ServicioAutenticacion {

    public getJWT():string{
        return "sietecaballos.vienende.bonanza=="
    }

}