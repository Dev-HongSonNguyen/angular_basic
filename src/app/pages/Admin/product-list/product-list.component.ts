import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IProduct } from 'src/app/interfaces/Products';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  productData: any;
  // inject dữ liệu trong component service sang
  constructor(private productService: ProductService){}
  ngOnInit(){
    this.productService.getProductData().subscribe((data)=> {
      this.productData = data;
    }
    )
  }
  // Xoa san pham
  Delete(id: number){
    if(confirm("Bạn có chắc chắn muốn xóa !")){
      this.productService.deleteProduct(id).subscribe(()=>{
        this.productData = this.productData.filter((item: any)=> item.id !== id)
      })
    }
  }
}
