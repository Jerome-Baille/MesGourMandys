import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { ToastService } from 'src/app/core/services/toast.service';
import { ProductsService } from '../../../core/services/products.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.scss']
})
export class UpdateProductComponent implements OnInit {
  @Input() product!: any;
  @Input() closeAlert!: string;

  @Output() close : EventEmitter<any> =  new EventEmitter();
  
  updateProduct!: FormGroup;
  updatedProduct!: any;
  alertMessage!: string;

  constructor(
    private formBuilder: FormBuilder,
    private productsService: ProductsService,
    private toast: ToastService
  ) { }

  async ngOnInit() {
    this.updateProduct = this.formBuilder.group({
      title: [this.product.title, Validators.required],
      id: [this.product.id, Validators.required],
      image: [this.product.image, Validators.required],
      // thumbImage: [this.product.thumbImage, [Validators.required, Validators.email]],
      price: [this.product.price, [Validators.required, Validators.pattern(/^\d*([\.,]\d+)?$/)]],
      sku: [this.product.sku, Validators.required],
      description: [this.product.description, Validators.required],
      allergens: [this.product.allergens, Validators.required],
      isActive: [this.product.isActive, Validators.required]
    })
  }

  onUpdateProduct() {
    const { title, price, sku, description, allergens } = this.updateProduct.value;
    var image = this.updateProduct.get('image')!.value;

    // create a const "product" with the value of the form
    const product = {
      id: this.product.id,
      title: title,
      image: image,
      price: price,
      sku: sku,
      description: description,
      allergens: allergens,
      isActive: this.product.isActive,
      highlight: this.product.highlight,
      popular: this.product.popular
    }

    // if the form is valid 
    if (
          (this.updateProduct.get('title')!.invalid         && this.updateProduct.get('title')!.touched)
      ||  (this.updateProduct.get('price')!.invalid         && this.updateProduct.get('price')!.touched)
      ||  (this.updateProduct.get('sku')!.invalid           && this.updateProduct.get('sku')!.touched)
      ||  (this.updateProduct.get('description')!.invalid   && this.updateProduct.get('description')!.touched)
      ||  (this.updateProduct.get('allergens')!.invalid     && this.updateProduct.get('allergens')!.touched)
    ) {
      this.toast.initiate({
        title: 'Erreur',
        message: 'Le formulaire n\'est pas rempli correctement.',
      })
    
    } else {
      this.productsService.updateProduct(product)
      .subscribe({
        next: (v) => {
          this.toast.initiate({
            title: 'Success',
            message: 'Les informations du produit ont été mises à jour avec succès',
          })
        },
        error: (err) => {
          this.toast.initiate({
            title: 'Erreur',
            message: err.error.error.message,
          })
        }
      })
    }
  }

  imageSelected(event: any) {
    const target = event.target.files[0];
    this.updateProduct.get('image')!.setValue(target);
    this.updateProduct.updateValueAndValidity();
    const reader = new FileReader();
    reader.readAsDataURL(target);
    reader.onload = () => {
      this.updatedProduct = reader.result;
    }
  }

  onClose() {
    this.close.emit({message : 'close popup'})
  }
}
