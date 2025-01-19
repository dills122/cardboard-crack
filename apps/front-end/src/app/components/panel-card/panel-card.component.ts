import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-panel-card',
  standalone: false,

  templateUrl: './panel-card.component.html',
  styleUrl: './panel-card.component.scss',
})
export class PanelCardComponent {
  @Input({
    required: true,
  })
  header!: string;
}
