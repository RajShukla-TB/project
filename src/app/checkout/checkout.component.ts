import { Component, OnInit } from '@angular/core';
import { OrderRepository } from '../model/order.repository';
import { Order } from '../model/order.model';
import { Cart } from '../model/cart.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  constructor(public repo: OrderRepository,public order: Order,public cart: Cart) { }
  orederSent: boolean=false;
  submitted: boolean=false;
  ngOnInit() {
  }
  submitOrder(form: NgForm){
    this.submitted=true;
    if(form.valid){
      this.repo.saveOrder(this.order).subscribe(order=>{
        this.order.clear();
        this.submitted=false;
        this.orederSent=true;
        //this.cart.clear();
      });
    }
}
}
