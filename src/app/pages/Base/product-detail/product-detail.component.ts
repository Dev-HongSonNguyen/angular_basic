import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from 'src/app/interfaces/Products';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent {
  product: IProduct = {
    name: "",
    price: 0,
    img: ""
  }
  constructor(private productService: ProductService, private route: ActivatedRoute) {
    this.route.paramMap.subscribe((param)=>{
      const id = Number(param.get('id'))
      this.productService.getOneProductData(id).subscribe((product)=>{
        this.product = product
      })
    })
  }
  
  
  // const product = this.productService.getOneProductData(id)
}
