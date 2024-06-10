import { Routes } from '@angular/router';
import { MaquetacionLoginComponent } from './componentes/maquetacion/maquetacion-login/maquetacion-login.component';
import { MaquetacionTiendaComponent } from './componentes/maquetacion/maquetacion-tienda/maquetacion-tienda.component';
import { LoginComponent } from './componentes/usuarios/login/login.component';
import { RegistroComponent } from './componentes/usuarios/registro/registro.component';
import { ConfirmacionRegistroComponent } from './componentes/usuarios/confirmacion-registro/confirmacion-registro.component';

export const routes: Routes = [

    {
        path: '',
        component: MaquetacionLoginComponent,
        children: [
            {
                path: '',
                component: LoginComponent
            },
            {
                path: 'registro',
                component: RegistroComponent
            },
            {
                path: 'confirmacion',
                component: ConfirmacionRegistroComponent
            } 
        ]
    },
    {
        path: 'tienda',
        component: MaquetacionTiendaComponent
    }

];
