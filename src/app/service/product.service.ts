import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IProduct } from '../interfaces/Products';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private http: HttpClient) { }
  getOneProductData(id: number): Observable<IProduct>{
    return this.http.get<IProduct>(`http://localhost:3000/products/${id}`)
  }
  getProductData(): Observable<IProduct[]>{
    return this.http.get<IProduct[]>("http://localhost:3000/products");
  }
  deleteProduct(id: number): Observable<any>{
    return this.http.delete(`http://localhost:3000/products/${id}`);
  }
  createProduct(product: IProduct): Observable<any>{
    return this.http.post("http://localhost:3000/products", product)
  }
  editProduct(product: IProduct): Observable<any>{
    return this.http.put(`http://localhost:3000/products/${product.id}`, product)
  }
}
