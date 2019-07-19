import { OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';

export abstract class BaseComponent implements OnDestroy {
  protected destroy$: Subject<boolean> = new Subject();

  public ngOnDestroy(): void {
    this.destroy$.next(true);
  }
}
