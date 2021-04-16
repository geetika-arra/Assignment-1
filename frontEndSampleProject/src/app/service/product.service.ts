import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product, ProductList } from '../product/product.component';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }

  retrieveAllProducts(){
    return this.http.get<ProductList>(`http://localhost:8081/Products`);
  }
}
