import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { iUser, iDatum } from './user-card/model';

@Injectable({providedIn: 'root'})
export class PaginatonService {

    constructor( private http: HttpClient) {}

    store: Subject<iDatum[]> = new Subject(); 
    userStore: iDatum[] = [];

    public updateStore():void {
        (this.store as Observable<iDatum[]>).subscribe( users => this.userStore = [...this.userStore, ...users])
    }
    /**
     * Get users from provided page number
     */
    public getUserByPageNumber(page): Observable<iUser> {
        return this.http.get<iUser>(`https://reqres.in/api/users?page=${page}`);
    }
}