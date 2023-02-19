import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductsService } from 'src/app/core/services/products.service';
import { ToastService } from 'src/app/core/services/toast.service';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.scss']
})
export class AddItemComponent implements OnInit {
  addItem!: FormGroup;

  @Output() newProduct : EventEmitter<any> =  new EventEmitter();

  constructor(
    private formBuilder: FormBuilder,
    private productsService: ProductsService,
    private toast: ToastService
  ) { }

  ngOnInit(): void {
    this.addItem = this.formBuilder.group({
      title: [null, Validators.required],
      id: [null, Validators.required],
      image: [null, Validators.required],
      // thumbImage: [null, [Validators.required, Validators.email]],
      price: [null, Validators.required],
      sku: [null, Validators.required],
      description: [null, Validators.required],
      allergens: [null, Validators.required],
      isActive: [true, Validators.required]
    })
  }

  onCreateItem() {
    const { title, price, sku, description, allergens, isActive } = this.addItem.value;
    var image = this.addItem.get('image')!.value;

    let skuUpper = sku.toUpperCase();

    // if price contains a comma, replace it with a dot
    if(price.includes(',')){
      price.replace(',', '.');
    }

    // create a slug from the title
    const id = title.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/&/g, 'and').replace(/ - /g, '-').replace(/ /g, '-').replace(/[^\w-]+/g, '');

    this.productsService.createProduct(title, id, image, price, skuUpper, description, allergens, isActive)
      .subscribe({
        next: (v: any) => {
          this.toast.initiate({
            title: 'Success',
            message: v.message,
          })

          this.newProduct.emit({message: "refresh"});
          // in local storage, add product to the key "produits"
          // if(localStorage.getItem('produits')){
          //   let products = JSON.parse(localStorage.getItem('produits')!);
          //   products.push(v.product);
          //   localStorage.setItem('produits', JSON.stringify(products));
          // } else {
          //   localStorage.setItem('produits', JSON.stringify([v.product]));
          // }

          this.addItem.reset({
            isActive: true,
          });
        },
        error: (err) => {
          this.toast.initiate({
            title: 'Erreur',
            message: err.message,
          })
        }
      })
  }

  imageSelected(event: any) {
    const target = event.target.files[0];
    this.addItem.get('image')!.setValue(target);
    this.addItem.updateValueAndValidity();
    const reader = new FileReader();
    reader.readAsDataURL(target);
  }
}
