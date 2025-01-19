import { Component, Input } from '@angular/core';
import { CardModel } from '../../models/card.model';

@Component({
  selector: 'app-category-section',
  standalone: false,

  templateUrl: './category-section.component.html',
  styleUrl: './category-section.component.scss',
})
export class CategorySectionComponent {
  @Input()
  categoryName!: string;
  @Input()
  cards: CardModel[] = [];
  selectedSize: any = undefined;
  sizes = [
    { name: 'Small', value: 'small' },
    { name: 'Normal', value: undefined },
    { name: 'Large', value: 'large' },
  ];
}
