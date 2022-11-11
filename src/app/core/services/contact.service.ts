import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  baseUrl = 'https://backend-mesgourmandys.onrender.com/api'
  
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
    return this.http.post(this.baseUrl+'/order', {userId, firstName, lastName, email, phone, message, products, totalQuantity, totalPrice});
  }

  getOrderbyUserId(userId: any) {
    return this.http.get(this.baseUrl+`/order/${userId}`);
  }

  getAllOrders() {
    return this.http.get(this.baseUrl+'/order');
  }

  updateOrder(orderId: any, data: any) {
    return this.http.put(this.baseUrl+`/order/${orderId}`, data);
  }

  updateNotification(order: any) {
    return this.http.post(this.baseUrl+'/order/notification', {order});
  }
}
