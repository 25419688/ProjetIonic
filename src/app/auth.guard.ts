import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private userService: UserService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    // Vérifiez si l'utilisateur est connecté en utilisant le service UserService
    const isLoggedIn = this.userService.isUserLoggedIn();

    // Si l'utilisateur est connecté, autorisez l'accès à la route
    if (isLoggedIn) {
      return true;
    }

    // Si l'utilisateur n'est pas connecté, redirigez-le vers la page de connexion
    this.router.navigate(['/sign-in']);
    return false;
  }
}
