import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { ProductsService } from '../../core/services/products.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.scss']
})
export class UpdateProductComponent implements OnInit {
  @Input() product!: any;

  @Output() close : EventEmitter<any> =  new EventEmitter();
  
  updateProduct!: FormGroup;
  updatedProduct!: any;

  constructor(
    private formBuilder: FormBuilder,
    private productsService: ProductsService
  ) { }

  ngOnInit(): void {
    this.updateProduct = this.formBuilder.group({
      title: [this.product.title, Validators.required],
      id: [this.product.id, Validators.required],
      image: [this.product.image, Validators.required],
      thumbImage: [this.product.thumbImage, [Validators.required, Validators.email]],
      price: [this.product.price, Validators.required],
      sku: [this.product.sku, Validators.required],
      description: [this.product.description, Validators.required],
      allergens: [this.product.allergens, Validators.required],
      isActive: [this.product.isActive, Validators.required]
    })
  }

  onUpdateProduct() {
    this.productsService.updateProduct(this.updateProduct.value)
      .subscribe({
        next: (v) => {
          this.onClose();
        },
        error: (err) => {
          console.log(err);
        }
      })
  }

  onClose() {
    this.close.emit({message : 'close popup'})
  }
}
