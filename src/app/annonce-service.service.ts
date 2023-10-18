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



  apiUrl = 'https://ionic-15b28-default-rtdb.firebaseio.com';

  constructor(private http: HttpClient) {}

  getAllAnnonces(){

    return this.http.get(`${this.apiUrl}/annonces.json`);
  }

  getAnnonceById(id) {
    return this.http.get(`${this.apiUrl}/annonces/${id}.json`);

  }


  addAnnonce(newAnnonce) {

    return this.http.post(`${this.apiUrl}/annonces.json`,

      newAnnonce
    );
  }

  deleteAnnonce(idAnnonce) {
    return this.http.delete(

      `${this.apiUrl}/annonces/${idAnnonce}.json`);
  }
  updateAnnonce(newAnnonce, idAnnonce) {
    return this.http.put(
      ` https://gestionannonces-9bdd8-default-rtdb.firebaseio.com/annonces/${idAnnonce}.json`,

      newAnnonce

    );
  }



}
