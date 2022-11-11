import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductsService } from 'src/app/core/services/products.service';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.scss']
})
export class AddItemComponent implements OnInit {
  addItem!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private productsService: ProductsService
  ) { }

  ngOnInit(): void {
    this.addItem = this.formBuilder.group({
      title: [null, Validators.required],
      id: [null, Validators.required],
      image: [null, Validators.required],
      thumbImage: [null, [Validators.required, Validators.email]],
      price: [null, Validators.required],
      sku: [null, Validators.required],
      description: [null, Validators.required],
      allergens: [null, Validators.required],
      isActive: [true, Validators.required]
    })
  }

  onCreateItem() {
    const { title, image, thumbImage, price, sku, description, allergens } = this.addItem.value;

    // create a slug from the title
    const id = title.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/&/g, 'and').replace(/ - /g, '-').replace(/ /g, '-').replace(/[^\w-]+/g, '');

    this.productsService.createProduct(title, id, image, thumbImage, price, sku, description, allergens)
      .subscribe({
        next: (v) => {
          console.log(v);

          this.addItem.reset();
        },
        error: (err) => {
          console.log(err);
        },
        complete: () => {
          console.log('complete');
        }
      })
  }

}
