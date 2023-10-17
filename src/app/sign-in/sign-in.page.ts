import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.page.html',
  styleUrls: ['./sign-in.page.scss'],
})
export class SignInPage implements OnInit {
  email: string = '';
  password: string = '';

  constructor(private userService: UserService, private router: Router) {}

  signIn() {
    console.log('Email:', this.email);
    console.log('Password:', this.password);
  
    if (this.email && this.password) {
      this.userService.signIn(this.email, this.password)
        .then((response) => {
          console.log('Successfully logged in!', response);
          const userId = this.userService.getUserId();
          console.log('User ID:', userId);
          this.router.navigate(['/home']);
        })
        .catch((error) => {
          console.error('Error while signing in', error);
        });
    } else {
      console.error('Email or password is empty');
    }
  }
  

  ngOnInit() {
  }
}
