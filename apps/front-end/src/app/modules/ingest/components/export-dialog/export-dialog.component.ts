import { Component } from '@angular/core';
import { DynamicDialogRef, DynamicDialogConfig } from 'primeng/dynamicdialog';

export const EXPORT_DIALOG_STRINGS = Object.freeze({
  HEADER_TITLE: 'Export Data',
  DESCRIPTION: 'Enter desired filename:',
  INPUT_LABEL: 'filename',
  INPUT_PLACEHOLDER: 'Enter filename (e.g., data)',
  EXPORT_BUTTON: 'Export',
  CANCEL_BUTTON: 'Cancel',
  SUCCESS_MESSAGE: 'File exported successfully!',
  ERROR_MESSAGE: 'An error occurred during export. Please try again.',
  CSV_ERROR_MESSAGE:
    'Cannot generate an empty file, checklist is not empty in the editor',
});

@Component({
  standalone: false,
  selector: 'app-export-dialog',
  template: `
    <div class="rounded-lg shadow-lg text-gray-200 my-2">
      <div class="my-4">
        <p-message
          severity="error"
          class="text-lg"
          *ngIf="showCSVErrorMessage()"
        >
          {{ strings.CSV_ERROR_MESSAGE }}
        </p-message>
        <p class="my-2">{{ strings.DESCRIPTION }}</p>
        <label for="filename" class="block text-sm my-2">
          {{ strings.INPUT_LABEL }}</label
        >
        <input
          id="filename"
          type="text"
          class="w-full p-2 my-2 bg-gray-700 border border-gray-600 rounded-md text-gray-200"
          [(ngModel)]="filename"
          [placeholder]="strings.INPUT_PLACEHOLDER"
        />
      </div>
      <div class="flex justify-end space-x-2">
        <button
          type="button"
          class="px-4 py-2 bg-gray-600 text-gray-200 rounded-md hover:bg-gray-500"
          (click)="cancel()"
        >
          {{ strings.CANCEL_BUTTON }}
        </button>
        <button
          type="button"
          [disabled]="!ableToExport()"
          class="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-500"
          (click)="export()"
        >
          {{ strings.EXPORT_BUTTON }}
        </button>
      </div>
    </div>
  `,
  styles: [
    `
      ::ng-deep .p-dialog-header {
        padding: 0.75rem;
        padding-bottom: 0;
        margin: 0;
        background-color: transparent;
        font-size: 1rem;
      }
    `,
  ],
})
export class ExportDialogComponent {
  readonly strings = EXPORT_DIALOG_STRINGS;
  filename: string = '';

  constructor(
    public ref: DynamicDialogRef,
    public config: DynamicDialogConfig
  ) {}

  protected export() {
    const csvString = this.config.data?.csvString || '';
    const blob = new Blob([csvString], { type: 'text/csv;charset=utf-8;' });
    const downloadLink = document.createElement('a');
    downloadLink.href = URL.createObjectURL(blob);
    downloadLink.download = `${this.filename || 'export'}.json`; // Fallback to "export.json"
    downloadLink.click();
    this.ref.close();
  }

  protected cancel() {
    this.ref.close();
  }

  protected showCSVErrorMessage() {
    return (
      !this.config.data?.csvString ||
      String(this.config.data?.csvString).length <= 0
    );
  }

  protected isFilenameValid() {
    return this.filename && this.filename.length > 0 && this.validateFilename();
  }

  protected ableToExport() {
    return !this.showCSVErrorMessage() && this.isFilenameValid();
  }

  private validateFilename(): boolean {
    const FILENAME_REGEX = /^(?!.*[. ]$)[^<>:"/\\|?*\x00-\x1F]+$/;
    return FILENAME_REGEX.test(this.filename);
  }
}
