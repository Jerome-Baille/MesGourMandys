import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { ProductsService } from '../core/services/products.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { Products } from '../core/models/products';
import { faPenSquare, faTrash } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from '../core/services/auth.service';
import { ToastService } from '../core/services/toast.service';


@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  id: any;
  product$!: Observable<Products>;
  isAdmin: boolean = false;

  product: Products = {};

  imgLoaded: boolean = false;

  updateBoolean: boolean = false;
  updateProduct!: Products;

  faPenSquare = faPenSquare;
  faTrash = faTrash;

  orderForm!: FormGroup;

  constructor(
    private productsService: ProductsService,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private router: Router,
    private auth: AuthService,
    private toast: ToastService
  ) { 
    this.orderForm = this.formBuilder.group({
      sku: '',
      quantity: 1
    })
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.id = params.get('id')
    })

    this.productsService.getProductById(this.id)
    .subscribe({
      next: (product: any) => {
        this.product = product;

        // Check in local storage, in the key "produits" if the product is already in the cart and change the quantity
        var cart = JSON.parse(localStorage.getItem('cart') || '[]');
        var item = cart.find((item: any) => item.sku === this.product.sku);
        if (item) {
          this.orderForm.controls['quantity'].setValue(item.quantity);
        }
      },
      error: (err: any) => console.log(err)
    })

    this.isAdmin = this.auth.checkIsAdmin();
  }

  onOrder() {
    var { quantity } = this.orderForm.value;
    var { sku } = this.product;
    var message = '';

    //add the product and quantity to the local storage
    var cart = JSON.parse(localStorage.getItem('cart') || '[]');
    var item = cart.find((item: any) => item.sku === sku);
    if (item) {
      item.quantity = quantity;
      message = `La quantité de ${this.product.title} a été mise à jour`;
    } else {
      cart.push({ sku, quantity });

      if(quantity > 1) {
        message = `${quantity} ${this.product.title} ont été ajoutés au panier`;
      } else {
        message = `${quantity} ${this.product.title} a été ajouté au panier`;
      }
    }
    localStorage.setItem('cart', JSON.stringify(cart));

    this.toast.initiate({
      title: 'Success!',
      message: `${message}`,
    })

  }

  editProduct(product: any) {
    this.updateBoolean = !this.updateBoolean;
    
    this.updateProduct = product;
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
