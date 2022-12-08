import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AdminRoutingModule } from './admin-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AddItemComponent } from './components/add-item/add-item.component';
import { GetItemsComponent } from './components/get-items/get-items.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SharedModule } from '../shared/shared.module';
import { CoreModule } from '../core/core.module';
import { OrdersListComponent } from './components/orders-list/orders-list.component';
import { UsersListComponent } from './components/users-list/users-list.component';
import { AuthModule } from '../auth/auth.module';

@NgModule({
  declarations: [
    DashboardComponent,
    AddItemComponent,
    GetItemsComponent,
    OrdersListComponent,
    UsersListComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    FontAwesomeModule,
    CoreModule,
    SharedModule,
    AuthModule
  ],
  exports: [
    DashboardComponent
  ]
})
export class AdminModule { }
