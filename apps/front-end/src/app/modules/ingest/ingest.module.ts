import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BadgeModule } from 'primeng/badge';
import { ButtonModule } from 'primeng/button';
import { DividerModule } from 'primeng/divider';
import { DialogService, DynamicDialogModule } from 'primeng/dynamicdialog';
import { FileUploadModule } from 'primeng/fileupload';
import { MessageModule } from 'primeng/message';
import { OverlayBadgeModule } from 'primeng/overlaybadge';
import { PanelModule } from 'primeng/panel';
import { ScrollTopModule } from 'primeng/scrolltop';
import { SelectModule } from 'primeng/select';
import { TooltipModule } from 'primeng/tooltip';

import { ToppsDisclaimerComponent } from '../../components/topps-disclaimer/topps-disclaimer.component';
import { OpenGithubIssuesDirective } from '../../directives/open-github-issues/open-github-issues.directive';
import { PdfModule } from '../pdf/pdf.module';
import { ExportDialogComponent } from './components/export-dialog/export-dialog.component';
import { JsonEditorComponent } from './components/json-editor/json-editor.component';
import { KeyboardShortcutsPanelComponent } from './components/keyboard-shortcuts-panel/keyboard-shortcuts-panel.component';
import { NeedsAttentionComponent } from './components/needs-attention/needs-attention.component';
import { ParserInstructionsComponent } from './components/parser-instructions/parser-instructions.component';
import { IngestRoutingModule } from './ingest-routing.module';
import { PageComponent } from './page/page.component';

@NgModule({
  declarations: [
    PageComponent,
    JsonEditorComponent,
    KeyboardShortcutsPanelComponent,
    ParserInstructionsComponent,
    ExportDialogComponent,
    NeedsAttentionComponent,
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
    DynamicDialogModule,
    BadgeModule,
    OverlayBadgeModule,
    ToppsDisclaimerComponent,
    IngestRoutingModule,
    OpenGithubIssuesDirective,
  ],
  providers: [DialogService],
})
export class IngestModule {}
