import { Component, OnInit, Input } from '@angular/core';
import { PaginatonService } from '../paginaton.service';
import { iUser, iDatum } from './model';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss']
})
export class UserCardComponent implements OnInit {

  constructor() { }

  @Input()user: iDatum;

  ngOnInit() {
  }

}
