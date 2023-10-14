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
    id: '',
    name: '',
    email: '',
    phone: '',
    image: '',
    password: '',
  }

  constructor(private userService: UserService, private router: Router) { }


  addUser(newUser) {
    this.userService.addUser(newUser).subscribe({
      next: (response) => {
        console.log(response);
        this.router.navigate(['/sign-in']);
      },
      error: (err) => {
        console.log(err);
      },
    });

  }

  ngOnInit() {
  }
  itemTapped(event: any, annonce: any) {
    // Gérez ici ce qui doit se produire lorsque l'élément est cliqué
  }


}
