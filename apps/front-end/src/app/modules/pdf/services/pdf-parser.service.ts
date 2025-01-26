import { Injectable } from '@angular/core';
import ChecklistParser from '../pdf-parser/pdf-parser';
import { PDFDocumentProxy } from 'pdfjs-dist';

@Injectable()
export class PdfParserService {
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
}
