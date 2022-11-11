import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Users } from '../models/users';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  token!: any;
  userId!: any;
  role: any = false;

  constructor(
    private http: HttpClient
  ) { }

  register(email: string, password: string){
    return this.http.post('http://localhost:3000/api/auth/register', {email, password});
  }

  login(email: string, password: string){
    return this.http.post('http://localhost:3000/api/auth/login', {email, password});
  }

  logout(){
    // delete the cookie "MesGourmandysToken" and "MesGourmandysUser"
    document.cookie = "MesGourmandysToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
    document.cookie = "MesGourmandysUser=; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
    // redirect to login page
    window.location.href = '/auth/login';
  }

  getUserById(userId: any){
    return this.http.get(`http://localhost:3000/api/auth/${userId}`);
  }

  getUserProfile(){
    return this.http.get('http://localhost:3000/api/auth/profile');
  }

  updateUser(userId: any, data: any){
    return this.http.put(`http://localhost:3000/api/auth/${userId}`, data);
  }

  getToken(){
    this.token = document.cookie.split('; ').find(row => row.startsWith('MesGourmandysToken='))?.split('=')[1];
    return this.token;
  }

  getAllUsers(): Observable<Users[]> {
    return this.http.get<Users[]>('http://localhost:3000/api/auth');
  }

  checkIsAdmin(): boolean {
    this.role = document.cookie.split('; ').find(row => row.startsWith('MesGourmandysRole='))?.split('=')[1];
    if(this.role === 'true'){
      return true;
    } else {
      return false;
    }
  }

  deleteUser(userId: any){
    return this.http.delete(`http://localhost:3000/api/auth/${userId}`);
  }
}
