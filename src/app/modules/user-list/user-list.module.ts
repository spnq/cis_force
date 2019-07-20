import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SingleUserComponent } from './components/single-user/single-user.component';
import { MatCardModule, MatButtonModule, MatDividerModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { UserListRoutingModule } from './user-list-routing.module';

@NgModule({
  declarations: [
    SingleUserComponent,
  ],
  exports: [
    SingleUserComponent,
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatDividerModule,
    RouterModule,
    UserListRoutingModule
  ]
})
export class UserListModule { }
