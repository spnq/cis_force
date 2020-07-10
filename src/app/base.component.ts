import { OnDestroy, Component } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-base'
})
export abstract class BaseComponent implements OnDestroy {
  protected destroy$: Subject<boolean> = new Subject();

  public ngOnDestroy(): void {
    this.destroy$.next(true);
  }
}
