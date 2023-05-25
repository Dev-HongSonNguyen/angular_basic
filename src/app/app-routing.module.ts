import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BaseLayoutComponent } from './layout/base-layout/base-layout.component';
import { AdminLayoutComponent } from './layout/admin-layout/admin-layout.component';
import { AboutPageComponent } from './pages/Base/about-page/about-page.component';
import { HomePageComponent } from './pages/Base/home-page/home-page.component';
import { ProductPageComponent } from './pages/Base/product-page/product-page.component';
import { ContactPageComponent } from './pages/Base/contact-page/contact-page.component';
import { DashboardPageComponent } from './pages/Admin/dashboard-page/dashboard-page.component';;
import { ProductCreateComponent } from './pages/Admin/product-create/product-create.component';
import { ProductDetailComponent } from './pages/Base/product-detail/product-detail.component';
import { ProductListComponent } from './pages/Admin/product-list/product-list.component';
import { ProductEditComponent } from './pages/Admin/product-edit/product-edit.component';

const routes: Routes = [
  {
    path: '',
    component: BaseLayoutComponent,
    children: [
      {
        path: '',
        component: HomePageComponent,
      },
      {
        path: 'about',
        component: AboutPageComponent,
      },
      {
        path: 'product',
        component: ProductPageComponent,
      },
      {
        path: "product/:id", component: ProductDetailComponent
      },
      {
        path: "contact", component: ContactPageComponent
      }
    ],
  },
  { path: 'admin', component: AdminLayoutComponent, children:[
    {
      path: "", redirectTo: "dashboard", pathMatch: "full"
    },
    {
      path: "dashboard", component: DashboardPageComponent
    },
    {
      path: "product", component: ProductListComponent
    },
    {
      path: "product/add", component: ProductCreateComponent
    },
    {
      path: "product/edit/:id", component: ProductEditComponent
    }
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
