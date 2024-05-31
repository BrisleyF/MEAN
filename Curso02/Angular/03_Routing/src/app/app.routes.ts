import { Routes } from '@angular/router';
import { Componente1Component } from './componentes/componente1/componente1.component';
import { Componente2Component } from './componentes/componente2/componente2.component';

export const routes: Routes = [ 
    {
        path : 'componente1',
        component : Componente1Component
    },
    {
        path : 'componente2',
        component : Componente2Component
    },
    {
        path : 'componente2/:dato1/:dato2',
        component : Componente2Component
    }
]