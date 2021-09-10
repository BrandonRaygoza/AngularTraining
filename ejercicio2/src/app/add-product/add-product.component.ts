import { Component, OnInit } from '@angular/core';

import {Product} from '../myClasses/product';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  constructor() { }

  products = [];            // Para ir almacenando los productos que se vayan agregando
  productName:string ="";   // Variable que toma el valor del <input> en la vista
  productPrice:number = 0;

  addproduct(): void{
    let product = new Product();

    product.name = this.productName;
    product.price = this.productPrice;
    this.products.push(product);
  }

  onFinishOrder() : void{
    alert("Orden enviada!");
    this.products.length = 0;
  }

  ngOnInit(): void {
    console.log("add-product component initialized");
  }

}
