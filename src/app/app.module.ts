import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { Approutes } from './app-routing.module';
import { AppComponent } from './app.component';
import { SpinnerComponent } from './shared/spinner/spinner.component';
import { FormViewComponent } from './provider/form-view/form-view.component';
import { FormViewListComponent } from './provider/form-view-list/form-view-list.component';
import { TableViewComponent } from './provider/table/table-view/table-view.component';
import { TablePaginationComponent } from './provider/table/table-pagination/table-pagination.component';
import { HttpRequestComponent } from './provider/http-request/http-request.component';
import { LoginComponent } from './components/login/login.component';
import { AlertComponent } from './auth/directives/alert.component';
import { AuthGuard } from './auth/guards';
import { JwtInterceptor, ErrorInterceptor } from './auth/helpers';
import { AlertService } from './auth/services/alert.service';
import { AuthenticationService } from './auth/services/authentication.service';
import { CustomerService } from './auth/services/customer.service';
import { HomeComponent } from './components/home/home.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { GreensModuleComponent } from './components/greens-module/greens-module.component';
import { ChoppiesModuleComponent } from './components/choppies-module/choppies-module.component';
import { SparModuleComponent } from './components/spar-module/spar-module.component';
import { OkModuleComponent } from './components/ok-module/ok-module.component';
import { GreensHomeComponent } from './components/greens-module/greens-home/greens-home.component';
import { GreensComponent } from './components/greens-module/greens/greens.component';
import { CartComponent } from './components/cart/cart.component';
import { ProductCommodityComponent } from './components/product-commodity/product-commodity.component';
import { GettingStartedComponent } from './components/getting-started/getting-started.component';
import { TableViewSubComponent } from './provider/table/table-view-sub/table-view-sub.component';
import { NavigationComponent } from './shared/header-navigation/navigation.component';
import { NavigationComponent2 } from './shared/header-navigation/navigation2.component';
import { PickNPayModuleComponent } from './components/pick-n-pay-module/pick-n-pay-module.component';
import { ShopsModuleHeaderComponent } from './components/shops-module-header/shops-module-header.component';
import { ChoppiesHomeComponent } from './components/choppies-module/choppies-home/choppies-home.component';
import { OkHomeComponent } from './components/ok-module/ok-home/ok-home.component';
import { SparHomeComponent } from './components/spar-module/spar-home/spar-home.component';
import { PickNPayHomeComponent } from './components/pick-n-pay-module/pick-n-pay-home/pick-n-pay-home.component';
import { CartViewComponent } from './provider/cart-view/cart-view.component';
import { CartV2Component } from './components/cart/cart-v2/cart-v2.component';
import { PaymentMethodComponent } from './components/payment-method/payment-method.component';
import { PaymentDetailsComponent } from './components/payment-details/payment-details.component';
import { LoginV2Component } from './components/login-v2/login-v2.component';
import { FullComponent } from './components/full/full.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { ActorNestedComponent } from './components/trial/actor-nested/actor-nested.component';
import { CartWithFormulaImpComponent } from './components/cart-with-formula-imp/cart-with-formula-imp.component';
import { TransactionSuccessfulComponent } from './components/transaction-successful/transaction-successful.component';


const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true,
  wheelSpeed: 2,
  wheelPropagation: true
};

@NgModule({
  declarations: [
    AppComponent,
    SpinnerComponent,
    FormViewComponent,
    FormViewListComponent,
    TableViewComponent,
    TablePaginationComponent,
    HttpRequestComponent,
    LoginComponent,
    AlertComponent,
    HomeComponent,
    AboutUsComponent,
    ContactUsComponent,
    GreensModuleComponent,
    ChoppiesModuleComponent,
    SparModuleComponent,
    OkModuleComponent,
    GreensHomeComponent,
    GreensComponent,
    CartComponent,
    ProductCommodityComponent,
    GettingStartedComponent,
    TableViewSubComponent,
    NavigationComponent,
    NavigationComponent2,
    PickNPayModuleComponent,
    ShopsModuleHeaderComponent,
    ChoppiesHomeComponent,
    OkHomeComponent,
    SparHomeComponent,
    PickNPayHomeComponent,
    CartViewComponent,
    CartV2Component,
    PaymentMethodComponent,
    PaymentDetailsComponent,
    LoginV2Component,
    FullComponent,
    SidebarComponent,
    ActorNestedComponent,
    CartWithFormulaImpComponent,
    TransactionSuccessfulComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MDBBootstrapModule.forRoot(),
    NgbModule.forRoot(),
    RouterModule.forRoot(Approutes),
    PerfectScrollbarModule
  ],
  providers: [
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG,
    },
    HttpRequestComponent,
    CartComponent,
    HttpClientModule,
    AuthGuard,
    AlertService,
    AuthenticationService,
    CustomerService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
