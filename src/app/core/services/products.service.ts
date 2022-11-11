import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Products } from '../models/products';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(
    private http: HttpClient,
  ) { }
    API_URL = 'http://localhost:3000/api/product';

    createProduct(title: string, id: string, image: string, thumbImage: string, price: number, sku: string, description: string, allergens: string) {
        return this.http.post(`${this.API_URL}/new`, {title, id, image, thumbImage, price, sku, description, allergens});
    }

    getProducts(filter: any): Observable<Products[]> {
        return this.http.get<Products[]>(`${this.API_URL}?${filter}`);
    }

    getProductById(id: string): Observable<Products> {
        return this.http.get<Products>(`${this.API_URL}/${id}`);
    }

    getProductBySku(sku: string): Observable<Products> {
        return this.http.get<Products>(`${this.API_URL}/sku/${sku}`);
    }

    updateProduct(product: any) {
        const id = product.id;
        return this.http.put(`${this.API_URL}/${id}`, product);
    }

    deleteProduct(id: string) {
        return this.http.delete(`${this.API_URL}/${id}`);
    }
}
