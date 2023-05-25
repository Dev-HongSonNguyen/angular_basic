import { Component } from '@angular/core';
import { IProduct } from 'src/app/interfaces/Products';
import { ProductService } from 'src/app/service/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent {
  product: IProduct = {
    name: "",
    price: 0,
    img: ""
  }
  constructor(private productService: ProductService, private router: Router ){}
  Create(){
    this.productService.createProduct(this.product).subscribe(()=>{
      alert("Thêm sản phẩm thành công !")
      this.router.navigate([`admin/product`])
    })
  }
}
