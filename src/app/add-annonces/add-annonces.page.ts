import { Component, OnInit } from '@angular/core';
import { AnnonceService , Annonce} from '../annonce-service.service';
import { MenuController } from '@ionic/angular';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-annonces',
  templateUrl: './add-annonces.page.html',
  styleUrls: ['./add-annonces.page.scss'],
})
export class AddAnnoncesPage implements OnInit {
  // newAnnonce:  Annonce[] = [];// Initialize an empty Annonce object
  newAnnonce: Annonce = {
    title: '',
    user: '',
    image: '',
    description: '',
    price: '',
    phone: '',
    adresse: '',
    date: ''
  };
  constructor(
    private menuController: MenuController,
              private annonceService :AnnonceService
              ,private router : Router 
  ) { }

  ngOnInit() {
    
  }
//   addAnnonce() {
//     for (const annonce of this.newAnnonce) {
//       this.annonceService.addAnnonce(annonce).then(() => {
//         // Annonce added successfully, you can navigate to another page or show a confirmation message
//         console.log('Annonce added successfully');
//         this.router.navigate(['/show-all-announce']); // Navigate to the list of annonces, for example
//       });
// }
addAnnonce() {
  this.annonceService.addAnnonce(this.newAnnonce).then(() => {
    // Annonce added successfully, you can navigate to another page or show a confirmation message
    console.log('Annonce added successfully');
    this.router.navigate(['/show-all-announce']); // Navigate to the list of annonces, for example
  });
}
}

