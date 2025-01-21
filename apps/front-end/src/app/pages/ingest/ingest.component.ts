import { Component } from '@angular/core';
import * as pdfjsLib from 'pdfjs-dist';

@Component({
  selector: 'app-ingest',
  standalone: false,

  templateUrl: './ingest.component.html',
  styleUrl: './ingest.component.scss',
})
export class IngestComponent {
  extractedText: string = '';

  constructor() {
    pdfjsLib.GlobalWorkerOptions.workerSrc = '/pdf.worker.min.mjs';
  }

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      const file = input.files[0];
      const fileReader = new FileReader();

      fileReader.onload = () => {
        const typedArray = new Uint8Array(fileReader.result as ArrayBuffer);
        this.extractTextFromPdf(typedArray);
      };

      fileReader.readAsArrayBuffer(file);
    }
  }

  async extractTextFromPdf(pdfData: Uint8Array): Promise<void> {
    const pdf = await pdfjsLib.getDocument({ data: pdfData }).promise;
    let extractedText = '';

    // Loop through all pages
    for (let i = 1; i <= pdf.numPages; i++) {
      const page = await pdf.getPage(i);
      const textContent = await page.getTextContent();

      //This looks like the same parsing as the CLI so should be able to lift & shift this over
      const pageText = textContent.items
        .map((item: any) => {
          // console.log(`Line or String: -- ${item.str}`);
          return item.str;
        })
        .join(' ');

      extractedText += `Page ${i}:\n${pageText}\n\n`;
    }

    this.extractedText = extractedText;
  }
}
