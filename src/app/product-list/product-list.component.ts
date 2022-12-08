import { Component, OnInit  } from '@angular/core';
import { faPenSquare, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Observable } from 'rxjs';
import { Products } from '../core/models/products';
import { AuthService } from '../core/services/auth.service';
import { ProductsService } from '../core/services/products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  products$!: Observable<Products[]>;
  isAdmin: boolean = false;

  updateBoolean: boolean = false;
  updateProduct!: Products;

  faTrash = faTrash;
  faPenSquare = faPenSquare;

  constructor(
    private productsService: ProductsService,
    private auth: AuthService
  ) { }

  ngOnInit(): void {
    this.products$ = this.productsService.getProducts('isActive=true')

    this.isAdmin = this.auth.checkIsAdmin();
  }

  removeProduct(product: any) {
    this.productsService.deleteProduct(product.id)
      .subscribe({
        next: (v) => {
          console.log(v);
          
          this.products$ = this.productsService.getProducts('isActive=true');
        },
        error: (err) => {
          console.log(err);
        }
      })
  }

  editProduct(product: any) {
    this.updateBoolean = !this.updateBoolean;

    this.updateProduct = product;
  }

  triggerEventClose(eventData: any) {
    if (eventData.message === 'close popup') {
      this.updateBoolean = !this.updateBoolean;
      this.products$ = this.productsService.getProducts('isActive=true'); 
    }
  }
}
