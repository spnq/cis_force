import { Component, OnInit } from '@angular/core';
import { PaginatonService } from './modules/pagination/paginaton.service';
import { ConnectableObservable } from 'rxjs';
import { IPageInfo } from './modules/pagination/interfaces/paginator.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'cisforce';

  constructor(private service: PaginatonService){}

  ngOnInit() {
    // (this.service.getCurrentPageParams as ConnectableObservable<IPageInfo>).connect();
  }
}
