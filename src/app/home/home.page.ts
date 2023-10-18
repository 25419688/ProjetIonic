import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  signInButton: any;
  constructor(private menuController: MenuController,public userService: UserService, private router: Router) {}
  openMenu() {
    this.menuController.enable(true, 'menuId');
    this.menuController.open('menuId');
  }

  closeMenu() {
    this.menuController.close('menuId');
  }

  navigateToSignIn() {
    this.router.navigate(['/sign-in']);
  }
  logout() {
    this.userService.logout();
  }
}
