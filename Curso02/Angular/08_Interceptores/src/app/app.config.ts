import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { routes } from './app.routes';
import { interceptorLog } from './interceptores/interceptorLog';
import { interceptorRespuesta } from './interceptores/interceptorRespuesta';
import { interceptorJWT } from './interceptores/interceptorJWT';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes), 
    provideHttpClient(
        withFetch(),
        withInterceptors([interceptorLog, interceptorRespuesta, interceptorJWT])
      )
  ]
};
