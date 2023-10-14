import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.page.html',
  styleUrls: ['./sign-in.page.scss'],
})
export class SignInPage implements OnInit {
  clickedH2Index: number | null = null;
  email: string;
  password: string;

  constructor(private userService: UserService, private router: Router) {}


      signIn() {
        this.userService.signIn(this.email, this.password).subscribe(
          {next: (response) => {
              console.log('Successfully logged in!', response);
              this.router.navigate(['/home']);
            },
            error : (err) => {
              console.log(err);
            },
        });
      }

  ngOnInit() {
  }
}
  // handleClick(index: number) {
  //   // Gérer le clic ici
  //   // Vous pouvez utiliser event.target pour obtenir l'élément cliqué, etc.
  //   document.querySelectorAll('.clickable-h2').forEach(function(h2) {
  //     h2.addEventListener('click', function() {
  //       // Supprime la classe 'clicked' de tous les h2
  //       document.querySelectorAll('.clickable-h2').forEach(function(h2) {
  //         h2.classList.remove('clicked');
  //       });

  //       // Ajoute la classe 'clicked' à l'élément cliqué
  //       this.classList.add('clicked');
  //     });
  //   });
  // this.clickedH2Index = index;


  //  }


