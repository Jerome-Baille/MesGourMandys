import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
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
        return this.checkIsAdmin();
    }

    checkIsAdmin(): any {
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