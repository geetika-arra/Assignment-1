import { Component, OnInit } from '@angular/core';
import { ProductService } from '../service/product.service';

export class Product{
  constructor(
    public _id:string,
    public id :string,
    public name:string
  ){}
    
}
export class ProductList{
  constructor(
    public products:Product []
  ){}  
}
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})

export class ProductComponent implements OnInit {
  
  products:any=[];
  productList:ProductList;
  constructor(private service:ProductService) { 
    console.log('Inside Constructor');
  }

  ngOnInit(): void {
    console.log("Inside init");
    this.service.retrieveAllProducts().subscribe(data=>{this.productList=data;});
  }

}
