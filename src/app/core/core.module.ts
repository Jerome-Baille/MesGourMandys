import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterModule } from '@angular/router';
import { ToastComponent } from './components/toast/toast.component';


@NgModule({
  declarations: [
    LoadingSpinnerComponent,
    HeaderComponent,
    FooterComponent,
    ToastComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FontAwesomeModule
  ],
  exports: [
    FontAwesomeModule,
    LoadingSpinnerComponent,
    HeaderComponent,
    FooterComponent,
    ToastComponent,
  ]
})
export class CoreModule { }
