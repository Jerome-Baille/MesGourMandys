import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/core/services/products.service';
import { ContactService } from 'src/app/core/services/contact.service';
import { faPowerOff } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  addItemBoolean : boolean = false;
  getItemsBoolean : boolean = true;
  getOrdersBoolean: boolean = false;

  navBarTab: string = 'get items';

  products!: any;
  orders!: any;
  favsCount: number = 0;

  faPowerOff = faPowerOff;

  constructor( 
    private productsService: ProductsService,
    private contactService: ContactService,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
      this.productsService.getProducts(null)
      .subscribe({
        next: (v) => {
          this.products = v;

          this.products.forEach((p: any) => {
            if (p.popular === true) {
              this.favsCount++;
            }
          })
        }
      })
  }

  navBarClick(src: string){
    if(src === 'get orders'){
      this.contactService.getAllOrders()
      .subscribe({
        next: (v) => {
          this.orders = v;
        }
      })
    }

    this.navBarTab = src;
  }

  onLogout(){
    this.authService.logout();
  }

  triggerRefresh(eventData: any){
    if(eventData.message === 'refresh'){
      this.productsService.getProducts(null)
      .subscribe({
        next: (v) => {
          this.products = v;
        }
      })
    }
  }
}