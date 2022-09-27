import { Component, OnInit } from '@angular/core';
import * as men from "../data/men.json";

@Component({
  selector: 'app-men',
  templateUrl: './men.component.html',
  styleUrls: ['./men.component.css']
})
export class MenComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  men:any=(men as any).default;
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
