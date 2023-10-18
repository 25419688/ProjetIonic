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
  private token: string= localStorage.getItem('token');

  constructor(private afAuth: AngularFireAuth) {}

  signUp(email: string, password: string,) {
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

          return userCredential.user.getIdToken();
        } else {
          throw new Error('No user');
        }
      })
      .then((token) => {
        this.token = token;
        localStorage.setItem('token', token);

        return this.userId;
      })
      .catch((error) => {
        console.error('Error while signing in', error);
        throw error;
      });
    }
    getUserData(token){

    const tokenPayload = this.decodeToken(token);
    console.log('Decoded Token Payload:', tokenPayload);
    const userId = tokenPayload.user_id;
    console.log('User ID:', userId);

    return userId;
    }

    logout() {
      return this.afAuth.signOut().then(() => {
        // Clear local storage or any other cleanup steps
        localStorage.removeItem('token');
        this.token = null;
        this.userId = null;
  
        
      });
    }
    getUserId(): string {
      return this.userId;
    }    

    getToken(): string {
      return localStorage.getItem('token');
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
