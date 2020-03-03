import { Injectable } from '@angular/core';
import { Book } from './book.model';
import { StaticBookDataSource } from './static.bookdatasource';

@Injectable()
export class BookRepository{
    private products: Book[]=[];

    constructor(private dataSource: StaticBookDataSource){
        dataSource.getBooks().subscribe(data=>{
            this.products=data;
        });
    }
    getBooks(): Book[]{
        return this.products;
    }
}