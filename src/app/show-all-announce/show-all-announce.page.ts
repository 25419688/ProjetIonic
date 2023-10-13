import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { service, Annonce } from '../annonce-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-show-all-announce',
  templateUrl: './show-all-announce.page.html',
  styleUrls: ['./show-all-announce.page.scss'],
})
export class ShowAllAnnouncePage implements OnInit {

  liste: Annonce[];
  
  constructor(private annonceService: service) { }
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
  
}
