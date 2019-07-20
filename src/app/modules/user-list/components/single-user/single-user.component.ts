import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { takeUntil } from 'rxjs/operators';

import { PaginatonService } from '../../../pagination/paginaton.service';
import { BaseComponent } from 'src/app/base.component';
import { IData, IUser } from 'src/app/modules/pagination/interfaces/paginator.model';


@Component({
  selector: 'app-single-user',
  templateUrl: './single-user.component.html',
  styleUrls: ['./single-user.component.scss']
})
export class SingleUserComponent extends BaseComponent implements OnInit {
  id: number;
  user: IData;
  message: string;

  constructor(private route: ActivatedRoute, private paginatorService: PaginatonService) { super(); }

  ngOnInit(): void {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.paginatorService.userStore.flat().forEach( (userObject: IUser) => {
      if (this.findUserInStore(userObject)) {
        this.user = this.findUserInStore(userObject);
      }});
    if (!this.user) {
      this.paginatorService.getSingleUser(this.id).pipe(takeUntil(this.destroy$)).subscribe( user => this.user = user.data);
    }
  }

  findUserInStore(userObject): undefined | IData {
    return userObject.data.find( user => user.id === this.id);
  }
}
