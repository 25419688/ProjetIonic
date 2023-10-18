import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

import { AnnonceService } from '../annonce-service.service';


@Component({
  selector: 'app-show-details-annonces',
  templateUrl: './show-details-annonces.page.html',
  styleUrls: ['./show-details-annonces.page.scss'],
})

export class ShowDetailsAnnoncesPage implements OnInit {
  selectedAnnonces;
  constructor(
    private route: ActivatedRoute,
    private annonceService: AnnonceService ,
    private router: Router
 ) { }

 ngOnInit() {
 
  const annonceId = this.route.snapshot.paramMap.get('id');

  this.annonceService.getAnnonceById(annonceId).subscribe({
    next: (response) => {
      this.selectedAnnonces = { id: annonceId, ...response };
    },
    error: (err) => {
      console.log(err);
    },
  });
}

}
