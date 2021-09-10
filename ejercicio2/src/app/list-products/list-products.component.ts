import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Product} from '../myClasses/product';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent implements OnInit {

  constructor() { }

  @Input() products: Product[];
  @Output() finishOrderEvent = new EventEmitter();

  getTotal(){

    let total = 0;
    for(let product of this.products){
      total+= product.price;
    }

    return total;
  }

  ngOnInit(): void {
    console.log("list-products component initialized");
  }

}
