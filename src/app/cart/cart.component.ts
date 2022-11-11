import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../core/services/products.service';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { ContactService } from '../core/services/contact.service';
import { Observable } from 'rxjs';
import { Products } from '../core/models/products';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from '../core/services/auth.service';
import { Users } from '../core/models/users';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  userId!: any;
  basket: any = [];
  cart: any = [];
  isLoaded: boolean = true;
  orderForm!: FormGroup;

  product$!: Observable<Products>;
  user$!: Observable<Users>;

  faTrash = faTrash;

  constructor(
    private productsService: ProductsService,
    private contactService: ContactService,
    private authService: AuthService,
    private formBuilder: FormBuilder
  ) { 
    this.orderForm = this.formBuilder.group({
      firstName: [null, Validators.required],
      lastName: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      phone: [null, Validators.required],
      message: [null],
      
      products: this.formBuilder.array([]),
    })
  }

  ngOnInit(): void {
    // get cart from local storage
    this.basket = JSON.parse(localStorage.getItem('cart') || '[]');

    this.basket.map((item: any) => {
      this.product$ = this.productsService.getProductBySku(item.sku);

      this.product$.subscribe(product => {
        var { id, title, sku, price, thumbImage } = product;
        var quantity = item.quantity;

        this.cart.push({ id, title, sku, price, thumbImage, quantity });
      });
    });
    
    this.createCart();

    this.authService.getUserProfile()
      .subscribe({
        next: (v: any) => {
          this.authService.getUserById(v._id).subscribe((user: any) => {
            this.orderForm.patchValue({
              firstName: user.firstName,
              lastName: user.lastName,
              email: user.email,
              phone: user.phone,
            });
          })
        },
        error: (err) => {
          console.log(err)
        }
      })

    // if (this.userId) {
    //   this.authService.getUserById(this.userId).subscribe((user: any) => {
    //     this.orderForm.patchValue({
    //       firstName: user.firstName,
    //       lastName: user.lastName,
    //       email: user.email,
    //       phone: user.phone,
    //     });
    //   })
    // }
  }

  onAddQuantity(sku: string) {
    // find the item corresponding to the sku in cart and increase the quantity
    this.cart = this.cart.map((item: any) => {
      if (item.sku === sku) {
        item.quantity++;
      }
      return item;
    });

    // in this.basket, find the item corresponding to the sku and increase the quantity
    this.basket = this.basket.map((item: any) => {
      if (item.sku === sku) {
        item.quantity++;
      }
      return item;
    });

    // update the local storage
    localStorage.setItem('cart', JSON.stringify(this.basket));
  }

  onDecreaseQuantity(sku: string) {
    let itemForRemoval: any;

    // find the item corresponding to the sku in cart and decrease the quantity
    this.cart = this.cart.map((item: any) => {
      if (item.sku === sku) {
        item.quantity--;

        if (item.quantity === 0) {
          
          itemForRemoval = item;
        }
      }
      return item;
    });

    // in this.basket, find the item corresponding to the sku and decrease the quantity
    this.basket = this.basket.map((item: any) => {
      if (item.sku === sku) {
        item.quantity--;
      }
      return item;
    });

    // update the local storage
    localStorage.setItem('cart', JSON.stringify(this.basket));

    if (itemForRemoval) {
      this.onRemoveItem(itemForRemoval.sku);
    }
  }

  onSubmit() {
    this.isLoaded = false;
    const userId = document.cookie.split('; ').find(row => row.startsWith('MesGourmandysUser='))?.split('=')[1];
    const { firstName, lastName, email, phone, message } = this.orderForm.value;
    const { totalPrice, totalQuantity } = this.cart;

    // get each item in the cart
    const products = this.cart.map((item: any) => {
      return {
        title: item.title,
        quantity: item.quantity
      }
    });

    this.contactService.PostMessage(userId, firstName, lastName, email, phone, message, products, totalQuantity, totalPrice)
    .subscribe({
      next: (v) => {
        console.log(v)
        this.isLoaded = true;
      },
      error: (err) => {
        console.log(err)
        this.isLoaded = true;
      }
    })
  }

  createCart(){    
    // this.products.push(new FormControl({ quantity: ['']}));

    for (let item of this.cart) {
      let formGroup = this.formBuilder.group({
        title: item.title,
        quantity: item.quantity,
        price: item.price,
        sku: item.sku,
        thumbImage: item.thumbImage,
      });

      this.products.push(formGroup);
    }
  } 

  get products(): FormArray {
    return this.orderForm.get('products') as FormArray;
  }

  getTotalQuantity() {   
    const totalQuantity = this.cart.reduce((acc: any, item: any) => {
      return acc + item.quantity;
    }, 0);

    this.cart.totalQuantity = totalQuantity;

    return totalQuantity;

    // return this.orderForm.value.products.reduce((acc: any, item: any) => {
    //   return acc + item.quantity;
    // }, 0)
  }

  getTotalPrice() {
    const totalPrice = this.cart.reduce((prev: any, cur: any) => {
      return prev + (cur.quantity * cur.price);
    }, 0).toFixed(2);

    this.cart.totalPrice = totalPrice;

    return totalPrice;

    // return this.cart.reduce((acc: any, item: any) => {
    //   return acc + item.price * item.quantity;
    // }, 0);

    // return this.orderForm.value.products.reduce((acc: any, item: any) => {
    //   return acc + item.quantity * item.price;
    // }, 0)
  }

  onRemoveItem(sku: string) {
    // find the item corresponding to the sku in cart and remove it
    this.cart = this.cart.filter((item: any) => item.sku !== sku);

    // in this.basket, find the item corresponding to the sku and delete it
    this.basket = this.basket.filter((item: any) => item.sku !== sku);

    // update the local storage
    localStorage.setItem('cart', JSON.stringify(this.basket));
  }
}
