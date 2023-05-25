import { Component } from '@angular/core';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent {
  productData: any;
  // inject dữ liệu trong component service sang
  constructor(private productService: ProductService){}
  ngOnInit(){
    this.productService.getProductData().subscribe((data)=> {
      this.productData = data;
    }
    )
  }
}
