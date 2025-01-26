import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { provideHttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import Aura from '@primeng/themes/aura';
import { AvatarModule } from 'primeng/avatar';
import { BadgeModule } from 'primeng/badge';
import { ButtonModule } from 'primeng/button';
import { providePrimeNG } from 'primeng/config';
import { DividerModule } from 'primeng/divider';
import { CardModule } from 'primeng/card';
import { MessageModule } from 'primeng/message';
import { PanelModule } from 'primeng/panel';
import { ScrollTopModule } from 'primeng/scrolltop';
import { SelectModule } from 'primeng/select';
import { SelectButtonModule } from 'primeng/selectbutton';
import { TableModule } from 'primeng/table';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app/app.component';
import { CategorySectionComponent } from './components/category-section/category-section.component';
import { PanelCardComponent } from './components/panel-card/panel-card.component';
import { ListComponent } from './pages/list/list.component';
import { AcronymPipe } from './pipes/acronym.pipe';
import { HomeComponent } from './pages/home/home.component';
import { ToppsDisclaimerComponent } from './components/topps-disclaimer/topps-disclaimer.component';
import { OpenGithubIssuesDirective } from './directives/open-github-issues/open-github-issues.directive';

@NgModule({
  declarations: [
    AppComponent,
    CategorySectionComponent,
    PanelCardComponent,
    ListComponent,

    //PIPES
    AcronymPipe,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    //NGPRIME MODULES
    TableModule,
    SelectButtonModule,
    AvatarModule,
    BadgeModule,
    DividerModule,
    PanelModule,
    CardModule,
    ScrollTopModule,
    SelectModule,
    MessageModule,
    ButtonModule,
    ToppsDisclaimerComponent,
    OpenGithubIssuesDirective,
  ],
  providers: [
    provideAnimationsAsync(),
    providePrimeNG({
      theme: {
        preset: Aura,
      },
    }),
    provideHttpClient(),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
