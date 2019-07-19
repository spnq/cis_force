import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PaginatonService } from '../paginaton.service';
import { IDatum, IUser } from '../../model';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { BaseComponent } from 'src/app/base.component';

@Component({
  selector: 'app-single-user',
  templateUrl: './single-user.component.html',
  styleUrls: ['./single-user.component.scss']
})
export class SingleUserComponent extends BaseComponent implements OnInit {
  id: number;
  user: IDatum;
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

  findUserInStore(userObject): undefined | IDatum {
    return userObject.data.find( user => user.id === this.id);
  }
}
