import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {MenuPageModule} from './menu/menu.module';


import { environment } from '../environments/environment';


import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireModule } from '@angular/fire/compat';



import { HttpClientModule } from '@angular/common/http';
import { AuthGuard } from './auth.guard';

// C:\Users\Administrateur\Desktop\Glsii3A\Ionic\ProjetIonic\projet\src\app\menu


@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule ,MenuPageModule, HttpClientModule, AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, AuthGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
