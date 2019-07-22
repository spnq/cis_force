import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ISingle, IUserData } from '../pagination/interfaces/paginator.model';
import { HttpClient } from '@angular/common/http';
import { Store } from 'src/app/store.service';
import { map } from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class UserService {
  constructor(private http: HttpClient, private store: Store) {}

  public getSingleUser(id: number): Observable<IUserData> {
    return new Observable(
      subscriber => {
        try {
          if (this.findSingeUserById(id)) {
            subscriber.next(this.findSingeUserById(id))
          } else {
            this.http.get<ISingle>(`https://reqres.in/api/users/${id}`)
              .pipe(map(next => next.data))
              .subscribe(user => subscriber.next(user));
          }
        } catch (error) {
          subscriber.error(error);
        }
      }
    );
}

  public findSingeUserById(id: number): IUserData | undefined {
    return this.store.getStateSnapshot()
      .flatMap( pages => pages.data)
      .find(userData => userData.id === id);
  }
}
