import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Users } from '../models/users';
import jwt_decode from 'jwt-decode';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseUrl = 'https://backend-mesgourmandys.onrender.com/api'
  // baseUrl = 'http://localhost:3000/api'
  private token!: string;
  userId!: any;
  role: any = false;

  TOKEN_COOKIE_NAME = 'MesGourmandysToken=';

  constructor(
    private http: HttpClient,
    private router: Router,
  ) { }

  register(firstName: string, lastName: string, email: string, password: string){
    return this.http.post(this.baseUrl+'/auth/register', {firstName, lastName, email, password});
  }

  login(email: string, password: string): Observable<any>{
    const credentials = { email, password }
    return this.http.post<any>(this.baseUrl+'/auth/login', credentials);
  }

  logout(){
    // delete the cookie "MesGourmandysToken"
    document.cookie = "MesGourmandysToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    // redirect to login page
    this.router.navigate(['auth/login']);
    // window.location.href = '/auth/login';
  }

  getUserById(userId: any){
    return this.http.get(this.baseUrl+`/auth/${userId}`);
  }

  getUserProfile(){
    return this.http.get(this.baseUrl+'/auth/profile');
  }

  updateUser(userId: any, data: any){
    return this.http.put(this.baseUrl+`/auth/${userId}`, data);
  }

  setToken(token: string) {
    document.cookie = `MesGourmandysToken=${token}`;
    this.token = token;
  }

  getToken(){
    if (this.token) {
      return this.token;
    } else {
      const cookieParts = document.cookie.split(';');
      const tokenCookie = cookieParts.find(part => part.trimStart().startsWith(this.TOKEN_COOKIE_NAME));
      if (!tokenCookie) {
        return null;
      }
      return tokenCookie.split('=')[1];
    }
  }

  decodeToken(): any {
    try {
      return jwt_decode(this.getToken()!);
    } catch (Error) {
      return null;
    }
  }

  getAllUsers(): Observable<Users[]> {
    return this.http.get<Users[]>(this.baseUrl+'/auth');
  }

  checkIsAdmin(): boolean {
    const decodedToken = this.decodeToken();
    return decodedToken ? decodedToken.isAdmin : false;

    // this.role = document.cookie.split('; ').find(row => row.startsWith('MesGourmandysRole='))?.split('=')[1];
    // if(!this.role || this.role === 'false'){
    //   return false;
    // } else {
    //   return true;
    // }
  }

  deleteUser(userId: any){
    return this.http.delete(this.baseUrl+`/auth/${userId}`);
  }
}
