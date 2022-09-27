import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { NavComponent } from './nav/nav.component';
import { SearchComponent } from './search/search.component';
import { CardsComponent } from './cards/cards.component';
import { WomenComponent } from './women/women.component';
import { CounterComponent } from './counter/counter.component';
import { CounterchildComponent } from './counter/counterchild/counterchild.component';
import { RegisterComponent } from './register/register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ContactComponent } from './contact/contact.component';
import { MenComponent } from './men/men.component';
import { KidsComponent } from './kids/kids.component';
import { ProductsComponent } from './products/products.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { HttpClientModule} from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { CartItemsComponent } from './cart-items/cart-items.component';
import { DealsComponent } from './deals/deals.component';
import { AmazondealsComponent } from './deals/amazondeals/amazondeals.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    NavComponent,
    SearchComponent,
    CardsComponent,
    ProductsComponent,
    WomenComponent,
    CounterComponent,
    CounterchildComponent,
    RegisterComponent,
    ContactComponent,
    MenComponent,
    KidsComponent,
    ProductDetailsComponent,
    LoginComponent,
    CartItemsComponent,
    DealsComponent,
    AmazondealsComponent
    
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
