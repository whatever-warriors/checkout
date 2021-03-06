// libraries
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select'

// main
import { AppComponent } from './app.component';
import { HeaderComponent } from './common/header/header.component';
import { LandingComponent } from './landing/landing.component';
import { FooterComponent } from './common/footer/footer.component';

// cart
import { CartComponent } from './landing/cart/cart.component';
import { CartListComponent } from './landing/cart/cart-list/cart-list.component';
import { CartItemComponent } from './landing/cart/cart-list/cart-item/cart-item.component';

// menu
import { MenuComponent } from './landing/menu/menu.component';
import { MenuListComponent } from './landing/menu/menu-list/menu-list.component';
import { MenuItemComponent } from './landing/menu/menu-list/menu-item/menu-item.component';
import { MenuEditComponent } from './landing/menu/menu-edit/menu-edit.component';
import { MenuEditItemComponent } from './landing/menu/menu-edit/menu-edit-item/menu-edit-item.component';

// admin
import { AdminComponent } from './admin/admin.component';
import { AdminDetailComponent } from './admin/admin-detail/admin-detail.component';
import { AdminEditComponent } from './admin/admin-edit/admin-edit.component';

// orders
import { OrderQueueComponent } from './landing/order-queue/order-queue.component';
import { OrderItemComponent } from './landing/order-queue/order-item/order-item.component';
import { OrderHistoryComponent } from './landing/order-history/order-history.component';
import { OrderHistoryItemComponent } from './landing/order-history/order-history-item/order-history-item.component';

// services
import { CartService } from './landing/cart/cart.service';
import { MenuService } from './landing/menu/menu.service';
import { AdminService } from './admin/admin.service';

// pipes
import { CartFilterPipe } from './landing/order-history/order-filter.pipe';

// Login, user, settings
import { UserComponent } from './user/user.component';
import { LoginComponent } from './user/login/login.component';
import { SignupComponent } from './user/signup/signup.component';

// Menu settings/admin
import { MenuAdminComponent } from './admin/menu-admin/menu-admin.component';
import { MenuAdminEditComponent } from './admin/menu-admin/menu-admin-edit/menu-admin-edit.component';
import { MenuAdminStartComponent } from './admin/menu-admin/menu-admin-start/menu-admin-start.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LandingComponent,
    CartComponent,
    CartListComponent,
    CartItemComponent,
    MenuComponent,
    MenuListComponent,
    MenuItemComponent,
    AdminComponent,
    AdminDetailComponent,
    AdminEditComponent,
    MenuEditComponent,
    MenuEditItemComponent,
    OrderQueueComponent,
    OrderItemComponent,
    OrderHistoryComponent,
    OrderHistoryItemComponent,
    CartFilterPipe,
    UserComponent,
    FooterComponent,
    LoginComponent,
    SignupComponent,
    MenuAdminComponent,
    MenuAdminEditComponent,
    MenuAdminStartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    MatSelectModule
  ],
  providers: [CartService, MenuService, AdminService],
  bootstrap: [AppComponent]
})
export class AppModule { }
