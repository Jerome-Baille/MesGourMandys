import { Component, Input, OnInit } from '@angular/core';
import { Products } from 'src/app/core/models/products';
import { AuthService } from 'src/app/core/services/auth.service';
import { ProductsService } from 'src/app/core/services/products.service';
import { faEye, faEyeSlash, faLightbulb as faLightbulbS, faMinusSquare, faStar as faStarS, faPenSquare, faPlusSquare, faTrash } from '@fortawesome/free-solid-svg-icons';
import { faStar, faLightbulb } from '@fortawesome/free-regular-svg-icons';
import { ToastService } from 'src/app/core/services/toast.service';
import { Observable } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-product',
  templateUrl: './card-product.component.html',
  styleUrls: ['./card-product.component.scss']
})
export class CardProductComponent implements OnInit {
  @Input() products$!: Observable<Products[]>;
  @Input() product!: Products;

  favsCount!: number;

  isAdmin: boolean = false;
  updateBoolean: boolean = false;

  imgRes: string = 'low';
  infoLength: string = 'short';
  infoPrice: string = 'yes';
  infoAdmin: string = 'no';
  
  orderForm!: FormGroup;
  
  updateProduct!: Products;

  faTrash = faTrash;
  faPenSquare = faPenSquare;
  faPlusSquare = faPlusSquare;
  faMinusSquare = faMinusSquare;
  faEye = faEye;
  faEyeSlash = faEyeSlash;
  faLightbulbS = faLightbulbS;
  faLightbulbReg = faLightbulb;
  faStarS = faStarS;
  faStarReg = faStar;

  constructor(
    private productsService: ProductsService,
    private auth: AuthService,
    private toast: ToastService,
    private formBuilder: FormBuilder,
    private router: Router
  ) { 
    this.orderForm = this.formBuilder.group({
      sku: '',
      quantity: [1, [Validators.max(10), Validators.min(1)]]
    })
  }

  location = this.router.url;

  ngOnInit(): void {
    this.isAdmin = this.auth.checkIsAdmin();

    this.getInfo();   
    
    this.productsService.favsCount.subscribe({
      next: (v) => {
        this.favsCount = v;
      }
    })
  }

  getInfo() {
    const conditions = [
      {key: "detail", imgRes: "high", infoLength: "long", infoPrice: "yes", infoAdmin: "no"},
      {key: "admin", imgRes: "low", infoLength: "short", infoPrice: "no", infoAdmin: "yes"}
    ]

    const found = conditions.find(c => this.location.includes(c.key)) || {imgRes: "low", infoLength: "short", infoPrice: "yes", infoAdmin: "no"};

    this.imgRes = found!.imgRes
    this.infoLength = found!.infoLength 
    this.infoPrice = found!.infoPrice;
    this.infoAdmin = found!.infoAdmin;
  }

  removeProduct(product: any) {
      this.toast.initiate({
        title: 'Suppression',
        message: 'Etes-vous sûr de vouloir supprimer ce produit?',
        type: 'confirm',
      })
  
      this.toast.isConfirmed.subscribe({
        next: (v) => {
          if (!!v) {
            this.productsService.deleteProduct(product._id)
              .subscribe({
                next: (v: any) => {
                  this.toast.initiate({
                    title: 'Success!',
                    message: v.message,
                  })
  
                  this.products$ = this.productsService.getProducts('isActive=true');
          },
          error: (err) => {
            this.toast.initiate({
              title: 'Erreur!',
              message: err.error.message,
            })
          }
        })
      }
        },
        error: (err) => {
          this.toast.initiate({
            title: 'Erreur!',
            message: err.error.message,
          })
        }
      })
      
    // this.productsService.deleteProduct(product.id)
    //   .subscribe({
    //     next: (v) => {
    //       console.log(v);
          
    //       this.products$ = this.productsService.getProducts('isActive=true');
    //     },
    //     error: (err) => {
    //       console.log(err);
    //     }
    //   })
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
      type: "success"
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
  
  updateProductData(src: string, product: any){
    switch(src) {
      case 'highlight':
        product.highlight = !product.highlight;

        this.productsService.listProducts.subscribe({
          next: (v) => {
            v.forEach((p: any) => {
              if(p.id !== product.id && p.highlight === true) {
                p.highlight = false;

                this.productsService.updateProduct(p)
                  .subscribe({
                    next: (v) => {
                      console.log(v);
                    }
                  })
              }
            })
          },
          error: (err) => {
            console.log(err);
          }
        })
        break;

      case 'popular':
        product.popular = !product.popular;

        if (product.popular === true) {
          this.favsCount++;
        } else {
          this.favsCount--;
        }

        break;

      case 'isActive':
        product.isActive = !product.isActive;
        break;

      default:
        break;
    }

    this.productsService.favsCount.next(this.favsCount);

    this.productsService.updateProduct(product)
      .subscribe({
        next: (v) => {
          console.log(v);
        }
      })
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
