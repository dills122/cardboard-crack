import { Component, OnInit } from '@angular/core';
import checklist from '../../../../public/topps-ucc-checklist.json';
import { ChecklistMap } from '../../modules/pdf/models/checklist.model';

@Component({
  selector: 'app-list',
  standalone: false,

  templateUrl: './list.component.html',
  styleUrl: './list.component.scss',
})
export class ListComponent implements OnInit {
  categories!: ChecklistMap;

  ngOnInit(): void {
    this.categories = checklist as any as ChecklistMap;
  }
}
