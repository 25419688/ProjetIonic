import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { AnnonceServiceService } from '../annonce-service.service';

@Component({
  selector: 'app-show-details-annonces',
  templateUrl: './show-details-annonces.page.html',
  styleUrls: ['./show-details-annonces.page.scss'],
})
export class ShowDetailsAnnoncesPage implements OnInit {
  selectedAnnonces;
  constructor(
    private activatedRoute: ActivatedRoute,
    private annonceService: AnnonceServiceService ,
    private router: Router

  ) { }

  ngOnInit() {

    this.activatedRoute.paramMap.subscribe({
      next: (p: ParamMap) => {
        let id = p.get('id');

        console.log(id);
        this.selectedAnnonces = this.annonceService.getAnnoncesById(id);
      },
    });

  }

}
