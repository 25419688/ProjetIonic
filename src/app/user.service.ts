import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AngularFireAuth } from '@angular/fire/compat/auth'; // Assurez-vous d'importer le module approprié

export interface User {
  id?: string;
  name: string;
  email: string;
  phone: string;
  image: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userId: string;

  constructor(private afAuth: AngularFireAuth) {}

  signUp(email: string, password: string) {
    return this.afAuth.createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        if (userCredential && userCredential.user) {
          return userCredential.user;
        } else {
          throw new Error('No user');
        }
      })
      .catch((error) => {
        console.error('Error while signing up', error);
      });
  }

  signIn(email: string, password: string) {
    return this.afAuth.signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        if (userCredential && userCredential.user) {
          this.userId = userCredential.user.uid;
          return userCredential.user;
        } else {
          throw new Error('No user');
        }
      })
      .catch((error) => {
        console.error('Error while signing in', error);
        throw error; 
      });
    }


    logout() {
      return this.afAuth.signOut()
        .then(() => {
          this.userId = ''; 
        })
        .catch((error) => {
          console.error('Error while logging out', error);
        });
    }
    
    getUserId(): string {
      return this.userId;
    }

    isUserLoggedIn(): boolean {
      return !!this.afAuth.currentUser;
    }
}
