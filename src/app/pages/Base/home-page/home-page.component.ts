import { Component } from '@angular/core';
import { IProduct } from 'src/app/interfaces/Products';
import { ProductService } from 'src/app/service/product.service'; 
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {
  product: any;
  constructor(private productService: ProductService){}
  ngOnInit(){
    this.productService.getProductData().subscribe((data)=>{
      this.product = data;
    })
  }
}
