import { Component, OnInit } from '@angular/core';
import { PaginatonService } from '../../paginaton.service';

import { PageEvent } from '@angular/material/paginator';
import { takeUntil } from 'rxjs/operators';
import { BaseComponent } from 'src/app/base.component';
import { UserCardComponent } from '../user-card/user-card.component';
import { IUser } from '../../interfaces/paginator.model';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss']
})
export class PaginatorComponent extends BaseComponent implements OnInit {

  pageSize: number;
  pageSizeOptions: number[];
  users: IUser;
  length: number;

  constructor(private paginatonService: PaginatonService) { super(); }

  ngOnInit(): void {
    this.paginatonService.initStorage();
    this.paginatonService.visitedPages.pipe(takeUntil(this.destroy$)).subscribe( page => this.paginatonService.pages.push(page));
    this.paginatonService.store$.pipe(takeUntil(this.destroy$)).subscribe( users => this.paginatonService.userStore.push(users));
    if (!this.paginatonService.pages.includes(1)) { this.paginatonService.visitedPages.next(1); }
    if (this.paginatonService.userStore[0]) {
      this.fillInData(this.paginatonService.userStore.flat()[0]);
    } else {
      this.paginatonService.currentPage = 1;
      this.getUsers(this.paginatonService.currentPage);
    }
  }

  getUsers(pageNumber: number): void {
    this.paginatonService.getUsersByPageNumber(pageNumber).pipe(takeUntil(this.destroy$)).subscribe( (users: IUser) => {
      this.fillInData(users);
      this.paginatonService.store$.next([this.users]);
    });
  }

  onChangePage(pageData: PageEvent): void {
    this.paginatonService.currentPage = pageData.pageIndex + 1;
    if (this.paginatonService.pages.includes(this.paginatonService.currentPage)) {
      this.fillInData(this.paginatonService.userStore[pageData.pageIndex][0]);
    } else {
      this.paginatonService.visitedPages.next(this.paginatonService.currentPage);
      this.getUsers(this.paginatonService.currentPage);
    }
  }

  fillInData(source: IUser): void {
    this.users = source;
    this.length = source.total;
    this.pageSize = source.per_page;
    this.pageSizeOptions = [source.per_page];
  }

  trackByFn(index: number, item: UserCardComponent): UserCardComponent {
    return item;
  }
}
