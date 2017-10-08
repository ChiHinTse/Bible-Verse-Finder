import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { InAppPurchase } from '@ionic-native/in-app-purchase';
import { PurchaseProvider } from "../../providers/purchase/purchase"
import {enableDebugTools} from "@angular/platform-browser";

/**
 * Generated class for the AboutPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
const NONCONSUMEABLE_KEY='com.test_2.living_water.in_app_purchase';//this key is unique
@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
})
export class AboutPage {
  products :any;

  constructor(private iap: InAppPurchase, private plt: Platform, public purchaseProvider:PurchaseProvider)
  {
    this.plt.ready().then(() => {
      this.iap.getProducts([NONCONSUMEABLE_KEY])
      //Retrieves a list of full product data from Apple/Google. This method must be called before making purchases.
        .then((products) => {
          this.products = products;//assign the return value to the local variable
        })
        .catch((err) => {
          console.log(err);
        });
    })
  }

  buy() {
    this.iap
      .buy(NONCONSUMEABLE_KEY)//Buy a product that matches the productId.
      .then(() =>{
         console.log('product was successfully consumed!');
         this.enableItems(NONCONSUMEABLE_KEY);
    })
      .catch( err=> console.log(err))
  }

  enableItems(id:any) {
    // Normally store these settings/purchases inside your app or server!
    if (id === NONCONSUMEABLE_KEY) {
      this.purchaseProvider.setPurchaseToTrue();
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AboutPage');
  }

}
