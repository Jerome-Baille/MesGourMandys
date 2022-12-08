import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Users } from '../models/users';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseUrl = 'https://backend-mesgourmandys.onrender.com/api'
  // baseUrl = 'http://localhost:3000/api'
  token!: any;
  userId!: any;
  role: any = false;

  constructor(
    private http: HttpClient
  ) { }

  register(firstName: string, lastName: string, email: string, password: string){
    return this.http.post(this.baseUrl+'/auth/register', {firstName, lastName, email, password});
  }

  login(email: string, password: string){
    return this.http.post(this.baseUrl+'/auth/login', {email, password});
  }

  logout(){
    // delete the cookie "MesGourmandysToken" and "MesGourmandysUser"
    document.cookie = "MesGourmandysToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
    document.cookie = "MesGourmandysRole=; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
    // redirect to login page
    window.location.href = '/auth/login';
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

  getToken(){
    this.token = document.cookie.split('; ').find(row => row.startsWith('MesGourmandysToken='))?.split('=')[1];
    return this.token;
  }

  getAllUsers(): Observable<Users[]> {
    return this.http.get<Users[]>(this.baseUrl+'/auth');
  }

  checkIsAdmin(): boolean {
    this.role = document.cookie.split('; ').find(row => row.startsWith('MesGourmandysRole='))?.split('=')[1];
    if(!this.role || this.role === 'false'){
      return false;
    } else {
      return true;
    }
  }

  deleteUser(userId: any){
    return this.http.delete(this.baseUrl+`/auth/${userId}`);
  }
}
