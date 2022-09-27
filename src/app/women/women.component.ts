import { Component, OnInit } from '@angular/core';
import * as women from "../data/women.json";

@Component({
  selector: 'app-women',
  templateUrl: './women.component.html',
  styleUrls: ['./women.component.css']
})
export class WomenComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  women:any=(women as any).default;
  productDetail=false;
  showproductDetailsToggle(){
    this.productDetail=!this.productDetail;
  }
  toggleContent(){
    var content='';
    if(this.productDetail){
      content='fa-solid fa-arrow-down';
    }
    else{
      content='fa-solid fa-arrow-up';
    }
    return content;
  }
}
