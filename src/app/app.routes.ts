import { Routes } from '@angular/router';
import { InicioComponent } from './_pages/inicio/inicio.component';

export const routes: Routes = [
    {
        path:"inicio",component:InicioComponent
    },
    {
        path:"",component:InicioComponent
    },
];
