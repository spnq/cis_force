import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserCardComponent } from './user-card/user-card.component';
import { PaginatorComponent } from './paginator/paginator.component';
import { PaginationRoutingModule } from './pagitaion-routing.module';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatCardModule } from "@angular/material";

@NgModule({
  declarations: [
    UserCardComponent,
    PaginatorComponent
  ],
  imports: [
    CommonModule,
    PaginationRoutingModule,
    MatPaginatorModule,
    MatCardModule
  ]
})
export class PaginationModule { }
