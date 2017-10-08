import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { verse } from '../../app/verse';

/**
 * Generated class for the OccasionDetailsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-occasion-details',
  templateUrl: 'occasion-details.html',
})
export class OccasionDetailsPage {
  records:any;
  title:string;
  chineseContent:any;
  engContent:Array<verse> = new Array<verse>();

  constructor(public navCtrl: NavController, public navParams: NavParams, public statusBar:StatusBar) {
    this.statusBar.styleBlackTranslucent();
    this.records=this.navParams.get('content');
    this.records.forEach((item)=>{
      this.engContent.push(Object.assign({}, item));
    });
    this.chineseContent=this.navParams.get('chineseContent');
    this.title=this.navParams.get('title');

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OccasionDetailsPage');

  }
  translateChinese(index:number){
    this.records[index].verse=this.chineseContent[index].verse;
    this.records[index].content=this.chineseContent[index].content;
  }
  translateEng(index:number){
    this.records[index].verse=this.engContent[index].verse;
    this.records[index].content=this.engContent[index].content;

  }




}
