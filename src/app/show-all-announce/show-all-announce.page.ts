import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { AnnonceServiceService } from '../annonce-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-show-all-announce',
  templateUrl: './show-all-announce.page.html',
  styleUrls: ['./show-all-announce.page.scss'],
})
export class ShowAllAnnouncePage implements OnInit {
  listannonceService : any[]=[];
  searchQuery: string = '';
  isSearchActive: boolean = false; 
  constructor(private menuController: MenuController,
              private annonceService :AnnonceServiceService
              ,private router : Router ) { }
  ngOnInit() {
    this.listannonceService = this.annonceService.getAllAnnonces();
  }












  openMenu() {
    this.menuController.enable(true, 'menuId');
    this.menuController.open('menuId');
  }

  closeMenu() {
    this.menuController.close('menuId');
  }
  toggleSearch() {
    this.isSearchActive = !this.isSearchActive;
    if (!this.isSearchActive) {
      // Réinitialisez la requête de recherche et traitez les résultats ici
      this.searchQuery = '';
    }
  }
  clearSearch() {
    this.searchQuery = '';
  }
  onSearchChange(event: any) {
    // Obtenez le terme de recherche à partir de l'événement de changement
  const searchTerm: string = event.target.value.toLowerCase();

  // Filtrer la liste d'annonces en fonction du terme de recherche
  this.listannonceService = this.listannonceService.filter((annonce) =>
    annonce.title.toLowerCase().includes(searchTerm) ||
    annonce.author.toLowerCase().includes(searchTerm) ||
    annonce.description.toLowerCase().includes(searchTerm)
  );
  }


}
