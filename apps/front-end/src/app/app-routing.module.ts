import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IngestComponent } from './pages/ingest/ingest.component';
import { ListComponent } from './pages/list/list.component';

const routes: Routes = [
  {
    path: '',
    component: ListComponent,
  },
  {
    path: 'list',
    component: ListComponent,
  },
  {
    path: 'ingest',
    component: IngestComponent,
  },
  {
    path: '**',
    redirectTo: 'list',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
