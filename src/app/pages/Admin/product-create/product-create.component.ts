import { Component } from '@angular/core';
import { IProduct } from 'src/app/interfaces/Products';
import { ProductService } from 'src/app/service/product.service';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent {
  productForm = this.formBuilder.group({
    name: ['', [Validators.required, Validators.minLength(4)]],
    price: [0],
    img: ['']
  })
  constructor(private productService: ProductService, private router: Router, private formBuilder: FormBuilder ){}
  Create(){
   if(this.productForm.invalid){
    return;
   }
   const product: IProduct={
    name: this.productForm.value.name || '',
    price: this.productForm.value.price || 0,
    img: this.productForm.value.img || ''
   }
   this.productService.createProduct(product).subscribe(()=>{
    alert("them thanh cong")
    this.router.navigate(["admin/product"])
   })
  }
}
