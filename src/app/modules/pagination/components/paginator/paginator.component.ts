import { Component, OnInit } from '@angular/core';
import { PaginatonService } from '../../paginaton.service';

import { PageEvent } from '@angular/material/paginator';
import { BaseComponent } from 'src/app/base.component';
import { Store } from 'src/app/store.service';
import { distinctUntilChanged, takeUntil, map } from 'rxjs/operators';

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
  constructor(private paginatonService: PaginatonService, private store: Store) { super(); }

  ngOnInit(): void {

    this.paginatonService.currentPageObservable().subscribe(
      page => this.pageIndex = page
    );

    this.paginatonService.getCurrentPageParams().pipe(map( pageInfo =>  {
      return {
          per_page: pageInfo.per_page,
          total: pageInfo.total,
      };
}), distinctUntilChanged(), takeUntil(this.destroy$)
).subscribe(
      ({per_page, total}) => {
        this.pageSize = per_page;
        this.pageSizeOptions = [per_page];
        this.length = total;
    }, error => console.log(error));
  }

  onChangePage(pageData: PageEvent): void {
    this.paginatonService.setCurrentPage(pageData.pageIndex + 1);
    }
  }
