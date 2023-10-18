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

  constructor(private menuController: MenuController,private userService: UserService, private router: Router) {}
  openMenu() {
    this.menuController.enable(true, 'menuId');
    this.menuController.open('menuId');
  }

  closeMenu() {
    this.menuController.close('menuId');
  }

  logout() {
    this.userService.logout();
    // Redirect to the login page or any other desired page after logout
    this.router.navigate(['/login']);
  }
}
