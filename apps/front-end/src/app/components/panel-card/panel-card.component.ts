import { Component, Input } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-panel-card',
  standalone: false,
  template: ` <div class="card my-4">
    <p-panel
      [header]="header"
      [toggleable]="toggleHeader | async"
      [toggler]="'header'"
    >
      <ng-content></ng-content>
    </p-panel>
  </div>`,
})
export class PanelCardComponent {
  @Input({
    required: true,
  })
  header!: string;
  @Input()
  toggleHeader: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);
}
