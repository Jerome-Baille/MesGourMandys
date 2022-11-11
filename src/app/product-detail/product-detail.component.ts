import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { ProductsService } from '../core/services/products.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { Products } from '../core/models/products';
import { faPenSquare, faTrash } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  id: any;
  product$!: Observable<Products>;

  isLoaded: boolean = true;

  updateBoolean: boolean = false;
  updateProduct!: Products;

  faPenSquare = faPenSquare;
  faTrash = faTrash;

  orderForm!: FormGroup;

  constructor(
    private productsService: ProductsService,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.isLoaded = false;

    this.route.paramMap.subscribe((params: ParamMap) => {
      this.id = params.get('id')
    })

    this.product$ = this.productsService.getProductById(this.id)

    this.product$.subscribe(() => {
      this.isLoaded = true;
    })

    this.orderForm = this.formBuilder.group({
      sku: '',
      quantity: 1
    })
  }

  onOrder() {
    var { quantity } = this.orderForm.value;

    this.product$.subscribe(product => {
      var { sku } = product;

      //add the product and quantity to the local storage
      var cart = JSON.parse(localStorage.getItem('cart') || '[]');
      var item = cart.find((item: any) => item.sku === sku);
      if (item) {
        item.quantity += quantity;
      } else {
        cart.push({ sku, quantity });
      }
      localStorage.setItem('cart', JSON.stringify(cart));
    })
  }

  editProduct(product: any) {
    this.updateBoolean = !this.updateBoolean;
    
    this.updateProduct = product.subscribe((product: any) => {
      this.updateProduct = product;
    })
  }

  removeProduct(product: any) {
    product.subscribe((product: any) => {
      this.productsService.deleteProduct(product.id).subscribe(() => {
        this.router.navigate(['/boutique'])
      })
    })
  }

  triggerEventClose(eventData: any) {
    if (eventData.message === 'close popup') {
      this.updateBoolean = !this.updateBoolean;
      this.product$ = this.productsService.getProductById(this.id)
    }
  }
}
