import { Component, OnInit } from '@angular/core';
import { PaginatonService } from '../paginaton.service';
import { iUser } from '../../model';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss']
})
export class PaginatorComponent implements OnInit {

  isLoading: boolean = false;
  pageSize: number;
  pageSizeOptions: number[];
  currentPage: number = 1;
  users: iUser
  length: number;

  constructor( private paginatonService: PaginatonService) { }

  ngOnInit(): void {
    this.getUsers(this.currentPage);
    this.paginatonService.updateStore()  
  }
  
  getUsers(pageNumber): void {
    this.paginatonService.getUsersByPageNumber(pageNumber).subscribe( (users:iUser) => {
      this.users = users;
      this.length = users.total;
      this.pageSize = users.per_page
      this.pageSizeOptions = [users.per_page]
      this.paginatonService.store.next([...this.users.data]) 
      this.paginatonService.updateStore()  
    })
  }

  onChangePage(pageData: PageEvent) {
    this.currentPage = pageData.pageIndex + 1;
    this.getUsers(this.currentPage)
  }
}