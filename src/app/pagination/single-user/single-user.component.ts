import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PaginatonService } from '../paginaton.service';
import { iDatum, iUser } from '../../model';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-single-user',
  templateUrl: './single-user.component.html',
  styleUrls: ['./single-user.component.scss']
})
export class SingleUserComponent implements OnInit, OnDestroy {
  id: number;
  user: iDatum;
  message: string;
  destroy$: Subject<boolean> = new Subject()

  constructor(private route: ActivatedRoute, private paginatorService: PaginatonService) { }

  ngOnInit(): void {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.paginatorService.userStore.flat().forEach( (userObject: iUser) => {
      if (this.findUserInStore(userObject)) {
        this.user = this.findUserInStore(userObject)
      }})
    if (!this.user) {
      this.paginatorService.getSingleUser(this.id).pipe(takeUntil(this.destroy$)).subscribe( user => this.user = user.data);
    }
  }

  findUserInStore(userObject): undefined | iDatum {
    return userObject.data.find( user => user.id === this.id)
  }

  ngOnDestroy(){
    this.destroy$.next(true)
  }
}
