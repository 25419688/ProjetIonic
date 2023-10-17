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

  ngOnInit() {
  }
  
  addAnnonce(newAnnonce) {
    const token = this.userService.getToken();
    const tokenPayload = this.decodeToken(token);
    console.log('Decoded Token Payload:', tokenPayload);
    const userId = tokenPayload.user_id;
    console.log('User ID:', userId);
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

  private decodeToken(token: string): any {
    const tokenParts = token.split('.');
    if (tokenParts.length === 3) {
      const payload = tokenParts[1];
      return JSON.parse(atob(payload));
    }
    return null;
  }
}
