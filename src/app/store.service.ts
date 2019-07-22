import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { IPageInfo } from './modules/pagination/interfaces/paginator.model';
import { distinctUntilChanged } from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class Store {
  private _state$: BehaviorSubject<IPageInfo[]> = new BehaviorSubject([]);

  public getStateSnapshot(): IPageInfo[] {
    return this._state$.getValue();
  }

  public getState(): Observable<IPageInfo[]> {
    return this._state$.pipe(distinctUntilChanged());
  }

  public setState(newChunk: IPageInfo): void {
    const current = this.getStateSnapshot();
    this._state$.next([...current, newChunk]);
  }
}
