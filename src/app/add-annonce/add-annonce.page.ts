import { Component, OnInit } from '@angular/core';
import { AnnonceService, Annonce } from '../annonce-service.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-add-annonce',
  templateUrl: './add-annonce.page.html',
  styleUrls: ['./add-annonce.page.scss'],
})
export class AddAnnoncePage implements OnInit {

  annonce: Annonce = {
    id : null,
    title: '',
    user: '',
    image: '',
    description: '',
    price: '',
    phone: '',
    adresse: '',
    date: '',
  };

  constructor(private annonceService: AnnonceService,
    private router: Router,
    private userService : UserService) {}
    token= this.userService.getToken();
  ngOnInit() {
  }

  addAnnonce(newAnnonce) {
    const userId= this.userService.getUserData(this.token);
    newAnnonce.user = userId;
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
