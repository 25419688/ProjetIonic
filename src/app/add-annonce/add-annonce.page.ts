import { Component, OnInit } from '@angular/core';
import { service, Annonce } from '../annonce-service.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-add-annonce',
  templateUrl: './add-annonce.page.html',
  styleUrls: ['./add-annonce.page.scss'],
})
export class AddAnnoncePage implements OnInit {

  annonce: Annonce = {
    title: '',
    user: '',
    image: '',
    description: '',
    price: '',
    phone: '',
    adresse: '',
    date: '',
  };

  constructor(private annonceService: service,
    private router: Router) {}

  ngOnInit() {}

  addAnnonce(newAnnonce) {
    this.annonceService.addAnnonce(newAnnonce).subscribe({
      next: (response) => {
        console.log(response);
        this.router.navigate(['/show-all-announce']);
      },
      error: (err) => {
        console.log(err);
      },
    });

  }

}
