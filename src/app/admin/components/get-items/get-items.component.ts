import { Component, OnInit, Input } from '@angular/core';
import { Products } from 'src/app/core/models/products';
import { Observable } from 'rxjs';
import { faCheckCircle, faEye, faEyeSlash, faLightbulb as faLightbulbS, faMedal, faPenSquare, faStar as faStarS, faTrash } from '@fortawesome/free-solid-svg-icons';
import { ProductsService } from 'src/app/core/services/products.service';
import { faStar, faLightbulb } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-get-items',
  templateUrl: './get-items.component.html',
  styleUrls: ['./get-items.component.scss']
})
export class GetItemsComponent implements OnInit {
  products$!: Observable<Products[]>;
  @Input() products!: any;
  @Input() favsCount: number = 0;

  updateBoolean: boolean = false;
  updateProduct!: Products;
  isLoaded: boolean = true;

  faCheckCircle = faCheckCircle;
  faPenSquare = faPenSquare;
  faMedal = faMedal;
  faStarS = faStarS;
  faStarReg = faStar;
  faEye = faEye;
  faEyeSlash = faEyeSlash;
  faLightbulbS = faLightbulbS;
  faLightbulbReg = faLightbulb;
  faTrash = faTrash;

  constructor(
    private productsService: ProductsService
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
      this.products$ = this.productsService.getProducts(null); 
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
    // open an alert box to confirm deletion
    if (confirm('Etes-vous sûr de vouloir supprimer ce produit?')) {
      console.log('delete product');
      this.productsService.deleteProduct(product)
        .subscribe({
          next: (v) => {
            console.log(v);
          }
        })
    }
  }
}
