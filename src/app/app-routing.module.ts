import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { AdminGuard } from './core/guards/admin.guard';
import { HomeComponent } from './home/home.component';
import { LegalNoticesComponent } from './legal-notices/legal-notices.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductListComponent } from './product-list/product-list.component';
import { TermsAndConditionsComponent } from './terms-and-conditions/terms-and-conditions.component';

const routes: Routes = [
  {
    path: 'accueil',
    component: HomeComponent,
  },
  {
    path: 'boutique',
    component: ProductListComponent,
  },
  {
    path: 'detail/:id',
    component: ProductDetailComponent,
  },
  {
    path: 'panier',
    component: CartComponent,
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule),
    canActivate: [AdminGuard]
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule),
  },
  {
    path: 'mentions-legales',
    component: LegalNoticesComponent
  },
  {
    path: 'CGV',
    component: TermsAndConditionsComponent
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'accueil'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
