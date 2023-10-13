// import { Injectable } from '@angular/core';
// import { AngularFirestore } from '@angular/fire/firestore';

// @Injectable({
//   providedIn: 'root'
// })
// export class AnnonceServiceService {
//   // private allAnnonces= [
//   //   {
//   //     id: 1,
//   //     title: 'Villa a louer  ',
//   //     author: 'Raja Ben Salem',
//   //     image:
//   //       'https://th.bing.com/th/id/R.c12655844c41395c8767ce23f8f29ef7?rik=dRH8l6Lk1p5OOw&riu=http%3a%2f%2fwww.blog-viaprestige-realestate.com%2fwp-content%2fuploads%2f2016%2f05%2fMaison-de-luxe.jpg&ehk=Jlwkz1SHUJOq8%2beuewrWy8wTM8mbzEyFdkAOPDSHQjA%3d&risl=&pid=ImgRaw&r=0',
//   //     description : 'une maison de luxe ou en trouve 6 chambre a coché , deux sallon,piscine,3 salle de bains, deux cuisines, ',
//   //     price : '$100',
//   //     num : '25419688',
//   //     adresse : 'bizerte',
//   //     date : '10-02-1998'

//   //   },
//   //   {
//   //     id: 2,
//   //     title: 'Villa a louer ',
//   //     author: 'Mariem Jaziri',
//   //     image:
//   //       'https://th.bing.com/th/id/R.c12655844c41395c8767ce23f8f29ef7?rik=dRH8l6Lk1p5OOw&riu=http%3a%2f%2fwww.blog-viaprestige-realestate.com%2fwp-content%2fuploads%2f2016%2f05%2fMaison-de-luxe.jpg&ehk=Jlwkz1SHUJOq8%2beuewrWy8wTM8mbzEyFdkAOPDSHQjA%3d&risl=&pid=ImgRaw&r=0',
//   //     description : 'une maison de luxe ou en trouve 6 chambre a coché , deux sallon,piscine,3 salle de bains, deux cuisines',
//   //     price : '$100',
//   //     num : '25419688',
//   //     adresse : 'bizerte',
//   //     date : '10-02-1998'
      
//   //   },
//   //   {
//   //     id: 3,
//   //     title: 'Villa a louer  ',
//   //     author: 'Rahma Sassi',
//   //     image:
//   //       'https://www.quelconstructeurchoisir.com/app/uploads/2020/01/belle-maison-architecte-couv.jpg',
//   //     description : 'une maison de luxe ou une maison de rêve ',
//   //     price : '$100',
//   //     num : '25419688',
//   //     adresse : 'bizerte',
//   //     date : '10-02-1998'
//   //   },
//   //   {
//   //     id: 4,
//   //     title: 'Voiture a Vendre   ',
//   //     author: 'Rahma Sassi',
//   //     image:
//   //       'https://th.bing.com/th/id/R.4285079d76d8c5bec844237e00535733?rik=pxkwZfFNlIL6mA&pid=ImgRaw&r=0',
//   //     description : 'une maison de luxe ou une maison de rêve ',
//   //     price : '$100.000',
//   //     num : '25419688',
//   //     adresse : 'bizerte',
//   //     date : '10-02-1998'
//   //   },
//   //   {
//   //     id: 5,
//   //     title: 'Voiture a Vendre   ',
//   //     author: 'Raja Ben Salem',
//   //     image:
//   //       'https://i.f1g.fr/media/eidos/704x396_cropupscale/2019/07/12/XVM9e936592-a4a5-11e9-b82e-7537cbeba650.jpg',
//   //     description : 'une voiture de luxe ou une maison de rêve ',
//   //     price : '$100.000',
//   //     num : '25419688',
//   //     adresse : 'bizerte',
//   //     date : '10-02-1998'
//   //   },
//   // ];

//   constructor(private firestore: AngularFirestore) { }

//   getAllAnnonces(){
//     return this.allAnnonces
//   }
//   getAnnoncesById(id){
//     return this.allAnnonces.find((element) => element.id == id);
//   }

// }
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { collection, collectionData, doc, docData, addDoc, Firestore, DocumentData, CollectionReference } from '@angular/fire/firestore';
// import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore/';

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
// title, user, image, description, price, phone, adresse, et date
@Injectable({
  providedIn: 'root'
})
export class AnnonceService {

  constructor( public firestore: Firestore) { }

  // getAllAnnonces(): Observable<Annonce[]> {
  //   const annonces = collection(this.firestore, 'add-annonce');
  //   return collectionData(annonces, { idField: 'id'}) as Observable<Annonce[]>;
  // }
  // getAllAnnonces(): Observable<Annonce[]> {
  //   const annonces = collection(this.firestore, 'add-annonce');
  //   return collectionData(annonces, { idField: 'id' }) as Observable<Annonce[]>;
  // }
  getAllAnnonces(): Observable<Annonce[]> {
    try {
      const annonces = collection(this.firestore, 'add-annonce') as CollectionReference<DocumentData>;
      console.log(annonces)
      return collectionData(annonces, { idField: 'id' }) as Observable<Annonce[]>;
    } catch (error) {
      console.error('Error fetching data:', error);
      // You can return an empty array or handle the error in your component
      return of([]);
    }
  }

  getAnnoncesById(id): Observable<Annonce> {
    const annonce = doc(this.firestore, `annonces/${id}`);
    return docData(annonce, { idField: 'id' }) as Observable<Annonce>;
  }

  addAnnonce(annonce: Annonce) {
    const a = collection(this.firestore, 'add-annonce');
    return addDoc(a, annonce);
  }

  // deleteNote(note: Note) {
  //   const noteDocRef = doc(this.firestore, `notes/${note.id}`);
  //   return deleteDoc(noteDocRef);
  // }

  // updateNote(note: Note) {
  //   const noteDocRef = doc(this.firestore, `notes/${note.id}`);
  //   return updateDoc(noteDocRef, { title: note.title, text: note.text });
  // }
}
