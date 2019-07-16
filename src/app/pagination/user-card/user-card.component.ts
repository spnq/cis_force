import { Component, Input } from '@angular/core';
import { iDatum } from './model';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss']
})
export class UserCardComponent {

  constructor() { }

  @Input()user: iDatum;

}
