import { Routes }               from '@angular/router';
import { Mfe1Component }        from './mfe1/mfe1.component';
import { Mfe2Component }        from './mfe2/mfe2.component';
import { CsonlineMfeComponent } from './csonline-mfe/csonline-mfe.component';
import { HomeHostComponent }    from './home-host/home-host.component';

export const routes: Routes = [
    {
        path     : '',
        pathMatch: 'full',
        component: HomeHostComponent
    },
    {
        path     : 'mfe1',
        children : [
            {
                path     : '**',
                component: Mfe1Component,
            }
        ]
    },
    {
        path     : 'mfe2',
        component: Mfe2Component
    },
    {
        path     : 'mfe-csonline',
        component: CsonlineMfeComponent,
    }

];
