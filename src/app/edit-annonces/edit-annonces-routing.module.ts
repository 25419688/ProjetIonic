import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditAnnoncesPage } from './edit-annonces.page';

const routes: Routes = [
  {
    path: '',
    component: EditAnnoncesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditAnnoncesPageRoutingModule {}
