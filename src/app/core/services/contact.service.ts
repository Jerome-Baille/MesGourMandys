import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  constructor(
    private http: HttpClient
  ) { }

  PostMessage(  userId: any,
                firstName: string, 
                lastName: string, 
                email: string, 
                phone: number, 
                message: string, 
                products: any, 
                totalQuantity: number, 
                totalPrice: string) {
    return this.http.post('http://localhost:3000/api/order', {userId, firstName, lastName, email, phone, message, products, totalQuantity, totalPrice});
  }

  getOrderbyUserId(userId: any) {
    return this.http.get(`http://localhost:3000/api/order/${userId}`);
  }

  getAllOrders() {
    return this.http.get('http://localhost:3000/api/order');
  }

  updateOrder(orderId: any, data: any) {
    return this.http.put(`http://localhost:3000/api/order/${orderId}`, data);
  }

  updateNotification(order: any) {
    return this.http.post('http://localhost:3000/api/order/notification', {order});
  }
}
