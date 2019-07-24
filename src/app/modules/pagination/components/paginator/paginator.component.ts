import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { PaginatonService } from '../../paginaton.service';

import { PageEvent } from '@angular/material/paginator';
import { BaseComponent } from 'src/app/base.component';
import { Store } from 'src/app/store.service';
import { distinctUntilChanged, takeUntil, map, flatMap } from 'rxjs/operators';
import { IUserData } from '../../interfaces/paginator.model';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss'],
})
export class PaginatorComponent extends BaseComponent implements OnInit {

  pageSize: number;
  pageSizeOptions: number[];
  length: number;
  pageIndex: number;

  constructor(private paginatonService: PaginatonService) { super(); }

  ngOnInit(): void {
    this.paginatonService.pageUpdates.subscribe(
      pageInfo => {
        this.pageIndex = pageInfo.page;
        this.fillPageParams(pageInfo);
      },
      error => console.log(error)
    );
    }

  private fillPageParams({per_page, total}): void {
    this.pageSize = per_page;
    this.pageSizeOptions = [per_page];
    this.length = total;
  }

  onChangePage(pageData: PageEvent): void {
    this.paginatonService.setCurrentPage(pageData.pageIndex + 1);
    }
  }
