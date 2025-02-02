import { Component, Input, OnInit } from '@angular/core';
import { ChecklistMap } from '../../../pdf/models/checklist.model';
import { PdfService } from '../../../pdf/services/pdf.service';

@Component({
  selector: 'app-needs-attention',
  standalone: false,

  templateUrl: './needs-attention.component.html',
  styleUrl: './needs-attention.component.scss',
})
export class NeedsAttentionComponent implements OnInit {
  @Input({
    required: true,
  })
  checklist!: ChecklistMap;
  needsAttentionChecklist!: ChecklistMap;
  numberOfWarnings = 0;
  constructor(private pdfService: PdfService) {}

  ngOnInit(): void {
    this.needsAttentionChecklist = this.pdfService.validateChecklist(
      this.checklist
    );
    this.numberOfWarnings = Object.values(
      this.needsAttentionChecklist
    ).flat().length;
  }
}
