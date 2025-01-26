import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PageComponent } from './page/page.component';
import { SelectModule } from 'primeng/select';
import { MessageModule } from 'primeng/message';
import { FileUploadModule } from 'primeng/fileupload';
import { ButtonModule } from 'primeng/button';
import { provideHttpClient } from '@angular/common/http';
import { DividerModule } from 'primeng/divider';
import { PanelModule } from 'primeng/panel';
import { ScrollTopModule } from 'primeng/scrolltop';
import { JsonEditorComponent } from './components/json-editor/json-editor.component';

import { PdfModule } from '../pdf/pdf.module';
import { ToppsDisclaimerComponent } from '../../components/topps-disclaimer/topps-disclaimer.component';
import { IngestRoutingModule } from './ingest-routing.module';

@NgModule({
  declarations: [PageComponent, JsonEditorComponent],
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
    ToppsDisclaimerComponent,
    IngestRoutingModule,
  ],
})
export class IngestModule {}
