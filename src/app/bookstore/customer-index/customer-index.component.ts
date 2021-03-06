import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Book } from 'src/app/model/book.model';
import { BookRepository } from 'src/app/model/book.repository';
import { Cart } from 'src/app/model/cart.model';

@Component({
  selector: 'app-customer-index',
  templateUrl: './customer-index.component.html',
  styleUrls: ['./customer-index.component.scss']
})
export class CustomerIndexComponent implements OnInit {

  private currentUser: string = null;
  chalo:string="";
  time:number=5000000;
  constructor(public router: Router,private repository: BookRepository,private cart: Cart) {
    this.currentUser = sessionStorage.getItem("name")
  }
  lessthan(m:number):boolean{
    if(m<=3){
      return true;
    }
    return false;
  }


  get Books() : Book[]{
    return this.repository.getBooks();
  }

  public selectedCategory= null;

  public productsPerPage=3;
  public selectedPage=1;
  get products(): Book[]{
      let pageIndex=(this.selectedPage-1)*this.productsPerPage;
      return this.repository.getBooks().slice(pageIndex,pageIndex+this.productsPerPage);
  }
  changePage(newPage: number){
      this.selectedPage=newPage;
  }
  changePageSize(newSize: Number){
      this.productsPerPage=Number(newSize);
      this.selectedPage=1;
  }
  get PageNumbers():number[]{
      return Array(Math.ceil(this.repository.getBooks().length/this.productsPerPage)).fill(0).map((x,i)=>i+1);
  }

  addProductToCart(book: Book){
      this.cart.addLine(book);
  }
  logout(){
    this.cart.clear();
    sessionStorage.removeItem("name");
    sessionStorage.removeItem("actor");
    this.router.navigate(["/home"]);
  }

  ngOnInit() {
    if(sessionStorage.getItem("actor")==="member"){
      this.chalo="(MEMBER)";
    }
    console.log(sessionStorage.getItem("actor"));
    setTimeout (() => {
      this.logout();
   }, this.time);

  }



}
