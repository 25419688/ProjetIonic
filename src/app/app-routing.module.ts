import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'show-all-announce',
    loadChildren: () => import('./show-all-announce/show-all-announce.module').then( m => m.ShowAllAnnouncePageModule)
  },
  {
    path: 'menu',
    loadChildren: () => import('./menu/menu.module').then( m => m.MenuPageModule)
  },
  {
    path: 'show-details-annonces/:id',
    loadChildren: () => import('./show-details-annonces/show-details-annonces.module').then( m => m.ShowDetailsAnnoncesPageModule)
  },  {
    path: 'add-annonce',
    loadChildren: () => import('./add-annonce/add-annonce.module').then( m => m.AddAnnoncePageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
