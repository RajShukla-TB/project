import { Injectable } from "@angular/core";

import { Observable } from 'rxjs';
import { Customer } from './customer.model';
import { StaticCustomerDataSource } from './static.customerdatasource';

@Injectable()
export class CustomerRepository{
    
    constructor(private datasource: StaticCustomerDataSource){}
    getCustomer(){
        this.datasource.getCustomers();
    }
    saveCustomer(o: Customer){
        this.datasource.saveCustomer(o);
    }
}