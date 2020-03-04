import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { BookRepository } from 'src/app/model/book.repository';
import { Book } from 'src/app/model/book.model';
import { Promotion } from 'src/app/model/promotion.model';
import { PromotionRepository } from 'src/app/model/promotion.repository';

@Component({
  selector: 'app-admin-index',
  templateUrl: './admin-index.component.html',
  styleUrls: ['./admin-index.component.scss']
})
export class AdminIndexComponent implements OnInit {

  private currentUser: string = null;
  constructor(public router: Router, public bookRepository : BookRepository, public book : Book,
    public promo : Promotion, public promorepository: PromotionRepository ) {
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
    if(f.valid){
      console.log("P");
      console.log(this.promo.pid);
      this.promorepository.savePromotion(this.promo).subscribe(data => {
        console.log("K");
      });
    }
  }
  //form4

  bookeid:number;
  newbookquantity:number;
  submitEditBook(ff:NgForm){
    if(ff.valid){
      this.bookRepository.editBooks(this.book).subscribe(data => {
          console.log("O");
      });
    }
  }
  //form5

  newbookname:string;
  newbookauthor:string;
  newbookprice:number;
  addnewbookquantity:number;
  submitAddbook(fff:NgForm){

    if(fff.valid){
      
      this.bookRepository.saveBooks(this.book).subscribe(data =>{
        this.addbookactive=false;
        console.log("ok");
      });
      console.log(this.book);
    }

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
