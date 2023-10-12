import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddAnnoncesPageRoutingModule } from './add-annonces-routing.module';

import { AddAnnoncesPage } from './add-annonces.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddAnnoncesPageRoutingModule
  ],
  declarations: [AddAnnoncesPage]
})
export class AddAnnoncesPageModule {}
