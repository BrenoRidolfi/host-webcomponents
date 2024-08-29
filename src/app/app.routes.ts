import { Routes }        from '@angular/router';
import { Mfe1Component } from './mfe1/mfe1.component';
import { Mfe2Component } from './mfe2/mfe2.component';

export const routes: Routes = [
    {
        path     : 'mfe1',
        component: Mfe1Component
    },
    {
        path     : 'mfe2',
        component: Mfe2Component
    }

];
