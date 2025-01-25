import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import Aura from '@primeng/themes/aura';
import { AvatarModule } from 'primeng/avatar';
import { BadgeModule } from 'primeng/badge';
import { providePrimeNG } from 'primeng/config';
import { DividerModule } from 'primeng/divider';
import { PanelModule } from 'primeng/panel';
import { ScrollTopModule } from 'primeng/scrolltop';
import { SelectButtonModule } from 'primeng/selectbutton';
import { TableModule } from 'primeng/table';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app/app.component';
import { CategorySectionComponent } from './components/category-section/category-section.component';
import { PanelCardComponent } from './components/panel-card/panel-card.component';
import { AcronymPipe } from './pipes/acronym.pipe';
import { IngestComponent } from './pages/ingest/ingest.component';
import { ListComponent } from './pages/list/list.component';
import { PdfModule } from './modules/pdf/pdf.module';
import { SelectModule } from 'primeng/select';
import { JsonEditorComponent } from './components/json-editor/json-editor.component';

@NgModule({
  declarations: [
    AppComponent,
    CategorySectionComponent,
    PanelCardComponent,
    IngestComponent,

    //PIPES
    AcronymPipe,
    ListComponent,
    JsonEditorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PdfModule,
    //NGPRIME MODULES
    TableModule,
    SelectButtonModule,
    FormsModule,
    AvatarModule,
    BadgeModule,
    DividerModule,
    PanelModule,
    ScrollTopModule,
    SelectModule,
  ],
  providers: [
    provideAnimationsAsync(),
    providePrimeNG({
      theme: {
        preset: Aura,
      },
    }),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
