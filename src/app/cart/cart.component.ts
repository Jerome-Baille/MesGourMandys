import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../core/services/products.service';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { ContactService } from '../core/services/contact.service';
import { Observable } from 'rxjs';
import { Products } from '../core/models/products';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from '../core/services/auth.service';
import { Users } from '../core/models/users';
import { ToastService } from '../core/services/toast.service';
import { Router } from '@angular/router';

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
  phoneRegex!: RegExp;

  orderConfirmed: boolean = false;
  order: any = {};

  product$!: Observable<Products>;
  user$!: Observable<Users>;

  faTrash = faTrash;

  constructor(
    private productsService: ProductsService,
    private contactService: ContactService,
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private toast: ToastService,
    private router: Router
  ) { 
    this.phoneRegex = /^(\+33|0)[1-9](\d{2}){4}$/;

    this.orderForm = this.formBuilder.group({
      firstName: [null, Validators.required],
      lastName: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      phone: [null, [Validators.required, Validators.pattern(this.phoneRegex)]],
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

    var token = this.authService.getToken()

    if(token) {
      this.authService.getUserProfile()
      .subscribe({
        next: (v: any) => {
          if(v) {
            this.authService.getUserById(v._id)
              .subscribe({
                next: (user: any) => {
                  this.orderForm.patchValue({
                    firstName: user.firstName,
                    lastName: user.lastName,
                    email: user.email,
                    phone: user.phone,
                  });
                  this.userId = v._id;
                },
                error: (err) => {
                  console.log(err)
                }
            })
          }
        },
        error: (err) => {
          console.log(err)
        }
      })
    }
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
    const { firstName, lastName, email, phone, message } = this.orderForm.value;
    const { totalPrice, totalQuantity } = this.cart;

    // get each item in the cart
    const products = this.cart.map((item: any) => {
      return {
        title: item.title,
        quantity: item.quantity
      }
    });

    this.contactService.PostMessage(this.userId, firstName, lastName, email, phone, message, products, totalQuantity, totalPrice)
    .subscribe({
      next: (v: any) => {
        this.isLoaded = true;

        // empty the cart
        this.cart = [];
        this.basket = [];
        localStorage.setItem('cart', JSON.stringify(this.basket));

        this.orderConfirmed = true;
        this.order = v.order;
      },
      error: (err) => {
        this.isLoaded = true;
        this.toast.initiate({
          title: 'Erreur',
          message: err.error.message,
        })
      }
    })
  }

  createCart(){    
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
