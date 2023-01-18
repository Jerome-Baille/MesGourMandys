import { Component, OnInit } from '@angular/core';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faPenSquare, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Observable } from 'rxjs';
import { Products } from '../core/models/products';
import { AuthService } from '../core/services/auth.service';
import { ProductsService } from '../core/services/products.service';
import { ToastService } from '../core/services/toast.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  isAdmin: boolean = false;
  updateBoolean: boolean = false;
  updateProduct!: Products;
  
  highlight$!: Observable<Products[]>;
  popular$!: Observable<Products[]>;
  isLoaded: boolean = false;

  faPenSquare = faPenSquare;
  faTrash = faTrash;
  faInstagram = faInstagram;

  constructor(
    private productsService: ProductsService,
    private auth: AuthService,
    private toast: ToastService,
  ) { }

  ngOnInit(): void {
    this.isAdmin = this.auth.checkIsAdmin();
    this.highlight$ = this.productsService.getProducts('highlight=true');
    this.popular$ = this.productsService.getProducts('popular=true');

    this.isLoaded = true;
  }

  editProduct(product: any) {
    this.updateBoolean = !this.updateBoolean;

    this.updateProduct = product;
  }

  addTocart(product: any) {
    let cart: any = localStorage.getItem('cart');
    let cartArray: any = [];
    let { sku } = product;

    if (cart) {
      cartArray = JSON.parse(cart);
    }

    let productInCart = cartArray.find((item: any) => item.sku === product.sku);

    if (productInCart) {
      productInCart.quantity += 1;
    } else {
      product.quantity = 1;
      cartArray.push({ sku, quantity: 1 });
    }

    localStorage.setItem('cart', JSON.stringify(cartArray));

    this.toast.initiate({
      title: 'Success!',
      message: 'Produit ajouté au panier',
    })
  }

  removeProduct(product: any) {
    this.productsService.deleteProduct(product.id)
      .subscribe({
        next: (v) => {          
          this.highlight$ = this.productsService.getProducts('highlight=true');
        },
        error: (err) => {
          console.log(err);
        }
      })
  }

  triggerEventClose(eventData: any) {
    if (eventData.message === 'close popup') {
      this.updateBoolean = !this.updateBoolean;
      this.highlight$ = this.productsService.getProducts('highlight=true');
    }
  }

}
