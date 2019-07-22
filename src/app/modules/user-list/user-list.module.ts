import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SingleUserComponent } from './components/single-user/single-user.component';
import { MatCardModule, MatButtonModule, MatDividerModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { UserCardComponent } from './components/user-card/user-card.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserListRoutingModule } from './user-list-routing.module';

@NgModule({
  declarations: [
    SingleUserComponent,
    UserCardComponent,
    UserListComponent
  ],
  exports: [
    UserListComponent
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
