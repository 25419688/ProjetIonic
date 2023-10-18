import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


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

  constructor(private http: HttpClient) {}

  getAllAnnonces(){
    return this.http.get('https://gestionannonces-9bdd8-default-rtdb.firebaseio.com/annonces.json');
  }

  addAnnonce(newAnnonce) {
    return this.http.post(
      'https://gestionannonces-9bdd8-default-rtdb.firebaseio.com/annonces.json',
      newAnnonce
    );
  }

  deleteAnnonce(idAnnonce) {
    return this.http.delete(
      'https://gestionannonces-9bdd8-default-rtdb.firebaseio.com/annonces/${idAnnonce}.json'
    );
  }
  updateAnnonce(newAnnonce, idAnnonce) {
    return this.http.put(
      ` https://gestionannonces-9bdd8-default-rtdb.firebaseio.com/annonces/${idAnnonce}.json`,
    
      newAnnonce
    );
  }
  
}
