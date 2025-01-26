import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PageComponent } from './page/page.component';
import { SelectModule } from 'primeng/select';
import { MessageModule } from 'primeng/message';
import { FileUploadModule } from 'primeng/fileupload';
import { ButtonModule } from 'primeng/button';
import { TooltipModule } from 'primeng/tooltip';
import { DividerModule } from 'primeng/divider';
import { PanelModule } from 'primeng/panel';
import { ScrollTopModule } from 'primeng/scrolltop';
import { JsonEditorComponent } from './components/json-editor/json-editor.component';

import { PdfModule } from '../pdf/pdf.module';
import { ToppsDisclaimerComponent } from '../../components/topps-disclaimer/topps-disclaimer.component';
import { IngestRoutingModule } from './ingest-routing.module';
import { KeyboardShortcutsPanelComponent } from './components/keyboard-shortcuts-panel/keyboard-shortcuts-panel.component';
import { ParserInstructionsComponent } from './components/parser-instructions/parser-instructions.component';

@NgModule({
  declarations: [
    PageComponent,
    JsonEditorComponent,
    KeyboardShortcutsPanelComponent,
    ParserInstructionsComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    PdfModule,
    DividerModule,
    PanelModule,
    ScrollTopModule,
    SelectModule,
    MessageModule,
    FileUploadModule,
    ButtonModule,
    TooltipModule,
    ToppsDisclaimerComponent,
    IngestRoutingModule,
  ],
})
export class IngestModule {}
