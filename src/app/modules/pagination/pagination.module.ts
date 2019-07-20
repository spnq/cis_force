import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginatorComponent } from './components/paginator/paginator.component';
import { PaginationRoutingModule } from './pagitaion-routing.module';
import { MatPaginatorModule } from '@angular/material/paginator';
import { UserListModule } from '../user-list/user-list.module';
import { MatCardModule, MatButtonModule, MatDividerModule } from '@angular/material';
import { UserCardComponent } from './components/user-card/user-card.component';


@NgModule({
  declarations: [
    PaginatorComponent,
    UserCardComponent
  ],
  imports: [
    CommonModule,
    PaginationRoutingModule,
    MatPaginatorModule,
    MatCardModule,
    MatButtonModule,
    MatDividerModule,
    UserListModule
  ]
})
export class PaginationModule { }
