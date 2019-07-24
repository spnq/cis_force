import { Component, OnInit, Input } from '@angular/core';
import { UserCardComponent } from '../user-card/user-card.component';
import { IUserData } from 'src/app/modules/pagination/interfaces/paginator.model';
import { PaginatonService } from 'src/app/modules/pagination/paginaton.service';
import { map, flatMap, takeUntil, tap } from 'rxjs/operators';
import { BaseComponent } from 'src/app/base.component';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent extends BaseComponent implements OnInit {

  constructor(private paginatorService: PaginatonService) { super(); }

  users: IUserData[];

  ngOnInit(): void {
    this.paginatorService.pageUpdates.pipe(map( pageInfo => pageInfo.data))
                                     .subscribe( usersData => this.users = usersData );
  }

  trackByFn(index: number, item: UserCardComponent): UserCardComponent {
    return item;
  }
}
