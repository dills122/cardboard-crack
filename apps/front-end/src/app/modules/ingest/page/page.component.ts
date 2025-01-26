import { Component } from '@angular/core';
import * as pdfjsLib from 'pdfjs-dist';
import { PdfParserService } from '../../pdf/services/pdf-parser.service';

interface ProductOptions {
  name: string;
  code: string;
}

@Component({
  selector: 'app-page',
  standalone: false,

  templateUrl: './page.component.html',
  styleUrl: './page.component.scss',
})
export class PageComponent {
  extractedText: string = '';
  options: ProductOptions[] = [
    {
      name: 'International Only',
      code: 'INIT',
    },
    {
      name: 'Club & Country',
      code: 'REG',
    },
  ];
  selectedOption: ProductOptions | undefined = this.options[1];
  selectedFilePointer: any;

  constructor(private pdfParserService: PdfParserService) {
    pdfjsLib.GlobalWorkerOptions.workerSrc = '/pdf.worker.min.mjs';
  }

  onFileSelected(event: any): void {
    const file = event.files[0]; // event.files comes from PrimeNG file upload
    if (file) {
      this.selectedFilePointer = file;
    }
  }

  onParsePdf() {
    if (!this.selectedFilePointer) return;

    const fileReader = new FileReader();

    fileReader.onload = () => {
      const typedArray = new Uint8Array(fileReader.result as ArrayBuffer);
      this.extractTextFromPdf(typedArray);
    };

    fileReader.readAsArrayBuffer(this.selectedFilePointer);
  }

  async extractTextFromPdf(pdfData: Uint8Array): Promise<void> {
    try {
      const pdf = await pdfjsLib.getDocument({ data: pdfData }).promise;
      const data = await this.pdfParserService.parseData(
        pdf,
        this.selectedOption?.code === 'INIT'
      );
      this.extractedText = JSON.stringify(data, null, 4);
    } catch (err) {
      console.error(err);
    }
  }

  shouldDisableParseButton(): boolean {
    return !this.selectedFilePointer;
  }
}
