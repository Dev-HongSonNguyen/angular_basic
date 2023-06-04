import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BaseLayoutComponent } from './layout/base-layout/base-layout.component';
import { AdminLayoutComponent } from './layout/admin-layout/admin-layout.component';
import { AboutPageComponent } from './pages/Base/about-page/about-page.component';
import { HomePageComponent } from './pages/Base/home-page/home-page.component';
import { ProductPageComponent } from './pages/Base/product-page/product-page.component';
import { ContactPageComponent } from './pages/Base/contact-page/contact-page.component';
import { DashboardPageComponent } from './pages/Admin/dashboard-page/dashboard-page.component';
import { ProductCreateComponent } from './pages/Admin/product-create/product-create.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductDetailComponent } from './pages/Base/product-detail/product-detail.component';
import { ProductEditComponent } from './pages/Admin/product-edit/product-edit.component';
import { ProductListComponent } from './pages/Admin/product-list/product-list.component';

@NgModule({
  declarations: [
    AppComponent,
    BaseLayoutComponent,
    AdminLayoutComponent,
    AboutPageComponent,
    HomePageComponent,
    ProductPageComponent,
    ContactPageComponent,
    DashboardPageComponent,
    ProductDetailComponent,
    ProductCreateComponent,
    ProductEditComponent,
    ProductListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
