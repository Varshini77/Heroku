import { Component, OnInit } from '@angular/core';
import { getLocaleDateFormat } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }
  
  

  //Array for style binding with ternary operator with ngSwitch

  ProductDetails = [
    {
      "pid": "100",
      "pname": "Kids Toys",
      "status": "Active",
      "color": "green"
    },
    {
      "pid": "101",
      "pname": "Headphones",
      "status": "InActive",
      "color": "red"
    },
    {
      "pid": "102",
      "pname": "Kids Dress",
      "status": "Out of Stock",
      "color": "yellow"
    },
    {
      "pid": "103",
      "pname": "Kids Books",
      "status": "Active",
      "color": "green"
    },
    {
      "pid": "104",
      "pname": "Kids Crayons",
      "status": "InActive",
      "color": "red"
    },
    {
      "pid": "105",
      "pname": "Footwear",
      "status": "Active",
      "color": "green"
    },
    {
      "pid": "106",
      "pname": "Laptop",
      "status": "Out of Stock",
      "color": "yellow"
    }
  ]
  name = "John"
  
  mycolor = 'red';
 
  Products: any[] = [
    {
      "productname": "Belt"
    },
    {
      "productname": "lether"
    },
    {
      "productname": "Chain"
    },
    {
      "productname": "digital"
    },
    {
      "productname": "Watch"
    }
  

  ]
  //Event to hide Products
  isVisible: boolean = true;
  hide_products() {
    this.isVisible = !this.isVisible;
  }
  //*ngSwitch
  product = 'Laptop'

  //property errorcolor for style binding using ternary operator
  errorcolor: string = 'red'



  ngOnInit(): void {
  }

}
