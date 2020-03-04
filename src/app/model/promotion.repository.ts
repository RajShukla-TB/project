import { Injectable } from "@angular/core";
import { Promotion } from './promotion.model';
import { Observable } from 'rxjs';
import { StaticBookDataSource } from './static.bookdatasource';
;

@Injectable()
export class PromotionRepository{

    constructor(private staticdatasource: StaticBookDataSource){}

    savePromotion(promo : Promotion) : Observable<Promotion>{
        // console.log("Ka");
        return this.staticdatasource.savePromotion(promo);
    }

}