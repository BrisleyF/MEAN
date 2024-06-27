import { HttpEvent, HttpEventType, HttpHandlerFn, HttpRequest } from "@angular/common/http";
import { Observable, tap } from "rxjs";


export function interceptorRespuesta(req: HttpRequest<unknown>, next: HttpHandlerFn): Observable<HttpEvent<unknown>> {
    return next(req)
      .pipe(
        tap( evento => {
          //if(evento.type == 4){
          if(evento.type == HttpEventType.Response){
            console.log("EVENTO:", evento)
          }
        })
      );
  }