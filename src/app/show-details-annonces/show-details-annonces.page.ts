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
    private activatedRoute: ActivatedRoute,
    private annonceService: AnnonceService ,
    private router: Router


 ) { }

  ngOnInit() {


    // this.activatedRoute.paramMap.subscribe({
    //   next: (p: ParamMap) => {
    //     let id = p.get('id');

    //     console.log(id);
    //     this.selectedAnnonces = this.annonceService.getAnnoncesById(id);
    //   },
    // });
    // this.activatedRoute.paramMap.subscribe({
    //   next: (p: ParamMap) => {
    //     let id = p.get('id');
    //     if (id) {
    //       // Si l'ID est passé en tant que paramètre, récupérez les détails de l'annonce
    //       this.selectedAnnonces = this.annonceService.getAnnoncesById(id);
    //     } else {
    //       // Si aucun ID n'est passé, gérer le cas où l'ID est manquant
    //       // Par exemple, rediriger l'utilisateur vers la page de liste des annonces
    //       this.router.navigate(['/show-all-announce']);
    //     }
    //   },
    // });


  }

}
