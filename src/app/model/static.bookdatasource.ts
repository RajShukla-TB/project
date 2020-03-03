
import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';
import { Book } from './book.model';

@Injectable()//decorator(s)--Similar to annotation s in java. Used to provide
//instructions to or information or metadata to angular framework...EG--@injectable() used to instruct 
// angular that underlying class will be used in DI.
//@NgModule is used to informs that the underlying class will work as a module.
//if in application structure diagram, connecting arrow that is coming into the box2 from box1....means box2 will use box1
//if in application structure diagram, connecting arrow that is touching the box2 from box1....means box2 will be dependency for box1
export class StaticBookDataSource{
    private products: Book[]=[];/*[
    //     new Book(1,"Book 1","Category 1","Product 1 (Category 1)",12),
    //     new Book(2,"Book 2","Category 1","Product 2 (Category 1)",120),
    //     new Book(3,"Book 3","Category 1","Product 3 (Category 1)",15),
    //     new Book(4,"Book 4","Category 2","Product 4 (Category 1)",180),
    //     new Book(5,"Book 5","Category 1","Product 5 (Category 1)",1230),
    //     new Book(6,"Book 6","Category 2","Product 6 (Category 2)",23),
    //     new Book(7,"Book 7","Category 2","Product 7 (Category 2)",3),
    //     new Book(8,"PBook 8","Category 1","Product 8 (Category 2)",13),
    //     new Book(9,"PBook 9","Category 2","Product 9 (Category 2)",45),
    //     new Book(10,"DBook 10","Category 2","Product 10 (Category 2)",1563),
    //     new Book(11,"DBook 11","Category 3","Product 11 (Category 3)",163),
    //     new Book(12,"Book 12","Category 3","Product 12 (Category 3)",1663),
    //     new Book(13,"Book 13","Category 3","Product 13 (Category 3)",673),
    //     new Book(14,"Book 14","Category 3","Product 14 (Category 3)",13),
    //     new Book(15,"Book 15","Category 3","Product 15 (Category 3)",43)
    // ]*/

    getBooks():Observable<Book[]>{
        return from([this.products]);
    }
    
}