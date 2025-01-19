import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';
import Aura from '@primeng/themes/aura';
import { TableModule } from 'primeng/table';
import { FormsModule } from '@angular/forms';
import { SelectButtonModule } from 'primeng/selectbutton';
import { AccordionModule } from 'primeng/accordion';
import { AvatarModule } from 'primeng/avatar';
import { BadgeModule } from 'primeng/badge';
import { DividerModule } from 'primeng/divider';
import { CategorySectionComponent } from './components/category-section/category-section.component';
import { AcronymPipe } from './pipes/acronym.pipe';
import { PanelModule } from 'primeng/panel';
import { PanelCardComponent } from './components/panel-card/panel-card.component';

@NgModule({
  declarations: [AppComponent, CategorySectionComponent, AcronymPipe, PanelCardComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TableModule,
    SelectButtonModule,
    FormsModule,
    AccordionModule,
    AvatarModule,
    BadgeModule,
    DividerModule,
    PanelModule,
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
