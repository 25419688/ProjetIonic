import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AnnonceUserPage } from './annonce-user.page';

const routes: Routes = [
  {
    path: '',
    component: AnnonceUserPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AnnonceUserPageRoutingModule {}
