import { Component } from '@angular/core';

export const PARSER_INSTRUCTIONS_STRINGS = Object.freeze({
  HEADER: 'Instructions:',
  STEP_ONE: 'Click the "Upload File" button below to select a PDF checklist.',
  STEP_TWO: 'Choose the appropriate product type from the dropdown menu.',
  STEP_THREE:
    'Once uploaded, verify and edit the parsed data in the editor below.',
});

@Component({
  selector: 'app-parser-instructions',
  standalone: false,
  template: ` <div class="text-left mt-6 space-y-4">
    <h3 class="text-lg font-semibold">{{ strings.HEADER }}</h3>
    <ul class="list-disc list-inside space-y-2 text-sm">
      <li>{{ strings.STEP_ONE }}</li>
      <li>{{ strings.STEP_TWO }}</li>
      <li>
        {{ strings.STEP_THREE }}
      </li>
    </ul>
  </div>`,
})
export class ParserInstructionsComponent {
  strings = PARSER_INSTRUCTIONS_STRINGS;
}
