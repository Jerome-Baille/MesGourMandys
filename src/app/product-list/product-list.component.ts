import { Component, OnInit  } from '@angular/core';
import { Observable } from 'rxjs';
import { Products } from '../core/models/products';
import { ProductsService } from '../core/services/products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  products$!: Observable<Products[]>;

  constructor(
    private productsService: ProductsService, 
  ) { }

  ngOnInit(): void {
    this.products$ = this.productsService.getProducts('isActive=true');
  }
}
