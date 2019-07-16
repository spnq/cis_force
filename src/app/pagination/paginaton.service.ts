import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { iUser, iDatum, iSingle } from '../model';

@Injectable({providedIn: 'root'})
export class PaginatonService {

    constructor( private http: HttpClient) {}

    store: Subject<iDatum[]> = new Subject(); 
    userStore: iDatum[] = [];

    private findObjectById = (id:number):iDatum => this.userStore.find(element => id === element.id)

    public updateStore():void {
        (this.store as Observable<iDatum[]>).subscribe( users => this.userStore = [...this.userStore, ...users])
        this.userStore = Array.from(new Set(this.userStore.map( element => element.id)))
             .map(id => { return {
                                    id: id, 
                                    email: this.findObjectById(id).email,
                                    last_name: this.findObjectById(id).last_name,
                                    first_name: this.findObjectById(id).first_name,
                                    avatar: this.findObjectById(id).avatar
                                }
                        }
                 )
    }
    /**
     * Get users from provided page number
     */
    public getUsersByPageNumber(page): Observable<iUser> {
        return this.http.get<iUser>(`https://reqres.in/api/users?page=${page}`);
    }

    public getSingleUser(id): Observable<iSingle> {
        return this.http.get<iSingle>(`https://reqres.in/api/users/${id}`);
    }
}