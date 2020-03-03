import { Component, OnInit } from '@angular/core';
import { CustomerRepository } from 'src/app/model/customer.repository';
import { Customer } from 'src/app/model/customer.model';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
  password: string="";
  usern: string="";
  constructor(public router:Router) { }
  
  actor: string="";
  submitted: boolean=false
  
  submitLogin(form: NgForm){
    
    this.submitted=true;
    if(form.invalid){
        sessionStorage.setItem("actor",this.actor);
        sessionStorage.setItem("name",this.usern);
        //this.repo.saveCustomer(this.customer)
        if(this.actor==="admin"){
          this.router.navigate(['/admin-index']);
        }else if (this.actor==="customer") {
          this.router.navigate(['/customer-index']);        
        } else {
          this.router.navigate(['/home']);
        }
    }
    console.log(sessionStorage.getItem("actor"));
  }

  ngOnInit() {
  }

}
