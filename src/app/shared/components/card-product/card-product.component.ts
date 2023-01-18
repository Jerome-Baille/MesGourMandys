import { Component, Input, OnInit } from '@angular/core';
import { Products } from 'src/app/core/models/products';
import { AuthService } from 'src/app/core/services/auth.service';
import { ProductsService } from 'src/app/core/services/products.service';
import { faMinusSquare, faPenSquare, faPlusSquare, faTrash } from '@fortawesome/free-solid-svg-icons';
import { ToastService } from 'src/app/core/services/toast.service';
import { Observable } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-card-product',
  templateUrl: './card-product.component.html',
  styleUrls: ['./card-product.component.scss']
})
export class CardProductComponent implements OnInit {
  @Input() products$!: Observable<Products[]>;
  @Input() product!: Products;

  isAdmin: boolean = false;
  updateBoolean: boolean = false;

  imgRes: string = 'low';
  infoLength: string = 'short';

  
  orderForm!: FormGroup;
  
  updateProduct!: Products;

  faTrash = faTrash;
  faPenSquare = faPenSquare;
  faPlusSquare = faPlusSquare;
  faMinusSquare = faMinusSquare;

  constructor(
    private productsService: ProductsService,
    private auth: AuthService,
    private toast: ToastService,
    private formBuilder: FormBuilder,
  ) { 
    this.orderForm = this.formBuilder.group({
      sku: '',
      quantity: [1, [Validators.max(10), Validators.min(1)]]
    })
  }

  ngOnInit(): void {
    this.isAdmin = this.auth.checkIsAdmin();

    if (window.location.href.includes('detail')) {
      this.imgRes = 'high';
      this.infoLength = 'long';
    } else {
      this.imgRes = 'low';
      this.infoLength = 'short';
    }
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

  removeQuantity() {
    // get the quantity from the form and remove 1
    var { quantity } = this.orderForm.value;
    if(quantity === 1) return; // if quantity is 1, don't remove (minimum quantity is 1
    quantity -= 1;
    this.orderForm.patchValue({ quantity });
  }

  addQuantity() {
    // get the quantity from the form and add 1
    var { quantity } = this.orderForm.value;
    if(quantity === 10) return;
    quantity += 1;
    this.orderForm.patchValue({ quantity });
  }

  
  triggerEventClose(eventData: any) {
    if (eventData.message === 'close popup') {
      this.updateBoolean = !this.updateBoolean;
      this.products$ = this.productsService.getProducts('isActive=true'); 
    }
  }

  getTotalPrice() {
    var { quantity } = this.orderForm.value;
    var { price } = this.product;
    return quantity * price!.valueOf();
  }

  onOrder() {
    var { quantity } = this.orderForm.value;
    var { sku } = this.product;
    var message = '';

    // if the form is not valid, return
    if(!this.orderForm.valid){
      this.toast.initiate({
        title: 'Erreur!',
        message: 'La quantité doit être comprise entre 1 et 10',
      })
      return;
    };

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
}
