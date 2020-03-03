import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-customer-index',
  templateUrl: './customer-index.component.html',
  styleUrls: ['./customer-index.component.scss']
})
export class CustomerIndexComponent implements OnInit {

  private currentUser: string = null;
  constructor(public router: Router) {
    this.currentUser = sessionStorage.getItem("name")
  }
  logout(){
    sessionStorage.removeItem("name");
    sessionStorage.removeItem("actor");
    this.router.navigate(["/home"]);
  }

  ngOnInit() {
    console.log(sessionStorage.getItem("actor"));
    setTimeout (() => {
      this.logout();
   }, 60000);
  }



}
