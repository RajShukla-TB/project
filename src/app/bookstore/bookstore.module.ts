import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ModelModule } from '../model/model.module';
import { SigninComponent } from './signin/signin.component';
import { LoginComponent } from './login/login.component';
import { AdminIndexComponent } from './admin-index/admin-index.component';
import { CustomerIndexComponent } from './customer-index/customer-index.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    SigninComponent,
    LoginComponent,
    AdminIndexComponent,
    CustomerIndexComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,ModelModule,RouterModule,FormsModule,
  ],
  exports:[SigninComponent,
    LoginComponent,
    AdminIndexComponent,
    CustomerIndexComponent,
    HomeComponent]
})
export class BookStoreModule { }
