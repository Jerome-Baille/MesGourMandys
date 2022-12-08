import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterModule } from '@angular/router';
import { AlertMessageComponent } from './components/alert-message/alert-message.component';
import { ToastComponent } from './components/toast/toast.component';


@NgModule({
  declarations: [
    LoadingSpinnerComponent,
    HeaderComponent,
    FooterComponent,
    AlertMessageComponent,
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
    AlertMessageComponent,
    ToastComponent,
  ]
})
export class CoreModule { }
