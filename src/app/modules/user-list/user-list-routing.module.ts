import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SingleUserComponent } from './components/single-user/single-user.component';


const routes: Routes = [
  {path: 'user/:id', component: SingleUserComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class UserListRoutingModule {}
