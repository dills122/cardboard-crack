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
    <div class="p-4 text-md">
      <p>Use the following shortcuts to enhance your workflow in the editor:</p>
      <div class="p-4 rounded-lg shadow-md max-w-lg">
        <ul class="space-y-2">
          <li class="font-semibold">
            <span class="hover:text-blue-400 cursor-pointer"
              >Toggle Fullscreen Mode</span
            >
            <ul class="pl-4 mt-1 space-y-1 border-l border-gray-700">
              <li class="hover:text-blue-400 cursor-pointer">
                Windows/Linux: <kbd>F11</kbd>
              </li>
              <li class="hover:text-blue-400 cursor-pointer">
                Mac: <kbd>Command</kbd> + <kbd>K</kbd>
              </li>
            </ul>
          </li>
          <li class="font-semibold">
            <span class="hover:text-blue-400 cursor-pointer"
              >View Keyboard Shortcuts Menu</span
            >
            <ul class="pl-4 mt-1 space-y-1 border-l border-gray-700">
              <li class="hover:text-blue-400 cursor-pointer">
                Windows/Linux: <kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>H</kbd>
              </li>
              <li class="hover:text-blue-400 cursor-pointer">
                Mac: <kbd>Command</kbd> + <kbd>Alt</kbd> + <kbd>H</kbd>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </p-panel>`,
})
export class KeyboardShortcutsPanelComponent {}
