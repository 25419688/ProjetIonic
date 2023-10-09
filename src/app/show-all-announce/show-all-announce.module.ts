import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShowAllAnnouncePageRoutingModule } from './show-all-announce-routing.module';

import { ShowAllAnnouncePage } from './show-all-announce.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShowAllAnnouncePageRoutingModule
  
  ],
  declarations: [ShowAllAnnouncePage]
})
export class ShowAllAnnouncePageModule {}
