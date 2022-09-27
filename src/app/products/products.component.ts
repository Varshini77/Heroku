import { Component, OnInit } from '@angular/core';
import * as products from '../data/products.json';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
 

  constructor() { }

  ngOnInit(): void {
   

}
product:any = (products as any).default;
}
