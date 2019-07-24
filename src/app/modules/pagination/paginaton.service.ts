import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { IPageInfo } from './interfaces/paginator.model';
import { BaseComponent } from 'src/app/base.component';
import { Store } from 'src/app/store.service';
import { takeUntil, share, flatMap } from 'rxjs/operators';
import { PAGE_API } from '../../constants';

@Injectable({ providedIn: 'root' })
export class PaginatonService extends BaseComponent {

    constructor(private http: HttpClient, private store: Store) { super(); }

    private readonly _currentPage$: BehaviorSubject<number> = new BehaviorSubject(1);

    private readonly getCurrentPageParams = new Observable<IPageInfo>(
            subscriber => {
                try {
                    if (!this.findRecord()) {
                        this._pageInfoRequest().subscribe( pageInfo => {
                            this.store.setState(pageInfo);
                            subscriber.next(pageInfo);
                            subscriber.complete();
                            });
                    } else {
                        subscriber.next(this.findRecord());
                        subscriber.complete();
                    }
                } catch (error) {
                    subscriber.error(error);
                }
            }).pipe(share(), takeUntil(this.destroy$));

    private readonly _pageInfoRequest = () => this.http.get<IPageInfo>(PAGE_API + this.currentPage);

    public currentPageObservable(): Observable<number> {
        return this._currentPage$.asObservable();
    }

    public get pageUpdates(): Observable<IPageInfo> {
        return this.currentPageObservable().pipe(
            flatMap(newPage => this.getCurrentPageParams),
            takeUntil(this.destroy$)
        );
    }
    private get currentPage(): number {
        return this._currentPage$.getValue();
    }
    public setCurrentPage(page: number): void {
        this._currentPage$.next(page);
    }

    private findRecord(): IPageInfo | undefined {
        return this.store.getStateSnapshot().find(pageRecord => pageRecord.page === this.currentPage);
      }

}
