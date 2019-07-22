import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SingleUserComponent } from './modules/user-list/components/single-user/single-user.component';
import { PaginatorComponent } from './modules/pagination/components/paginator/paginator.component';

const routes: Routes = [
  {path: '', component: PaginatorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }



