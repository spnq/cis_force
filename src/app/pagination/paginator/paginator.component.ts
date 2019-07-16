import { Component, OnInit } from '@angular/core';
import { PaginatonService } from '../paginaton.service';
import { iUser } from '../user-card/model';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss']
})
export class PaginatorComponent implements OnInit {

  length = 100;
  pageSize = 10;
  pageSizeOptions = [1, 2, 5, 10];
  users: iUser

  constructor( private pageinatonService: PaginatonService) { }

  ngOnInit() {
    this.pageinatonService.getUserByPageNumber(0).subscribe( users => {
      this.users = users
      console.log(users)})
  }
}
