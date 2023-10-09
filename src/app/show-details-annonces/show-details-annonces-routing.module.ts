import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShowDetailsAnnoncesPage } from './show-details-annonces.page';

const routes: Routes = [
  {
    path: '',
    component: ShowDetailsAnnoncesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShowDetailsAnnoncesPageRoutingModule {}
