import { Component, OnInit } from '@angular/core';
import checklist from '../../public/topps-ucc-checklist.json';
import { CardModel } from './models/card.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  categories!: { [key: string]: CardModel[] };
  sizes!: (
    | { name: string; value: string }
    | { name: string; value: undefined }
  )[];
  selectedSize: any = undefined;
  ngOnInit(): void {
    this.categories = checklist;
    this.sizes = [
      { name: 'Small', value: 'small' },
      { name: 'Normal', value: undefined },
      { name: 'Large', value: 'large' },
    ];
  }
  title = 'front-end';
}
