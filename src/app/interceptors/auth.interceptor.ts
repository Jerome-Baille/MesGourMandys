import { HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, finalize, Observable } from 'rxjs';
import { AuthService } from '../core/services/auth.service';
import { LoadingService } from '../core/services/loading.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(
    private authService: AuthService,
    private loadingService: LoadingService
    ) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.loadingService.startLoading();

    const headers = new HttpHeaders()
      .append('Authorization', `Bearer ${this.authService.getToken()}`);
    const modifiedReq = req.clone({ headers });

    return next.handle(modifiedReq).pipe(
      catchError(err => {
        if (err.status === 401) {
            this.authService.logout();
        }
        throw err;
    }),
      finalize(() => {
        this.loadingService.stopLoading()
      })
    );
  }
}
