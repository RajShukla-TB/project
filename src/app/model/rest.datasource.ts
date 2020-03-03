import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from './book.model';
import { Customer } from './customer.model';


const  PROTOCOL = "http";
const PORT = 5500;


@Injectable()
export class RestDataSource{

    baseUrl: string;

    constructor(private http: HttpClient){
        this.baseUrl = `${PROTOCOL}://${location.hostname}:${PORT}/`;
    }

    getBooks() : Observable<Book[]>{
        return this.http.get<Book[]>(this.baseUrl + "books");
    }

    saveCustomer(customer : Customer) :Observable<Customer>{
        
        return this.http.post<Customer>(this.baseUrl + "customer", customer);
    }
}