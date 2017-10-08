import { Injectable } from '@angular/core';
import { Platform } from 'ionic-angular';
import { Http } from '@angular/http';
import { InAppPurchase } from '@ionic-native/in-app-purchase';
import 'rxjs/add/operator/map';

/*
  Generated class for the PurchaseProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class PurchaseProvider {
  purchase:boolean;
  productID='com.test_2.living_water.in_app_purchase';

  constructor(public http: Http, private iap: InAppPurchase,private plt: Platform,) {
    console.log('Hello PurchaseProvider Provider');
    this.plt.ready().then(() => {
      this.iap.restorePurchases().then((data)=>//the restorePurchases() will return the product array that the users had brought
        {
          this.purchase=false;
          console.log(data);
          let i:number;
          for(i=0; i<data.length;i++){
            var _r = JSON.parse(data[i].receipt);
            if(data[i].productId==this.productID){//if the same productID found, that means user brought the product
              if(_r.purchaseState=='0')
                this.purchase=true;
            }
          }
        })
        .catch(function (err) {
          console.log(err);
        })
    })

  }
  setPurchaseToTrue(){
    this.purchase=true;
  }

}
