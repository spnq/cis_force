import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '', loadChildren: './modules/pagination/pagination.module#PaginationModule'},
  {path: 'user/:id', loadChildren: './modules/user-list/user-list.module#UserListModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }



