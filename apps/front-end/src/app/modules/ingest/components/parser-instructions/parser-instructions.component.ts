import { Component } from '@angular/core';

@Component({
  selector: 'app-parser-instructions',
  standalone: false,
  template: ` <div class="text-left mt-6 space-y-4">
    <h3 class="text-lg font-semibold">Instructions:</h3>
    <ul class="list-disc list-inside space-y-2 text-sm">
      <li>Click the "Upload File" button below to select a PDF checklist.</li>
      <li>Choose the appropriate product type from the dropdown menu.</li>
      <li>
        Once uploaded, verify and edit the parsed data in the editor below.
      </li>
    </ul>
  </div>`,
})
export class ParserInstructionsComponent {}
