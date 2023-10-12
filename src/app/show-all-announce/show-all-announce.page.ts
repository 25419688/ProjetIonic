// import { Component, OnInit } from '@angular/core';
import { ChangeDetectorRef, Component,OnInit } from '@angular/core';
import { AlertController, MenuController, ModalController } from '@ionic/angular';
// import { AnnonceServiceService } from '../annonce-service.service';
import { AnnonceService , Annonce} from '../annonce-service.service';
import { Router } from '@angular/router';
import { collection, getDocs, query } from 'firebase/firestore';

@Component({
  selector: 'app-show-all-announce',
  templateUrl: './show-all-announce.page.html',
  styleUrls: ['./show-all-announce.page.scss'],
})
export class ShowAllAnnouncePage implements OnInit {
  // listannonceService : any[]=[];
  annonces: Annonce[] = [];

  searchQuery: string = '';
  isSearchActive: boolean = false; 
  constructor(private menuController: MenuController,
              private annonceService :AnnonceService
              ,private router : Router ,
              private cd: ChangeDetectorRef,
            
              private alertCtrl: AlertController, private modalCtrl: ModalController) {
                // this.annonceService.getAllAnnonces().subscribe(res => {
                //   this.annonces = res;
                //   this.cd.detectChanges();
                // });
                // this.annonceService.getAllAnnonces().subscribe((res: Annonce[]) => {
                //   this.annonces = res;
                //   this.cd.detectChanges();
                // });
               }
  // ngOnInit() {
  //   // this.listannonceService = this.annonceService.getAllAnnonces();
  //   // this.annonceService.getAllAnnonces().subscribe((annonces) => {
  //   //   this.listannonceService = annonces;
  //   // });
  //   // this.annonceService.getAllAnnonces().subscribe((annonces) => {
  //   //   this.annonces = annonces;
  //   // });
  // }
  async ngOnInit() {
    const annoncesCollection = collection(this.annonceService.firestore, 'add-annonce');
    const q = query(annoncesCollection);

    try {
      const querySnapshot = await getDocs(q);

      querySnapshot.forEach((doc) => {
        // Traitez les données, par exemple, ajoutez-les à votre tableau annonces
        this.annonces.push(doc.data() as Annonce);
      });
    } catch (error) {
      console.error('Erreur lors de la récupération des données Firestore:', error);
    }
  }
  // async ngOnInit() {
  //   try {
  //     const annonces = await this.annonceService.getAllAnnonces().toPromise();
  
  //     // Maintenant, vous avez accès aux données Firestore dans la variable "annonces"
  //     this.annonces = annonces;
  //   } catch (error) {
  //     console.error('Erreur lors de la récupération des données Firestore:', error);
  //   }
  // }
  












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
  this.annonces = this.annonces.filter((annonce) =>
    annonce.title.toLowerCase().includes(searchTerm) ||
    annonce.user.toLowerCase().includes(searchTerm) ||
    annonce.description.toLowerCase().includes(searchTerm)
  );
  }


}
