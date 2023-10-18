import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AnnonceUserPageRoutingModule } from './annonce-user-routing.module';

import { AnnonceUserPage } from './annonce-user.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AnnonceUserPageRoutingModule
  ],
  declarations: [AnnonceUserPage]
})
export class AnnonceUserPageModule {}
