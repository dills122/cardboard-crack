import { Injectable } from '@angular/core';
import ChecklistParser from '../pdf-parser/pdf-parser';
import { PDFDocumentProxy } from 'pdfjs-dist';
import { isSameShape } from '../verifier/shape';
import { CardModel } from '../models/card.model';

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

  async validateChecklist(checklist: CardModel[]) {
    return isSameShape(checklist);
  }
}
