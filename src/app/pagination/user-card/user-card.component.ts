import { Component, OnInit } from '@angular/core';
import { PaginatonService } from '../paginaton.service';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss']
})
export class UserCardComponent implements OnInit {

  constructor(private userCardService: PaginatonService) { }

  ngOnInit() {
    this.userCardService.getUserByPageNumber(2)
  }

}
