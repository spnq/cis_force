import { Component, OnInit } from '@angular/core';
import { PaginatonService } from '../paginaton.service';
import { iUser } from '../user-card/model';
import { PageEvent } from '@angular/material';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss']
})
export class PaginatorComponent implements OnInit {

  isLoading = false;
  postsPerPage = 2;
  pageSizeOptions = [1, 2, 5, 10];
  currentPage = 1;
  users: iUser

  constructor( private pageinatonService: PaginatonService) { }

  ngOnInit(): void {
    this.pageinatonService.getUserByPageNumber(this.currentPage).subscribe( users => this.users = users)
  }

  onChangePage(pageData: PageEvent) {
    this.isLoading = true;
    this.currentPage = pageData.pageIndex + 1;
    this.postsPerPage = pageData.pageSize;
}
}
