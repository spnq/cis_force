import { Injectable, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { IUser, ISingle } from './interfaces/paginator.model';
import { takeUntil } from 'rxjs/operators';
import { BaseComponent } from 'src/app/base.component';

@Injectable({providedIn: 'root'})
export class PaginatonService extends BaseComponent {

    constructor( private http: HttpClient) { super(); }

    public store$: Subject<IUser[]> = new Subject();
    public userStore: Array<IUser[]> = [];
    public visitedPages: Subject<number> = new Subject();
    public currentPage: number;
    public pages: number[] = [];

    public initStorage(): void {
        (this.store$ as Observable<IUser[]>).pipe(takeUntil(this.destroy$))
        .subscribe( users => { users.forEach( user => {
                if (!this.pages.includes(user.page)) { this.userStore.push([...users]); }
        }); });
    }

    public getUsersByPageNumber(page: number): Observable<IUser> {
        return this.http.get<IUser>(`https://reqres.in/api/users?page=${page}`);
    }

    public getSingleUser(id: number): Observable<ISingle> {
        return this.http.get<ISingle>(`https://reqres.in/api/users/${id}`);
    }
}
