import { Component } from '@angular/core';
import { DynamicDialogRef, DynamicDialogConfig } from 'primeng/dynamicdialog';

@Component({
  standalone: false,
  selector: 'app-export-dialog',
  template: `
    <div class="rounded-lg shadow-lg text-gray-200 my-2">
      <div class="my-4">
        <p class="my-2">Enter desired filename:</p>
        <label for="filename" class="block text-sm my-2">Filename</label>
        <input
          id="filename"
          type="text"
          class="w-full p-2 my-2 bg-gray-700 border border-gray-600 rounded-md text-gray-200"
          [(ngModel)]="filename"
          placeholder="Enter filename (e.g., data)"
        />
      </div>
      <div class="flex justify-end space-x-2">
        <button
          type="button"
          class="px-4 py-2 bg-gray-600 text-gray-200 rounded-md hover:bg-gray-500"
          (click)="cancel()"
        >
          Cancel
        </button>
        <button
          type="button"
          class="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-500"
          (click)="export()"
        >
          Export
        </button>
      </div>
    </div>
  `,
  styles: [
    `
      ::ng-deep .p-dialog-header {
        padding: 0.75rem;
        padding-bottom: 0;
        margin: 0; /* Remove any unwanted margin */
        background-color: transparent; /* Optional: Customize background if needed */
        font-size: 1rem; /* Adjust text size */
      }
    `,
  ],
})
export class ExportDialogComponent {
  filename: string = '';

  constructor(
    public ref: DynamicDialogRef,
    public config: DynamicDialogConfig
  ) {}

  export() {
    const csvString = this.config.data?.csvString || '';
    const blob = new Blob([csvString], { type: 'text/csv;charset=utf-8;' });
    const downloadLink = document.createElement('a');
    downloadLink.href = URL.createObjectURL(blob);
    downloadLink.download = `${this.filename || 'export'}.json`; // Fallback to "export.json"
    downloadLink.click();
    this.ref.close(); // Close the dialog
  }

  cancel() {
    this.ref.close();
  }
}
