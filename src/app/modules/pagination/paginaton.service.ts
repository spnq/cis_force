import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject} from 'rxjs';
import { IPageInfo, ISingle } from './interfaces/paginator.model';
import { BaseComponent } from 'src/app/base.component';
import { Store } from 'src/app/store.service';
import { distinctUntilChanged, map, tap, takeUntil } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class PaginatonService extends BaseComponent {
    private readonly _currentPage$: BehaviorSubject<number> = new BehaviorSubject(1);
    private readonly _pageInfoRequest = () => this.http.get<IPageInfo>(`https://reqres.in/api/users?page=${this.currentPage}`);

    constructor(private http: HttpClient, private store: Store) { super(); }

    get currentPage(): number {
        return this._currentPage$.getValue();
    }

    public currentPageObservable(): Observable<number> {
        return this._currentPage$.asObservable();
    }

    public setCurrentPage(page: number): void {
        this._currentPage$.next(page);
    }

    public getCurrentPageParams(): Observable<IPageInfo> {
        return new Observable<IPageInfo>(
            subscriber => {
                try {
                    if (!this.findRecord()) {
                        this._pageInfoRequest().subscribe( pageInfo => {
                            this.store.setState(pageInfo);
                            subscriber.next(pageInfo);
                            });
                    } else {
                        subscriber.next(this.findRecord());
                    }
                } catch (error) {
                    subscriber.error(error);
                }
            });
    }
    public findRecord(): IPageInfo | undefined {
        return this.store.getStateSnapshot().find(pageRecord => pageRecord.page === this.currentPage);
      }

}
