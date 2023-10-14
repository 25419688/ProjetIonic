
import { AnnonceService, Annonce } from '../annonce-service.service';
import { ChangeDetectorRef, Component,OnInit } from '@angular/core';
import { AlertController, MenuController, ModalController } from '@ionic/angular';
import { Router } from '@angular/router';



@Component({
  selector: 'app-show-all-announce',
  templateUrl: './show-all-announce.page.html',
  styleUrls: ['./show-all-announce.page.scss'],
})
export class ShowAllAnnouncePage implements OnInit {

  liste: Annonce[];
  searchQuery: string = '';
  isSearchActive: boolean = false;

  constructor(
    private annonceService: AnnonceService,
    private alertController: AlertController,
    private menuController: MenuController,
    private cd: ChangeDetectorRef,
  private alertCtrl: AlertController,
  private modalCtrl: ModalController) {}


  ngOnInit() {
    this.getAnnonces();  }

  getAnnonces() {
    this.liste = [];
    this.annonceService.getAllAnnonces  ().subscribe({
      next: (response) => {
        console.log(response);
        for (const key in response) {
          this.liste.push({ id: key, ...response[key] });
        }
        console.log(this.liste);
      },
      error: (err) => {
        console.log(err);
      },
    });

  }

  async presentAlert(idAnnonce) {
    const alert = await this.alertController.create({
      header: 'Confirm',
      message: 'Etes vous sur de vouloir supprimer ce task ?',
      buttons: [
        'No',
        {
          text: 'Yes',
          handler: () => {
            this.annonceService.deleteAnnonce(idAnnonce).subscribe({
              next: (response) => {
                console.log(response);
                this.getAnnonces;
              },
              error: (err) => {
                console.log(err);
              },
            });
          },
        },
      ],
    });

    await alert.present();
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
  this.liste = this.liste.filter((annonce) =>
    annonce.title.toLowerCase().includes(searchTerm) ||
    annonce.user.toLowerCase().includes(searchTerm) ||
    annonce.description.toLowerCase().includes(searchTerm)
  );

  }

}
