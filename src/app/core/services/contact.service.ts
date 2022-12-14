import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  baseUrl = 'https://backend-mesgourmandys.onrender.com/api'
  // baseUrl = 'http://localhost:3000/api/order'
  
  constructor(
    private http: HttpClient
  ) { }

  PostMessage(  
    userId: any,
    firstName: string, 
    lastName: string, 
    email: string, 
    phone: number, 
    message: string, 
    products: any, 
    totalQuantity: number, 
    totalPrice: string
    ) {
    return this.http.post(this.baseUrl, {userId, firstName, lastName, email, phone, message, products, totalQuantity, totalPrice});
  }

  getOrderbyUserId(userId: any) {
    return this.http.get(this.baseUrl+`/${userId}`);
  }

  getAllOrders() {
    return this.http.get(this.baseUrl);
  }

  updateOrder(orderId: any, data: any) {
    return this.http.put(this.baseUrl+`/${orderId}`, data);
  }

  updateNotification(order: any) {
    return this.http.post(this.baseUrl+'/notification', {order});
  }
}
