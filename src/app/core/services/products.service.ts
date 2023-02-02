import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Products } from '../models/products';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(
    private http: HttpClient,
  ) { }
    API_URL = 'https://backend-mesgourmandys.onrender.com/api/product';
    // API_URL = 'http://localhost:3000/api/product';

    createProduct(
        title:          string, 
        id:             string, 
        image:          File,  
        price:          string, 
        sku:            string, 
        description:    string, 
        allergens:      string,
        isActive:       boolean
    ) {
        const productData = new FormData();
        productData.append('title', title);
        productData.append('id', id);
        productData.append('image', image);
        productData.append('price', price);
        productData.append('sku', sku);
        productData.append('description', description);
        productData.append('allergens', allergens);
        productData.append('isActive', isActive.toString());
        return this.http.post(`${this.API_URL}/new`, productData);
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
            const productData = new FormData();
            productData.append('title', product.title);
            productData.append('id', product.id);
            productData.append('image', product.image);
            productData.append('price', product.price);
            productData.append('sku', product.sku);
            productData.append('description', product.description);
            productData.append('allergens', product.allergens);
            productData.append('isActive', product.isActive);
            if(product.highlight) productData.append('highlight', product.highlight);
            if(product.isActive) productData.append('fav', product.isActive);
        return this.http.put(`${this.API_URL}/${product.id}`, productData);
    }

    deleteProduct(id: string) {
        return this.http.delete(`${this.API_URL}/${id}`);
    }


    public favsCount = new BehaviorSubject<number>(0);
    
    public listProducts = new BehaviorSubject<Products[]>([]);

    changeObject(object: any){
        this.listProducts.next(object);
    }
}
