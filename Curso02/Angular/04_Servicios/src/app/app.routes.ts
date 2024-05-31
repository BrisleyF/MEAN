import { Routes } from '@angular/router';
import { ListadoDiscosComponent } from './componentes/listadoDiscos/listadoDiscos.component';
import { FormularioDiscosComponent } from './componentes/formularioDiscos/formularioDiscos.component';

export const routes: Routes = [
    {
        path: "listadoDiscos",
        component: ListadoDiscosComponent
    },
    {
        path: "formularioDiscos",
        component: FormularioDiscosComponent
    },
    {
        path: "formularioDiscos/:id-disco",
        component: FormularioDiscosComponent
    },
    /*
    {
        path: "",
        component: ListadoDiscosComponent
    }
    */
];
