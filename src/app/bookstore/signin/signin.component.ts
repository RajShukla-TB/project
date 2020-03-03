import { Component, OnInit } from '@angular/core';
import { CustomerRepository } from '../../model/customer.repository';
import { Customer } from '../../model/customer.model';
import { NgForm } from '@angular/forms'
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit{
  ngOnInit(){
   
  }
  
  rpassword: string="";

  constructor(public repo: CustomerRepository,public customer: Customer,public router:Router) { }
  
  actor: string="";
  submitted: boolean=false
  
  submitCustomer(form: NgForm){
    this.submitted=true;
    if(form.valid){
      console.log(this.customer);
      this.repo.saveCustomer(this.customer)
      this.repo.getCustomer();
      this.router.navigate(["/login"]);
    }
  }
}
