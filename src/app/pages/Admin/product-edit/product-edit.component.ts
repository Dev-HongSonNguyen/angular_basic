import { Component, Output, EventEmitter } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Validators } from '@angular/forms';
import { IProduct } from 'src/app/interfaces/Products';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent {
  product: IProduct = {
    name: "",
    price: 0,
    img: ""
  }
  productForm = this.formBuilder.group({
    name: ['', [Validators.required, Validators.minLength(4)]],
    price: [0],
    img: ['']
  })
  constructor(private productService: ProductService, private router:Router, private route: ActivatedRoute , private formBuilder: FormBuilder){
    this.route.paramMap.subscribe((param)=>{
      const id = Number(param.get('id'))
      this.productService.getOneProductData(id).subscribe((product)=>{
        this.product = product
        this.productForm.patchValue({
          name: product.name,
          price: product.price,
          img: product.img
        })
      })
    })
  }
  Edit(){
    if(this.productForm.invalid){
      return
    }
    const product: IProduct={
      id: this.product.id,
      name: this.productForm.value.name || 'not found',
      price: this.productForm.value.price || 0,
      img: this.productForm.value.img || 'not found',
    }
    this.productService.editProduct(product).subscribe((data)=>{
      this.product = data
      alert("edit thanh cong")
      this.router.navigate([ `admin/product`]) 
    })
  }
}
