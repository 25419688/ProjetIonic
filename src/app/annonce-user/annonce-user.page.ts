
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Annonce, AnnonceService } from '../annonce-service.service';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
@Component({
  selector: 'app-annonce-user',
  templateUrl: './annonce-user.page.html',
  styleUrls: ['./annonce-user.page.scss'],
})
export class AnnonceUserPage implements OnInit {
  annonces: Annonce[];
  userId: string;
  token= this.userService.getToken();


  constructor(
    private activatedRoute: ActivatedRoute,
    private annonceService: AnnonceService,
    private userService: UserService
  ) {}

  ngOnInit() {

    this.userId = this.userService.getUserData(this.token);
    console.log(this.userId);

    this.annonces = [];
    this.annonceService.getAllAnnonces().subscribe({
      next: (response) => {
        console.log(response);
        for (const key in response) {
          if (response[key].user === this.userId) {
            this.annonces.push({ user: key, ...response[key] });
          }
        }
        console.log(this.annonces);
      },
      error: (err) => {
        console.log(err);
      },
    });

  }
}
