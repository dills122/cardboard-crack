import { Injectable } from '@angular/core';
import { PDFDocumentProxy } from 'pdfjs-dist';
import { ChecklistMap } from '../models/checklist.model';
import ChecklistParser from '../pdf-parser/pdf-parser';
import { ChecklistVerifier } from '../verifier/checklist-verifier';

@Injectable()
export class PdfService {
  private parser: ChecklistParser;

  constructor() {
    this.parser = new ChecklistParser();
  }

  async parseData(
    pdfData: PDFDocumentProxy,
    isInternationalTeamProduct?: boolean
  ) {
    return await this.parser.parse(pdfData, isInternationalTeamProduct);
  }

  validateChecklist(checklist: ChecklistMap) {
    return ChecklistVerifier.verify(checklist);
  }
}
