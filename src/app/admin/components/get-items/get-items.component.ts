import { Component, OnInit, Input } from '@angular/core';
import { Products } from 'src/app/core/models/products';
import { faEye, faEyeSlash, faLightbulb as faLightbulbS, faPenSquare, faStar as faStarS, faTrash } from '@fortawesome/free-solid-svg-icons';
import { ProductsService } from 'src/app/core/services/products.service';
import { faStar, faLightbulb } from '@fortawesome/free-regular-svg-icons';
import { ToastService } from 'src/app/core/services/toast.service';

@Component({
  selector: 'app-get-items',
  templateUrl: './get-items.component.html',
  styleUrls: ['./get-items.component.scss']
})
export class GetItemsComponent implements OnInit {
  @Input() products!: any;
  @Input() favsCount: number = 0;

  updateBoolean: boolean = false;
  updateProduct!: Products;

  faPenSquare = faPenSquare;
  faStarS = faStarS;
  faStarReg = faStar;
  faEye = faEye;
  faEyeSlash = faEyeSlash;
  faLightbulbS = faLightbulbS;
  faLightbulbReg = faLightbulb;
  faTrash = faTrash;

  constructor(
    private productsService: ProductsService,
    private toast: ToastService
  ) { }

  ngOnInit(): void {
  }

  editProduct(product: any) {
    this.updateBoolean = !this.updateBoolean;

    this.updateProduct = product;
  }

  triggerEventClose(eventData: any) {
    if (eventData.message === 'close popup') {
      this.updateBoolean = !this.updateBoolean;
      this.productsService.getProducts(null)
        .subscribe({
          next: (v) => {
            this.products = v;
          }
        })
    }
  }

  updateProductData(src: string, product: any){
    switch (src) {
      case 'highlight':
        product.highlight = !product.highlight;

        this.products.forEach((p: any) => {
          if (p.id !== product.id && p.highlight === true) {
            p.highlight = false;
    
            this.productsService.updateProduct(p)
              .subscribe({
                next: (v) => {
                  console.log(v);
                }
              })
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

    this.productsService.updateProduct(product)
    .subscribe({
      next: (v) => {        
        console.log(v);
      }
    })
  }


  deleteProduct(product: any) {
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
                title: 'Success',
                message: v.message,
              })

              this.products = this.products.filter((p: any) => p._id !== product._id);
            },
            error: (err) => {
              this.toast.initiate({
                title: 'Error',
                message: err.message,
              })
            }
          })
        }
      },
      error: (err) => {
        this.toast.initiate({
          title: 'Error',
          message: err.message,
          type: 'error'
        })
      }
    })
  }
}
