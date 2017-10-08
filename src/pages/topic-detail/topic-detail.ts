import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { verse } from '../../app/verse';


/**
 * Generated class for the TopicDetailPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-topic-detail',
  templateUrl: 'topic-detail.html',
})
export class TopicDetailPage {
  records:any;
  tempTitle:string;
  title:string;
  title2:string;
  chineseContent:any;
  engContent:Array<verse> = new Array<verse>();

  constructor(public navCtrl: NavController, public navParams: NavParams, public statusBar:StatusBar) {
    this.records=this.navParams.get('content');
    this.chineseContent=this.navParams.get('chineseContent');
    this.tempTitle=this.navParams.get('title');
    this.records.forEach((item)=>{
      this.engContent.push(Object.assign({}, item));
    });
    if(this.tempTitle.length>12){
      this.title=this.navParams.get('title');
    }
    else
      this.title2=this.navParams.get('title');
    this.statusBar.styleBlackTranslucent();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TopicDetailPage');
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
