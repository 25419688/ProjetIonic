import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserService } from './user.service';


export interface Annonce {

    id?: string;
    title: string;
    user: string;
    image: string;
    description: string;
    price : string,
    phone : string,
    adresse : string,
    date: string,
}

@Injectable({
  providedIn: 'root'
})
export class AnnonceService {
  


  constructor(private http: HttpClient , private userservice: UserService) {}

  getAllAnnonces(){
    return this.http.get('https://gestion-annonces-edf14-default-rtdb.firebaseio.com/annonces.json');
  }

  getAnnonceById(id) {
    return this.http.get(`https://gestion-annonces-edf14-default-rtdb.firebaseio.com/annonces/${id}.json`);
  }

  addAnnonce(newAnnonce) {
    return this.http.post(
      'https://gestion-annonces-edf14-default-rtdb.firebaseio.com/annonces.json',
      newAnnonce
    );
  }

  deleteAnnonce(idAnnonce) {
    return this.http.delete(
      `https://gestion-annonces-edf14-default-rtdb.firebaseio.com/annonces/${idAnnonce}.json`
    );
  }



}
