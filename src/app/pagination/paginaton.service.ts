import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { iUser } from './user-card/model';

@Injectable({providedIn: 'root'})
export class PaginatonService {
    constructor( private http: HttpClient) {}

    /**
     * Get users from provided page number
     */
    public getUserByPageNumber(page): Observable<iUser> {
        return this.http.get<iUser>(`https://reqres.in/api/users?page=${page}`);
    }
}