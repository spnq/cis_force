import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaginatorComponent } from './components/paginator/paginator.component';

const routes: Routes = [
    {path: '', component: PaginatorComponent},
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class PaginationRoutingModule {}
