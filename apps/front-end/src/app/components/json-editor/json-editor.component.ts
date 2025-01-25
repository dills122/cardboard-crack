import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnChanges,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import * as ace from 'ace-builds';

@Component({
  standalone: false,
  selector: 'app-json-editor',
  template: ` <div class="app-ace-editor w-full h-80" #editor></div> `,
  styles: [
    `
      .app-ace-editor {
      }
    `,
  ],
})
export class JsonEditorComponent implements AfterViewInit, OnChanges {
  @ViewChild('editor')
  private editor!: ElementRef<HTMLElement>;
  @Input({
    required: true,
  })
  inputData!: string;
  aceEditor!: ace.Editor;

  ngOnChanges(changes: SimpleChanges): void {
    this.aceEditor.session.setValue(this.inputData);
  }

  ngAfterViewInit(): void {
    ace.config.set(
      'basePath',
      'https://unpkg.com/ace-builds@1.4.12/src-noconflict'
    );
    this.aceEditor = ace.edit(this.editor.nativeElement);
    this.aceEditor.session.setValue(this.inputData);
    this.aceEditor.setTheme('ace/theme/twilight');
    this.aceEditor.session.setMode('ace/mode/json');
  }
}
