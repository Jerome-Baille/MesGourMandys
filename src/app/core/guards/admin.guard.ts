import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
    isAdmin!: any;
  
    constructor(
      private auth: AuthService,
      private router: Router
    ) {}
  
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {
        this.auth.getUserProfile()
            .subscribe((res: any) => {
                if (res.isAdmin) {
                    return true;
                } else {
                    this.router.navigateByUrl('/auth/login');
                    return false;
                }
        });
    }
}