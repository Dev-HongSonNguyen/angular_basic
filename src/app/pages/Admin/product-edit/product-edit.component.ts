import { Component, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from 'src/app/interfaces/Products';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent {
  product: IProduct = {
    id: Number(this.route.snapshot.paramMap.get('id')),
    name: "",
    price: 0,
    img: ""
  }
  constructor(private productService: ProductService, private router:Router, private route: ActivatedRoute){
    this.route.paramMap.subscribe((param)=>{
      const id = Number(param.get('id'))
      this.productService.getOneProductData(id).subscribe((product)=>{
        this.product = product;
      })
    })
  }
  Edit(){
    this.productService.editProduct(this.product).subscribe((data)=> {
      this.product = data
    })
      alert("Cập nhật sản phẩm thành công")
       this.router.navigate([`admin/product`])
  }
}
