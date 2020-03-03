
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { BookRepository } from './book.repository';
import { CustomerRepository } from './customer.repository';


import { StaticBookDataSource } from './static.bookdatasource';
import { StaticCustomerDataSource } from './static.customerdatasource';
import { Customer } from './customer.model';
import { RestDataSource } from './rest.datasource';

@NgModule({
    providers:[BookRepository,CustomerRepository,StaticCustomerDataSource,Customer,{ provide: StaticCustomerDataSource, useClass: RestDataSource}],
    imports:[HttpClientModule]
})

export class ModelModule{}