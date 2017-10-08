import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Keyboard} from '@ionic-native/keyboard';
import { InAppPurchase } from '@ionic-native/in-app-purchase';


import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AboutPage } from '../pages/about/about';
import { SearchPage } from '../pages/search/search';
import { OccasionPage } from '../pages/occasion/occasion'
import { ServiceProvider } from '../providers/service/service';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { WeatherServiceProvider } from '../providers/weather-service/weather-service';
import { Geolocation } from '@ionic-native/geolocation';
import { OccasionDetailsPage } from '../pages/occasion-details/occasion-details';
import { TopicPage } from '../pages/topic/topic';
import { TopicProvider } from '../providers/topic/topic';
import { TopicDetailPage } from '../pages/topic-detail/topic-detail';
import { PurchaseProvider } from '../providers/purchase/purchase';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AboutPage,
    SearchPage,
    OccasionPage,
    OccasionDetailsPage,
    TopicPage,
    TopicDetailPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, {
      backButtonText: ' ',
      iconMode: 'ios',
      modalEnter: 'modal-slide-in',
      modalLeave: 'modal-slide-out',
      tabsPlacement: 'bottom',
      pageTransition: 'ios-transition'
    }),
    BrowserAnimationsModule,
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AboutPage,
    SearchPage,
    OccasionPage,
    OccasionDetailsPage,
    TopicPage,
    TopicDetailPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ServiceProvider,
    Keyboard,
    ServiceProvider,
    InAppPurchase,
    WeatherServiceProvider,
    Geolocation,
    TopicProvider,
    PurchaseProvider
  ]
})
export class AppModule {}
