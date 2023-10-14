import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


export interface User{
  id?: string;
  name: string;
  email: string;
  phone: string;
  image: string;
  password: string
}
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {}

  addUser(newUser) {
    return this.http.post(
      'https://gestion-annonces-edf14-default-rtdb.firebaseio.com/Signup.json',
      newUser
    );
  }

  signIn(email: string, password: string) {
    const signInData = {
      email,
      password
    };
    return this.http.post('https://gestion-annonces-edf14-default-rtdb.firebaseio.com/Signup.json', signInData);
  }
}
