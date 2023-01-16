import { Component, OnInit } from '@angular/core';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { Observable } from 'rxjs';
import { Products } from '../core/models/products';
import { ProductsService } from '../core/services/products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  faInstagram = faInstagram;
  highlight$!: Observable<Products[]>;
  popular$!: Observable<Products[]>;
  isLoaded: boolean = false;

  constructor(
    private productsService: ProductsService
  ) { }

  ngOnInit(): void {
    this.highlight$ = this.productsService.getProducts('highlight=true');
    this.popular$ = this.productsService.getProducts('popular=true');

    // return true when page is fully loaded
    window.onload = () => {
        this.isLoaded = true;
    }

    this.isLoaded = true;
  }

  onLoad(event: any) {
    console.log(event);
  }
}
