import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({providedIn: 'root'})
export class PaginatonService {
    constructor( private http: HttpClient) {}

    /**
     * Get users from provided page number
     */
    public getUserByPageNumber(page) {
        return this.http.get(`https://reqres.in/api/users?page=${page}`);
    }
}