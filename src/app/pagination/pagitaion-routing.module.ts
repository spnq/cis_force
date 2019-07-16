import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaginatorComponent } from './paginator/paginator.component';
import { SingleUserComponent } from './single-user/single-user.component';

const routes: Routes = [
    {path: '', component: PaginatorComponent},
    { path: 'user/:id', component: SingleUserComponent },

]

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class PaginationRoutingModule {}