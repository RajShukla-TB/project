import { Injectable } from "@angular/core";

@Injectable()
export class Customer{
    // i:number=1;
    public id: number;
    public name: string = "";
    public username: string = "";
    public password: string = "";
    public email: string = "";
    public phone: string = "";
    

    clear() {
        this.id = null;
        this.name = this.username = this.email 
        = this.password= this.phone = "";
    }
}