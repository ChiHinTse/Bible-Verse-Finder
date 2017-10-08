import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Slides} from 'ionic-angular';
import {SearchPage} from '../search/search'
import {WeatherServiceProvider} from '../../providers/weather-service/weather-service';
import { Geolocation } from '@ionic-native/geolocation';
import { OccasionPage } from'../occasion/occasion';
import { StatusBar } from '@ionic-native/status-bar'
import { TopicPage } from '../topic/topic';
import { PurchaseProvider } from '../../providers/purchase/purchase';
import { AlertController } from 'ionic-angular';





@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [WeatherServiceProvider],
})
export class HomePage {
  @ViewChild(Slides) slides: Slides;
  private date;
  location:Position;
  iconString:string;
  degree:number;
  timezone:string;
  dailyVerses=[
       { "verse": "1 John 1:8-9", "content": " If we claim to be without sin, we deceive ourselves and the truth is not in us." },
       { "verse": "1 John 3:16a", "content": " 16 This is how we know what love is: Jesus Christ laid down his life for us." },
       { "verse": "1 John 3:18", "content": " 18 Dear children, let us not love with words or speech but with actions and in truth."},
       { "verse": "1 Peter 2:24", "content": " 24 \“He himself bore our sins\” in his body on the cross, so that we might die to sins and live for righteousness; "},
       { "verse": "2 Corinthians 5:17", "content": " If we claim to be without sin, we deceive ourselves and the truth is not in us." },
       { "verse": "Colossians 3:23", "content": " 23 Whatever you do, work at it with all your heart, as working for the Lord, not for human masters" },
       { "verse": "Ephesians 4:32", "content": " 32 Be kind and compassionate to one another, forgiving each other, just as in Christ God forgave you." },
       { "verse": "Galatians 2:20a", "content": " 20 I have been crucified with Christ and I no longer live, but Christ lives in me. " },
       { "verse": "Hebrews 11:1", "content": " 1 Now faith is confidence in what we hope for and assurance about what we do not see." },
       { "verse": "Hebrews 2:18", "content": " 18 Because he himself suffered when he was tempted, he is able to help those who are being tempted." },
       { "verse": "Isaiah 40:31a", "content": " 31 but those who hope in the Lord will renew their strength. They will soar on wings like eagles" },
       { "verse": "John 13:34", "content": " 34 “A new command I give you: Love one another. As I have loved you, so you must love one another. " },
       { "verse": "John 14:6", "content": " 6 ...“I am the way and the truth and the life. No one comes to the Father except through me. " },
       { "verse": "John 7:38", "content": " 38 Whoever believes in me, as Scripture has said, rivers of living water will flow from within them.” " },
       { "verse": "Luke 18:17", "content": " 17 Truly I tell you, anyone who will not receive the kingdom of God like a little child will never enter it.”" },
       { "verse": "Luke 5:32", "content": " 32 I have not come to call the righteous, but sinners to repentance.”" },
       { "verse": "Matthew 11:28", "content": " 28 “Come to me, all you who are weary and burdened, and I will give you rest." },
       { "verse": "Matthew 6:33", "content": " 33 But seek first his kingdom and his righteousness, and all these things will be given to you as well. " },
       { "verse": "Matthew 7:7", "content": " 7 “Ask and it will be given to you; seek and you will find; knock and the door will be opened to you. " },
       { "verse": "Matthew 18:20", "content": " 20 For where two or three gather in my name, there am I with them.”" },
       { "verse": "Proverbs 16:3", "content": " 3 Commit to the Lord whatever you do, and he will establish your plans." },
       { "verse": "Proverbs 3:5", "content": " 5 Trust in the Lord with all your heart and lean not on your own understanding" },
       { "verse": "Psalm 19:1-2", "content": " 1 The heavens declare the glory of God; the skies proclaim the work of his hands." },
       { "verse": "Psalm 32:7", "content": " 7 You are my hiding place; you will protect me from trouble and surround me with songs of deliverance." },
       { "verse": "Psalms 119:105", "content": " 105 Your word is a lamp for my feet, a light on my path." },
       { "verse": "Psalms 84:10b", "content": " 10 ...I would rather be a doorkeeper in the house of my God than dwell in the tents of the wicked." },
       { "verse": "Romans 12:21", "content": " 21 Do not be overcome by evil, but overcome evil with good." },
       { "verse": "Romans 5:8", "content": " 8 But God demonstrates his own love for us in this: While we were still sinners, Christ died for us." },
       { "verse": "Romans 6:23", "content": " 23 For the wages of sin is death, but the gift of God is eternal life in Christ Jesus our Lord." },
       { "verse": "Romans 8:28", "content": " 28 And we know that in all things God works for the good of those who love him" }
    ]
    dailyVerse:any;



  constructor(public navCtrl: NavController,
              public weatherService:WeatherServiceProvider,
              private geolocation:Geolocation,
              public purchaseProvider:PurchaseProvider,
              public alertCtrl:AlertController,
              public statusBar:StatusBar)

  {
    this.statusBar.styleDefault();
    this.date =  new Date();
    this.setDailyVerse();
    //ionic native function, get the latitude and longitude
    this.geolocation.getCurrentPosition().then((res)=>{
      this.getTodayWeather(res.coords.latitude.toString(),res.coords.longitude.toString());


    }).catch((error)=>{
      console.log('Error getting location', error);
    });



  }
  ionViewDidLoad(){
    this.slides.autoplayDisableOnInteraction = false;
  }
  openSearchPage(){
    if(this.purchaseProvider.purchase)//check whether user brought the poduct
      this.navCtrl.setRoot(SearchPage);
    else
    {
      let alert = this.alertCtrl.create({
        title: "You didn't Purchase",
        subTitle: 'To unlock the search function, you have to buy the in-app purchase',
        buttons: ['OK']
      });
      alert.present();
    }
  }
  openOccasionsPage(){
    this.navCtrl.setRoot(OccasionPage);

  }
  openTopicPage(){
    this.navCtrl.setRoot(TopicPage);
  }

  setDailyVerse(){
    let temp =this.date.getDate();
    this.dailyVerse=this.dailyVerses[temp%30];
  }

  getTodayWeather(latitude:string,longitude:string){
    console.log(latitude,longitude);
    this.weatherService.load(latitude,longitude).then((data)=>{

      //check suitable icon according to the weather data
      if(data.currently.icon=='partly-cloudy-day')
        this.iconString='ios-partly-sunny-outline';
      if(data.currently.icon=='clear-day')
        this.iconString='ios-sunny-outline';
      if(data.currently.icon=='rain')
        this.iconString='ios-rainy-outline';
      if(data.currently.icon=='partly-cloudy-night')
        this.iconString='ios-cloudy-night-outline';
      if(data.currently.icon=='clear-night')
        this.iconString='ios-moon-outline';
      if(data.currently.icon=='cloudy')
        this.iconString='ios-cloudy-outline';

      this.degree=Math.round((data.currently.temperature -32)*5/9);//convert the unit of the temperature
      this.timezone=data.timezone;

    })


  }


}
