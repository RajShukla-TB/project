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
  
  actor: string="";
  submitted: boolean=false
  
  // submitLogin(form: NgForm){
    
  //   this.submitted=true;
  //   if(form.invalid){
  //       sessionStorage.setItem("actor",this.actor);
  //       sessionStorage.setItem("name",this.usern);
  //       //this.repo.saveCustomer(this.customer)
  //       if(this.actor==="admin"){
  //         this.router.navigate(['/admin-index']);
  //       }else if (this.actor==="customer") {
  //         this.router.navigate(['/customer-index']);        
  //       } else {
  //         this.router.navigate(['/home']);
  //       }
  //   }
  //   console.log(sessionStorage.getItem("actor"));
  // }
  public check1:String;
  public check:String;
  msg:string="";
  constructor(public repo: CustomerRepository,public customer: Customer,private router : Router){}
  submitLogin(f:NgForm){
    if(f.valid){
      if(this.repo.getByCustomerUsername(this.customer.username)!=undefined){
        console.log("Yay!!");
        this.check1 = (this.repo.getByCustomerUsername(this.customer.username)).actor;

        this.check = (this.repo.getByCustomerUsername(this.customer.username)).password;  
        console.log(this.repo.getByCustomerUsername(this.customer.username));
        
        if(this.check === this.customer.password){
          
          sessionStorage.setItem("name",this.customer.username);
          if(this.check1===this.customer.actor){
            if(this.customer.actor === "admin"){
              sessionStorage.setItem("actor","admin");
              this.router.navigate(['/admin-index']);
            }
            else if (this.customer.actor==="customer"||this.customer.actor==="member"){
              sessionStorage.setItem("actor",this.customer.actor);
              this.router.navigate(['/customer-index']);
            }
          }else{
            alert("Role is not valid !!");
          }
          }else{
            this.msg="Please enter valid credentials!!"
          }
      }
      else{ 
        this.msg="Please enter valid credentials!!"
      }
   }
   console.log(sessionStorage.getItem("actor"));
  }

  ngOnInit() {
  }

}
