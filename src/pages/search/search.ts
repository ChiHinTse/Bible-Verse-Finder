import { Component, Input} from '@angular/core';
import { NavController, NavParams, AlertController,ToastController} from 'ionic-angular';
import {ServiceProvider} from '../../providers/service/service';
import { Keyboard } from '@ionic-native/keyboard';
import {record} from '../../app/recordModel';
import { Http} from '@angular/http';
import { StatusBar } from '@ionic-native/status-bar';
import {trigger, state, style, animate,transition, keyframes} from '@angular/animations';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

/**
 * Generated class for the SearchPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
  animations:[
    trigger('flyInOut', [
      state('in', style({transform: 'translateX(0)'})),
      transition('void => *', [
        animate(300, keyframes([
          style({opacity: 0, transform: 'translateX(-100%)', offset: 0}),
          style({opacity: 1, transform: 'translateX(15px)',  offset: 0.3}),
          style({opacity: 1, transform: 'translateX(0)',     offset: 1.0})
        ]))
      ]),
      transition('* => void', [
        animate(300, keyframes([
          style({opacity: 1, transform: 'translateX(0)',     offset: 0}),
          style({opacity: 1, transform: 'translateX(-15px)', offset: 0.7}),
          style({opacity: 0, transform: 'translateX(100%)',  offset: 1.0})
        ]))
      ])
    ])
  ]
})
export class SearchPage {
  serchSentence:string;
  @Input() private records: Array<record> = new Array<record>();
  noRecordSentense:string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public servicePro:ServiceProvider, private keyboard:Keyboard,
              public http:Http,
              public alertCtrl:AlertController,
              public toastCtrl: ToastController,
              public statusBar: StatusBar
  ) {
    this.statusBar.styleBlackTranslucent();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchPage');
  }

  onCancel(event){
    this.keyboard.close();
  }
  onInput(){
    this.keyboard.close();
    this.noRecordSentense=null;
    this.records.splice(0,this.records.length);
    console.log(this.serchSentence);
    if (typeof this.serchSentence === 'undefined' || this.serchSentence=='') { //check whether the user's input is empty
      console.log('undefined search sentence');
      return;
    }
    else{
      this.servicePro.searching(this.serchSentence).then((data) => {
        for (var i = 0; i < data.length; i++)
        {
          if(data[i].Relevance>0.03){
            this.records.push(data[i]);
            this.records[i].disabled=false;
            this.records[i].state='in';

          }

        }
        if(this.records.length==0)
          this.noRecordSentense='No record can be found';
        else if(this.records.length>100)
          this.noRecordSentense='The input is too general';
      });
    };
    }



  returnYse(temp:record)
  {
    let successToast = this.toastCtrl.create({
      message: 'summit successfully',
      duration: 3000,
      position: 'top'
    });

    let failToast = this.toastCtrl.create({
      message: 'fail to summit',
      duration: 3000,
      position: 'top'
    });

    let postParams = {
      ID: temp.ID,
      Search_Sentence: this.serchSentence,
      Accepted:true
    }



    let alert = this.alertCtrl.create({
      title: 'Confirm summit',
      message: 'Do you want to summit to the server?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Yes',
          handler: () => {
            this.http.get('http://bible-verse-finder-api-ppeetteerrs.c9users.io:8080/userAction?jsonString='+JSON.stringify(postParams))
              .subscribe(
                res=>successToast.present(),
                err => {
                  console.log(err);
                  failToast.present();
                },
                () => console.log('yay')
              );

            let index = this.records.indexOf(temp);
            if(index > -1){
              this.records[index].disabled=true;
            }
            console.log('Yes clicked');
          }
        }
      ]
    });
    alert.present();

  }
  returnNo(temp:record)
  {
    let successToast = this.toastCtrl.create({
      message: 'summit successfully',
      duration: 3000,
      position: 'top'
    });

    let failToast = this.toastCtrl.create({
      message: 'fail to summit',
      duration: 3000,
      position: 'top'
    });


    let postParams = {
      ID: temp.ID,
      Search_Sentence: this.serchSentence,
      Accepted:false
    }

    let alert = this.alertCtrl.create({
      title: 'Confirm summit',
      message: 'Do you want to summit to the server?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Yes',
          handler: () => {
            this.http.get('http://bible-verse-finder-api-ppeetteerrs.c9users.io:8080/userAction?jsonString='+JSON.stringify(postParams))
              .subscribe(
                res=>successToast.present(),
                err => {
                  console.log(err);
                  failToast.present();
                },
                () => console.log('yay')
              );

            let index = this.records.indexOf(temp);
            if(index > -1){
              //this.records[index].disabled=true;
              this.records.splice(index,1);
              console.log(index);
            }
            console.log('Yes clicked');
          }
        }
      ]
    });
    alert.present();






  }


}
