// import { Component } from '@angular/core';
import { Component } from '@angular/core';
import { AnnonceService, Annonce } from '../annonce-service.service';
import { Router } from '@angular/router';
import { ChangeDetectorRef } from '@angular/core';
import { Location } from '@angular/common';


@Component({
  selector: 'app-edit-annonces',
  templateUrl: './edit-annonces.page.html',
  styleUrls: ['./edit-annonces.page.scss'],
})
export class EditAnnoncesPage {
 
  
  allAnnonce = [];
  newAnnonce: Annonce = {
    title: '',
    user: '',
    image: '',
    description: '',
    price: '',
    phone: '',
    adresse: '',
    date: '',
  };
  
  constructor(private annoncesService: AnnonceService,private router: Router,private changeDetectorRef: ChangeDetectorRef,private location: Location) {}
  refreshPage() {
    this.location.replaceState(this.location.path());
    location.reload();
  }
  navigateToShowAll() {
    this.router.navigateByUrl('/show-all-announce', { skipLocationChange: true }).then(() => {
      this.router.navigate(['/show-all-announce']);
    });
  }
  updateAnnonce(newAnnonce, id) {
    this.annoncesService.updateAnnonce(newAnnonce, id).subscribe({
      next: (response) => {
        this.getAnnonces();
        console.log(response);
        this.changeDetectorRef.detectChanges();
        this.navigateToShowAll();
        // this.router.navigate(['/show-all-announce']);
        // this.changeDetectorRef.detectChanges();
        // this.router.navigate(['/show-all-announce']);
        
       
        
      },
      error: (err) => {
        console.log(err);
      },
      
    });
  }
  navigateToEditPage(annonceId: string) {
    this.router.navigate(['/edit', annonceId]);
  }
  getAnnonces() {
    this.allAnnonce= [];
    this.annoncesService.getAllAnnonces().subscribe({
      next: (response) => {
        console.log(response);
        for (const key in response) {
          this.allAnnonce.push({ id: key, ...response[key] });
        }
        console.log(this.allAnnonce);

      },
      error: (err) => {
        console.log(err);
      },
    });
  }
  ngOnInit() {
    
    this.getAnnonces();
  }
 
  
}
