import { Component, OnInit } from '@angular/core';
import { Cart } from '../model/cart.model';

@Component({
  selector: 'app-cart-details',
  templateUrl: './cart-details.component.html',
  styleUrls: ['./cart-details.component.scss']
})
export class CartDetailsComponent implements OnInit {
  code:string=null;
  totalprice:number;
  constructor(public cart:Cart) { this.totalprice=this.cart.cartPrice;}
  
  checkPromo(){
    //if code present in promocode checkcode()
    //fetch dicount % x
    //totalprice=totalprice*(x/100);
    //this.cart.cartPrice=totalprice;
  }
  checkActor(){
    if(sessionStorage.getItem("actor")==="member"){
      return true;
    }
    return false;
  }
  checkcode()
{

}  ngOnInit() {
    console.log(sessionStorage.getItem("actor"));
    console.log(this.cart);
  }

}
