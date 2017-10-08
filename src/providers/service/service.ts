import { Injectable } from '@angular/core';
import {AlertController} from 'ionic-angular';
import { Http } from '@angular/http';
import { LoadingController } from 'ionic-angular';
import 'rxjs/add/operator/map';



/*
 Generated class for the ServiceProvider provider.

 See https://angular.io/docs/ts/latest/guide/dependency-injection.html
 for more info on providers and Angular 2 DI.
 */
@Injectable()
export class ServiceProvider {

  data: any;
  lastSearch:string;
  temp:boolean;

  constructor(public http: Http, public loadingCtrl:LoadingController,private alertCtrl: AlertController) {

    this.temp=false;
  }
  //searching function for the verse searching page
  searching(sentence:string){
    if(this.temp){
      return Promise.resolve(this.data);

    }
    this.lastSearch=sentence;
    return new Promise(resolve => {
      let loading = this.loadingCtrl.create({
        content:'Searching...',
        spinner: 'crescent',
      });
      loading.present();
      this.http.get('http://bible-verse-finder-api-ppeetteerrs.c9users.io:8080/index?sentence="'+sentence+'"')
        .map(res => res.json())
        .subscribe(data => {
            console.log(data);
            this.data = data;
            resolve(this.data);
            loading.dismiss();
          },
          err=>{
            console.log(err);
            loading.dismiss();
            let alert = this.alertCtrl.create({
              title: 'Error',
              subTitle: 'Please check your network connection',
              buttons: ['Dismiss']
            });
            alert.present();

          }
        )
    });

  }

}
