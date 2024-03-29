import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductListComponent } from './product-list/product-list.component';
import { LegalNoticesComponent } from './legal-notices/legal-notices.component';
import { TermsAndConditionsComponent } from './terms-and-conditions/terms-and-conditions.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CartComponent } from './cart/cart.component';
import { ContactService } from './core/services/contact.service';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OrderConfirmationComponent } from './order-confirmation/order-confirmation.component';

import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import { AuthInterceptor } from './interceptors/auth.interceptor';
registerLocaleData(localeFr);


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductDetailComponent,
    ProductListComponent,
    LegalNoticesComponent,
    TermsAndConditionsComponent,
    CartComponent,
    OrderConfirmationComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    CoreModule,
    SharedModule
  ],
  providers: [
    ContactService,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    {
      provide: LOCALE_ID,
      useValue: 'fr-FR'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
