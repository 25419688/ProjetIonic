import { Component, OnInit } from '@angular/core';
import { AnnonceService } from '../annonce-service.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
  providers: [AnnonceService], // Ajoutez le service ici
})
export class SignUpPage implements OnInit {

  constructor(private annonceService: AnnonceService) { }

  ngOnInit() {
  }
  itemTapped(event: any, annonce: any) {
    // Gérez ici ce qui doit se produire lorsque l'élément est cliqué
  }

}
