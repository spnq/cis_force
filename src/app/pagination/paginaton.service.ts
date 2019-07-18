import { Injectable, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { iUser, iSingle } from '../model';
import { takeUntil } from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class PaginatonService implements OnDestroy{

    constructor( private http: HttpClient) {}

    public store$: Subject<iUser[]> = new Subject(); 
    private destroy$: Subject<boolean> = new Subject(); 
    public userStore: Array<iUser[]> = [];
    public visitedPages: Subject<number> = new Subject();
    public currentPage: number;
    public pages: number[] = []

    public initStorage():void {
        (this.store$ as Observable<iUser[]>).pipe(takeUntil(this.destroy$))
        .subscribe( users => { users.forEach( user => {
                if (!this.pages.includes(user.page)) this.userStore.push([...users])
        })})
    }

    /**
     * Get users from provided page number
     */
    public getUsersByPageNumber(page:number): Observable<iUser> {
        return this.http.get<iUser>(`https://reqres.in/api/users?page=${page}`);
    }

    public getSingleUser(id:number): Observable<iSingle> {
        return this.http.get<iSingle>(`https://reqres.in/api/users/${id}`);
    }

    ngOnDestroy(): void {
        this.destroy$.next(true)
    }
}