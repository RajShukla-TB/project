import { Injectable } from "@angular/core";
import { Order } from './order.model';

import { Observable } from 'rxjs';
import { StaticBookDataSource } from './static.bookdatasource';

@Injectable()
export class OrderRepository{
    private order: Order[]=[];
    constructor(private datasource: StaticBookDataSource){}
    
    saveOrder(order: Order):Observable<Order>{
        return this.datasource.saveOrder(order);
    }
}