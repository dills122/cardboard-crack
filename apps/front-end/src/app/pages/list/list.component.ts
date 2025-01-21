import { Component, OnInit } from '@angular/core';
import checklist from '../../../../public/topps-ucc-checklist.json';
import { CardModel } from '../../models/card.model';

@Component({
  selector: 'app-list',
  standalone: false,

  templateUrl: './list.component.html',
  styleUrl: './list.component.scss',
})
export class ListComponent implements OnInit {
  categories!: { [key: string]: CardModel[] };

  ngOnInit(): void {
    this.categories = checklist;
  }
}
