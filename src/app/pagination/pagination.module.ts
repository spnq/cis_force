import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserCardComponent } from './user-card/user-card.component';
import { PaginatorComponent } from './paginator/paginator.component';
import { PaginationRoutingModule } from './pagitaion-routing.module';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatCardModule, MatButtonModule, MatDividerModule } from '@angular/material';
import { SingleUserComponent } from './single-user/single-user.component';


@NgModule({
  declarations: [
    UserCardComponent,
    PaginatorComponent,
    SingleUserComponent
  ],
  imports: [
    CommonModule,
    PaginationRoutingModule,
    MatPaginatorModule,
    MatCardModule,
    MatButtonModule,
    MatDividerModule
  ]
})
export class PaginationModule { }
