import { Component,ViewChild } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { MenuController } from 'ionic-angular';
import { Nav} from 'ionic-angular';


import { HomePage } from '../pages/home/home';
import {AboutPage} from '../pages/about/about';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;
  AboutPage:any=AboutPage;
  @ViewChild(Nav) nav: Nav;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,public menuCtrl: MenuController) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
  openMenu() {
    this.menuCtrl.open();
  }
  openHome(){
    //this.menuCtrl.close();
    this.nav.setRoot(HomePage);
  }
  openAbout(){
    //this.menuCtrl.close();
    this.nav.setRoot(AboutPage);
  }
}

