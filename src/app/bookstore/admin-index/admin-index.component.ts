import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-admin-index',
  templateUrl: './admin-index.component.html',
  styleUrls: ['./admin-index.component.scss']
})
export class AdminIndexComponent implements OnInit {

  private currentUser: string = null;
  constructor(public router: Router) {
    this.currentUser = sessionStorage.getItem("name")
  }
  //page modifications
  promocodeactive: boolean=false;
  editbookactive: boolean=false;
  addbookactive: boolean=false;
  message:string="";

  //form3

  promocode:string;
  per: number;
  submitAddpromo(f:NgForm){

  }
  //form4

  bookeid:number;
  newbookquantity:number;
  submitEditBook(ff:NgForm){

  }
  //form5

  newbookname:string;
  newbookauthor:string;
  newbookprice:number;
  addnewbookquantity:number;
  submitAddbook(fff:NgForm){

  }
  addbookss(){
    this.promocodeactive=false;
    this.editbookactive=false;
    this.addbookactive=true;
    //console.log("add books")
  }
  editbookss(){
    this.promocodeactive=false;
    this.addbookactive=false;
    this.editbookactive=true;
    //console.log("edit books")
  }
  addpromocode(){
    
    this.addbookactive=false;
    this.editbookactive=false;
    this.promocodeactive=true;
    //console.log("add PC")
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
   }, 10000);
  }

}
