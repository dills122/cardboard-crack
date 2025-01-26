import { Component } from '@angular/core';

@Component({
  selector: 'app-keyboard-shortcuts-panel',
  standalone: false,
  template: ` <p-panel
    header="Keyboard Shortcuts"
    [collapsed]="true"
    [toggleable]="true"
    [toggler]="'header'"
  >
    <div class="p-4">
      <p class="mb-4 text-sm">
        Use the following shortcuts to enhance your workflow in the editor:
      </p>
      <ul class="space-y-3 text-sm">
        <li>
          <strong>Toggle Fullscreen Mode:</strong>
          <div>
            <span class="block">Windows/Linux: <kbd>F11</kbd></span>
            <span class="block">Mac: <kbd>Command</kbd> + <kbd>K</kbd></span>
          </div>
        </li>
        <li>
          <strong>View Keyboard Shortcuts Menu:</strong>
          <div>
            <span class="block"
              >Windows/Linux: <kbd>Ctrl</kbd> + <kbd>Alt</kbd> +
              <kbd>H</kbd></span
            >
            <span class="block"
              >Mac: <kbd>Command</kbd> + <kbd>Alt</kbd> + <kbd>H</kbd></span
            >
          </div>
        </li>
      </ul>
    </div>
  </p-panel>`,
})
export class KeyboardShortcutsPanelComponent {}
