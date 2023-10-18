import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Annonce, AnnonceService } from '../annonce-service.service';

@Component({
  selector: 'app-annonce-user',
  templateUrl: './annonce-user.page.html',
  styleUrls: ['./annonce-user.page.scss'],
})
export class AnnonceUserPage implements OnInit {

  selectedAnnonce: Annonce;

  constructor(
    private activatedRoute: ActivatedRoute,
    private annonceService: AnnonceService
  ) {}

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
      const id = params.get('id');
      console.log(id);

      if (id) {
        this.annonceService.getAnnonceById(id).subscribe(
          (annonce: Annonce) => {
            this.selectedAnnonce = annonce;
          },
          (error) => {
            console.error('Error fetching announcement by ID:', error);
          }
        );
      }
    });
  }
}