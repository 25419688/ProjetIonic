import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {MenuPageModule} from './menu/menu.module';
import { MenuPage } from './menu/menu.page';

import { environment } from '../environments/environment';

import { HttpClientModule } from '@angular/common/http';

// C:\Users\Administrateur\Desktop\Glsii3A\Ionic\ProjetIonic\projet\src\app\menu


@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule ,MenuPageModule, HttpClientModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
