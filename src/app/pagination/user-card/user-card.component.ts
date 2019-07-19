import { Component, Input } from '@angular/core';
import { IDatum } from '../../model';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss']
})
export class UserCardComponent {

  constructor() { }

  @Input()user: IDatum;

}
