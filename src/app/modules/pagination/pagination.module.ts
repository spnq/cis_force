import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginatorComponent } from './components/paginator/paginator.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatCardModule, MatButtonModule, MatDividerModule, MatProgressSpinnerModule } from '@angular/material';
import { UserListModule } from '../user-list/user-list.module';

@NgModule({
  declarations: [
    PaginatorComponent
  ],
  exports: [
    PaginatorComponent
  ],
  imports: [
    CommonModule,
    MatPaginatorModule,
    MatCardModule,
    MatButtonModule,
    MatDividerModule,
    UserListModule,
    MatProgressSpinnerModule
  ]
})
export class PaginationModule { }
