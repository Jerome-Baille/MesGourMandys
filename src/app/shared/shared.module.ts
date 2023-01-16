import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UpdateProductComponent } from './components/update-product/update-product.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CoreModule } from '../core/core.module';
import { CardProductComponent } from './components/card-product/card-product.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    UpdateProductComponent,
    CardProductComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    FontAwesomeModule,
    CoreModule,
    RouterModule
  ],
  exports: [
    UpdateProductComponent,
    CardProductComponent
  ]
})
export class SharedModule { }
