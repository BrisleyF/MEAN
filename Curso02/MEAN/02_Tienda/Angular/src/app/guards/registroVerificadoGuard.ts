import { inject } from "@angular/core"
import { ServicioAlmacenamiento } from "../util/servicioAlmacenamiento"
import { Router } from "@angular/router"


export const registroVerificadoGuard = () => {
    let servicioAlmacenamiento:ServicioAlmacenamiento = inject(ServicioAlmacenamiento)
    if(servicioAlmacenamiento.getItem("datosRegistro")){
        return true
    }
    
    const router:Router = inject(Router)
    alert('DEBE PASAR ANTES POR LA PANTALLA DE REGISTRO HDLGP!')
    return router.navigateByUrl('/') //Nos vamos al login
}
