
import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';

import { Customer } from './customer.model';
@Injectable()//decorator(s)--Similar to annotation s in java. Used to provide
//instructions to or information or metadata to angular framework...EG--@injectable() used to instruct 
// angular that underlying class will be used in DI.
//@NgModule is used to informs that the underlying class will work as a module.
//if in application structure diagram, connecting arrow that is coming into the box2 from box1....means box2 will use box1
//if in application structure diagram, connecting arrow that is touching the box2 from box1....means box2 will be dependency for box1
export class StaticCustomerDataSource{
    static datasource: Customer[]=[];
    saveCustomer(c: Customer){
        //console.log(JSON.stringify(c));
        StaticCustomerDataSource.datasource.push(c);
    }
    getCustomers(){
        StaticCustomerDataSource.datasource.forEach(element => {
            console.log(JSON.stringify(element));
        });
    }
    
}