import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddAnnoncesPage } from './add-annonces.page';

const routes: Routes = [
  {
    path: '',
    component: AddAnnoncesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddAnnoncesPageRoutingModule {}
