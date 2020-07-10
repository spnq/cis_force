import { OnDestroy, Component, Directive } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-base',
  template: ''
})
export abstract class BaseComponent implements OnDestroy {
  protected destroy$: Subject<boolean> = new Subject();

  public ngOnDestroy(): void {
    this.destroy$.next(true);
  }
}
