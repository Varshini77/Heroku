import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//importing various compenets that you have created for navigation purpose
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { CardsComponent } from './cards/cards.component';
import { ProductsComponent } from './products/products.component';
import { WomenComponent } from './women/women.component';
import { RegisterComponent } from './register/register.component';
import { ContactComponent } from './contact/contact.component';
import { MenComponent } from './men/men.component';
import {KidsComponent } from './kids/kids.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { LoginComponent } from './login/login.component';

import { CartItemsComponent } from './cart-items/cart-items.component';
import { AmazondealsComponent } from './deals/amazondeals/amazondeals.component';





const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'cards',component:CardsComponent},
  {path:'products',component:ProductsComponent},
  {path:'women',component:WomenComponent},
  {path:'register', component:RegisterComponent},
  {path: 'contact', component: ContactComponent},
  {path:'men', component:MenComponent},
  {path:'kids', component:KidsComponent},
  { path:'product-details', component:ProductDetailsComponent},
  { path:'login',component:LoginComponent},
  { path:'cartitem',component:CartItemsComponent},
  {path:'deals',component:AmazondealsComponent}
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
