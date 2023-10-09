import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShowAllAnnouncePage } from './show-all-announce.page';

const routes: Routes = [
  {
    path: '',
    component: ShowAllAnnouncePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShowAllAnnouncePageRoutingModule {}
