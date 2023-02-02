import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private auth: AuthService,
    private router: Router
  ) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const token = this.auth.getToken();

    if(!token) {
      this.router.navigateByUrl('/auth/login');
      return false;
    } 

    if(this.auth.checkIsAdmin()) {
      this.router.navigateByUrl('/admin');
      return false;
    } else {
      return true;
    }
  }

  //   const role = this.auth.checkIsAdmin();
  //   if (token) { 
  //     if(role) {
  //       this.router.navigateByUrl('/admin');
  //       return false;
  //     } else {  
  //       return true;
  //     }
  //   } else {
  //     this.router.navigateByUrl('/auth/login');
  //     return false;
  //   }
  // }
}