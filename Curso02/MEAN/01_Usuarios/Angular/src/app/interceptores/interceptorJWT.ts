import { HttpEvent, HttpHandlerFn, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";
import { inject } from "@angular/core";
import { ServicioAutenticacion } from "../modelo/servicios/servicioAutenticacion";
import { configuracion } from "../util/configuracion";

export function interceptorJWT(req: HttpRequest<unknown>, next: HttpHandlerFn): Observable<HttpEvent<unknown>> {

  console.log("InterceptorJWT")

  //Solo añadiremos el header authorization si es necesario
  if(!req.url.startsWith(configuracion.urlServicio+"/seguro")){
    console.log("Esta va sin token")
    return next(req)
  }
  
  console.log("Esta va con token")
  //Utilizamos la funcion 'inject' para acceder al servicio
  let JWT = inject(ServicioAutenticacion).getJWT()

  //En Angular el objeto request es inmutable. 
  //No podemos modificarlo para añadirle (por ejemplo) un header
  //Se clona la petición y esa es la que se envía al siguiente con 'next()'
  let nuevoReq:HttpRequest<unknown> = req.clone({
      setHeaders : {
        Authorization : 'Bearer '+JWT
      }
    })  
  
  return next(nuevoReq)

}