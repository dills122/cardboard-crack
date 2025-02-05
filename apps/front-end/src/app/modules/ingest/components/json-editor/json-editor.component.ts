import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import * as ace from 'ace-builds';

import 'ace-builds/src-noconflict/mode-json';
import 'ace-builds/src-noconflict/theme-twilight';
import 'ace-builds/src-noconflict/ext-themelist';
import 'ace-builds/src-noconflict/ext-language_tools';
import 'ace-builds/src-noconflict/ext-keybinding_menu';

ace.config.set('basePath', 'node_modules/ace-builds/src-noconflict');

@Component({
  standalone: false,
  selector: 'app-json-editor',
  template: `
    <div
      #editor
      class="app-ace-editor relative w-full h-80 border border-gray-300"
    ></div>
  `,
  styles: [
    `
      html,
      body {
        height: 100%;
        margin: 0;
        padding: 0;
      }
      .ace_editor.fixed {
        position: fixed !important;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        z-index: 50;
      }
      body.overflow-hidden {
        overflow: hidden;
      }
      .ace_editor {
        transition: all 0.3s ease-in-out;
      }
      .ace_editor.bg-white {
        background-color: white;
      }
    `,
  ],
})
export class JsonEditorComponent implements AfterViewInit, OnChanges {
  @ViewChild('editor', { static: true })
  private editor!: ElementRef<HTMLElement>;
  @Input()
  inputData!: string;
  aceEditor!: ace.Ace.Editor;
  /**
   * Emits when the editor has finished loading
   */
  @Output() editorReady = new EventEmitter<boolean>();
  /**
   * Currently will only emit when new data is pushed to the editor, not when data in the editor is changed
   */
  @Output() editorDataChanged = new EventEmitter<boolean>();

  ngOnChanges(changes: SimpleChanges): void {
    if (this.aceEditor && changes['inputData']) {
      this.aceEditor.session.setValue(this.inputData || '');
      this.aceEditor.setReadOnly(false);
      this.editorDataChanged.emit(true);
    }
  }

  ngAfterViewInit() {
    this.aceEditor = ace.edit(this.editor.nativeElement);

    this.aceEditor.setOptions({
      useWorker: false,
      autoScrollEditorIntoView: true,
      enableBasicAutocompletion: true,
      enableLiveAutocompletion: true,
      theme: 'ace/theme/twilight',
      mode: 'ace/mode/json',
    });

    this.aceEditor.setReadOnly(true);

    // Add Fullscreen Toggle Command
    this.aceEditor.commands.addCommand({
      name: 'Toggle Fullscreen',
      bindKey: {
        win: 'F11',
        mac: 'Command-K',
      },
      exec: () => {
        const isFullScreen = this.toggleFullScreen();
        this.aceEditor.resize();
        console.log(`Fullscreen mode: ${isFullScreen}`);
      },
    });

    // Add Show Keyboard Shortcuts Command
    this.aceEditor.commands.addCommand({
      name: 'showKeyboardShortcuts',
      bindKey: {
        win: 'Ctrl-Alt-h',
        mac: 'Command-Alt-h',
      },
      exec: () => {
        ace.config.loadModule('ace/ext/keybinding_menu', (module) => {
          module.init(this.aceEditor);
          this.aceEditor.showKeyboardShortcuts?.();
        });
      },
    });

    // Set initial value
    if (this.inputData) {
      this.aceEditor.session.setValue(this.inputData);
    }

    this.editorReady.emit(true);
  }

  toggleFullScreen(): boolean {
    const body = document.body;
    const editorContainer = this.editor.nativeElement;

    if (!editorContainer) {
      throw new Error('Editor container not found');
    }

    // Toggle fullscreen on the editor container
    const isFullScreen = editorContainer.classList.toggle('fixed'); // Make the editor fixed
    editorContainer.classList.toggle('top-0');
    editorContainer.classList.toggle('left-0');
    editorContainer.classList.toggle('w-full'); // Ensure full width
    editorContainer.classList.toggle('h-full'); // Ensure full height
    editorContainer.classList.toggle('z-50'); // Bring the editor to front

    // Optional: Prevent scroll when fullscreen
    if (isFullScreen) {
      body.classList.add('overflow-hidden'); // Disable body scroll
    } else {
      body.classList.remove('overflow-hidden'); // Enable body scroll
    }

    return isFullScreen;
  }

  getEditorData(): string {
    return this.aceEditor.getValue();
  }

  getAllEditorsLines() {
    return this.getEditorSession().getDocument().getAllLines();
  }

  private getEditorSession() {
    return this.aceEditor.getSession();
  }
}
