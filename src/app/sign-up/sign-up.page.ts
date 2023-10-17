import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService, User } from '../user.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
  providers: [UserService],
})
export class SignUpPage implements OnInit {

  user: User= {
    
    name: '',
    email: '',
    phone: '',
    image: '',
    password: '',
  }

  constructor(private userService: UserService, private router: Router) { }

  signUp() {
    this.userService.signUp(this.user.email, this.user.password)
      .then((response) => {
        console.log('Successfully signed up!', response);
        this.router.navigate(['/sign-in']);
      })
      .catch((error) => {
        console.error('Error while signing up', error);
      });
  }

  ngOnInit() {
  }
}
