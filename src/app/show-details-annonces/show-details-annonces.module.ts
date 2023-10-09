import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShowDetailsAnnoncesPageRoutingModule } from './show-details-annonces-routing.module';

import { ShowDetailsAnnoncesPage } from './show-details-annonces.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShowDetailsAnnoncesPageRoutingModule
  ],
  declarations: [ShowDetailsAnnoncesPage]
})
export class ShowDetailsAnnoncesPageModule {}
