webpackJsonp([0],{

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PurchaseProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_in_app_purchase__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/*
  Generated class for the PurchaseProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
var PurchaseProvider = (function () {
    function PurchaseProvider(http, iap, plt) {
        var _this = this;
        this.http = http;
        this.iap = iap;
        this.plt = plt;
        this.productID = 'com.test_2.living_water.in_app_purchase';
        console.log('Hello PurchaseProvider Provider');
        this.plt.ready().then(function () {
            _this.iap.restorePurchases().then(function (data) {
                _this.purchase = false;
                console.log(data);
                var i;
                for (i = 0; i < data.length; i++) {
                    var _r = JSON.parse(data[i].receipt);
                    if (data[i].productId == _this.productID) {
                        if (_r.purchaseState == '0')
                            _this.purchase = true;
                    }
                }
            })
                .catch(function (err) {
                console.log(err);
            });
        });
        //this.purchase=true;
    }
    PurchaseProvider.prototype.setPurchaseToTrue = function () {
        this.purchase = true;
    };
    return PurchaseProvider;
}());
PurchaseProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_in_app_purchase__["a" /* InAppPurchase */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */]])
], PurchaseProvider);

//# sourceMappingURL=purchase.js.map

/***/ }),

/***/ 112:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 112;

/***/ }),

/***/ 154:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 154;

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__search_search__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_weather_service_weather_service__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_geolocation__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__occasion_occasion__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__topic_topic__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_purchase_purchase__ = __webpack_require__(103);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var HomePage = (function () {
    function HomePage(navCtrl, weatherService, geolocation, purchaseProvider, alertCtrl, statusBar) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.weatherService = weatherService;
        this.geolocation = geolocation;
        this.purchaseProvider = purchaseProvider;
        this.alertCtrl = alertCtrl;
        this.statusBar = statusBar;
        this.dailyVerses = [
            { "verse": "1 John 1:8-9", "content": " If we claim to be without sin, we deceive ourselves and the truth is not in us." },
            { "verse": "1 John 3:16a", "content": " 16 This is how we know what love is: Jesus Christ laid down his life for us." },
            { "verse": "1 John 3:18", "content": " 18 Dear children, let us not love with words or speech but with actions and in truth." },
            { "verse": "1 Peter 2:24", "content": " 24 \“He himself bore our sins\” in his body on the cross, so that we might die to sins and live for righteousness; " },
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
        ];
        this.statusBar.styleDefault();
        this.date = new Date();
        this.setDailyVerse();
        this.geolocation.getCurrentPosition().then(function (res) {
            _this.getTodayWeather(res.coords.latitude.toString(), res.coords.longitude.toString());
        }).catch(function (error) {
            console.log('Error getting location', error);
        });
        //this.weatherData=this.weatherService.load(this.latitude,this.longitude);
        //console.log(this.weatherData);
    }
    HomePage.prototype.ionViewDidLoad = function () {
        this.slides.autoplayDisableOnInteraction = false;
    };
    HomePage.prototype.openSearchPage = function () {
        // if(this.purchaseProvider.purchase)
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__search_search__["a" /* SearchPage */]);
        // else
        // {
        //   let alert = this.alertCtrl.create({
        //     title: "You didn't Purchase",
        //     subTitle: 'To unlock the search function, you have to buy the in-app purchase',
        //     buttons: ['OK']
        //   });
        //   alert.present();
        // }
    };
    HomePage.prototype.openOccasionsPage = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__occasion_occasion__["a" /* OccasionPage */]);
    };
    HomePage.prototype.openTopicPage = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_7__topic_topic__["a" /* TopicPage */]);
    };
    HomePage.prototype.setDailyVerse = function () {
        var temp = this.date.getDate();
        this.dailyVerse = this.dailyVerses[temp % 30];
    };
    HomePage.prototype.getTodayWeather = function (latitude, longitude) {
        var _this = this;
        console.log(latitude, longitude);
        this.weatherService.load(latitude, longitude).then(function (data) {
            if (data.currently.icon == 'partly-cloudy-day')
                _this.iconString = 'ios-partly-sunny-outline';
            if (data.currently.icon == 'clear-day')
                _this.iconString = 'ios-sunny-outline';
            if (data.currently.icon == 'rain')
                _this.iconString = 'ios-rainy-outline';
            if (data.currently.icon == 'partly-cloudy-night')
                _this.iconString = 'ios-cloudy-night-outline';
            if (data.currently.icon == 'clear-night')
                _this.iconString = 'ios-moon-outline';
            if (data.currently.icon == 'cloudy')
                _this.iconString = 'ios-cloudy-outline';
            _this.degree = Math.round((data.currently.temperature - 32) * 5 / 9);
            _this.timezone = data.timezone;
        });
    };
    return HomePage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Slides */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Slides */])
], HomePage.prototype, "slides", void 0);
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"/Users/tsechihin/Documents/ionicProject/livingWater/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon id="menuButton" name="menu"></ion-icon>\n    </button>\n    <ion-title>\n      Living Water\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-slides autoplay="2500" loop="true" speed="1500"  pager>\n\n    <ion-slide id="slideTwo">\n      <h6 id="dailyVerse">{{dailyVerse.content}}</h6>\n      <p><ion-note>{{dailyVerse.verse}}</ion-note></p>\n\n    </ion-slide>\n\n\n  <ion-slide id="slideOne" >\n    <div *ngIf="degree">\n      <ion-icon name="{{iconString}}"></ion-icon>\n      <h6>{{degree}}°C</h6>\n      <h6>{{timezone}}</h6>\n      <h6>{{ date | date:\'d-MMM-yy\' }}</h6>\n      <div id="info">Powered by Dark Sky</div>\n\n\n    </div>\n\n  </ion-slide>\n\n  </ion-slides>\n\n  <button id="topicButton" ion-button (click)="openTopicPage()" >\n    <div><ion-icon  name="ios-leaf"></ion-icon>\n      <p>Select Topic</p>\n    </div>\n  </button>\n  <button id="occasionButton" ion-button (click)="openOccasionsPage()" >\n    <div><ion-icon  name="ios-book" md="md-book"></ion-icon>\n      <p>Select occasion</p>\n    </div></button>\n  <button id="searchButton" ion-button  (click)="openSearchPage()">\n    <div><ion-icon  name="ios-search"></ion-icon>\n      <p>Inputting keywords</p>\n    </div>\n  </button>\n</ion-content>\n'/*ion-inline-end:"/Users/tsechihin/Documents/ionicProject/livingWater/src/pages/home/home.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_3__providers_weather_service_weather_service__["a" /* WeatherServiceProvider */]],
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_3__providers_weather_service_weather_service__["a" /* WeatherServiceProvider */],
        __WEBPACK_IMPORTED_MODULE_4__ionic_native_geolocation__["a" /* Geolocation */],
        __WEBPACK_IMPORTED_MODULE_8__providers_purchase_purchase__["a" /* PurchaseProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__["a" /* StatusBar */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_service_service__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_keyboard__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_animations__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_catch__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_catch__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









/**
 * Generated class for the SearchPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var SearchPage = (function () {
    function SearchPage(navCtrl, navParams, servicePro, keyboard, http, alertCtrl, toastCtrl, statusBar) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.servicePro = servicePro;
        this.keyboard = keyboard;
        this.http = http;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.statusBar = statusBar;
        this.records = new Array();
        this.statusBar.styleBlackTranslucent();
    }
    SearchPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SearchPage');
    };
    SearchPage.prototype.onCancel = function (event) {
        this.keyboard.close();
    };
    SearchPage.prototype.onInput = function () {
        var _this = this;
        this.keyboard.close();
        this.noRecordSentense = null;
        this.records.splice(0, this.records.length);
        console.log(this.serchSentence);
        if (typeof this.serchSentence === 'undefined' || this.serchSentence == '') {
            console.log('undefined search sentence');
            return;
        }
        else {
            this.servicePro.searching(this.serchSentence).then(function (data) {
                for (var i = 0; i < data.length; i++) {
                    if (data[i].Relevance > 0.03) {
                        _this.records.push(data[i]);
                        _this.records[i].disabled = false;
                        _this.records[i].state = 'in';
                    }
                }
                if (_this.records.length == 0)
                    _this.noRecordSentense = 'No record can be found';
                else if (_this.records.length > 100)
                    _this.noRecordSentense = 'The input is too general';
            });
        }
        ;
    };
    SearchPage.prototype.returnYse = function (temp) {
        var _this = this;
        var successToast = this.toastCtrl.create({
            message: 'summit successfully',
            duration: 3000,
            position: 'top'
        });
        var failToast = this.toastCtrl.create({
            message: 'fail to summit',
            duration: 3000,
            position: 'top'
        });
        var postParams = {
            ID: temp.ID,
            Search_Sentence: this.serchSentence,
            Accepted: true
        };
        var alert = this.alertCtrl.create({
            title: 'Confirm summit',
            message: 'Do you want to summit to the server?',
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Yes',
                    handler: function () {
                        _this.http.get('http://bible-verse-finder-api-ppeetteerrs.c9users.io:8080/userAction?jsonString=' + JSON.stringify(postParams))
                            .subscribe(function (res) { return successToast.present(); }, function (err) {
                            console.log(err);
                            failToast.present();
                        }, function () { return console.log('yay'); });
                        var index = _this.records.indexOf(temp);
                        if (index > -1) {
                            _this.records[index].disabled = true;
                        }
                        console.log('Yes clicked');
                    }
                }
            ]
        });
        alert.present();
    };
    SearchPage.prototype.returnNo = function (temp) {
        var _this = this;
        var successToast = this.toastCtrl.create({
            message: 'summit successfully',
            duration: 3000,
            position: 'top'
        });
        var failToast = this.toastCtrl.create({
            message: 'fail to summit',
            duration: 3000,
            position: 'top'
        });
        var postParams = {
            ID: temp.ID,
            Search_Sentence: this.serchSentence,
            Accepted: false
        };
        var alert = this.alertCtrl.create({
            title: 'Confirm summit',
            message: 'Do you want to summit to the server?',
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Yes',
                    handler: function () {
                        _this.http.get('http://bible-verse-finder-api-ppeetteerrs.c9users.io:8080/userAction?jsonString=' + JSON.stringify(postParams))
                            .subscribe(function (res) { return successToast.present(); }, function (err) {
                            console.log(err);
                            failToast.present();
                        }, function () { return console.log('yay'); });
                        var index = _this.records.indexOf(temp);
                        if (index > -1) {
                            //this.records[index].disabled=true;
                            _this.records.splice(index, 1);
                            console.log(index);
                        }
                        console.log('Yes clicked');
                    }
                }
            ]
        });
        alert.present();
    };
    return SearchPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Array)
], SearchPage.prototype, "records", void 0);
SearchPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-search',template:/*ion-inline-start:"/Users/tsechihin/Documents/ionicProject/livingWater/src/pages/search/search.html"*/'<!--\n  Generated template for the SearchPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title><span text-color="my-custom-color">Search</span></ion-title>\n    <button ion-button menuToggle>\n      <ion-icon id="menuButton" name="menu"></ion-icon>\n    </button>\n  </ion-navbar>\n\n  <ion-searchbar\n    [(ngModel)]="serchSentence"\n    [showCancelButton]="true"\n    (search)="onInput()"\n    (ionCancel)="onCancel($event)"\n    [animated]="true">\n\n  </ion-searchbar>\n</ion-header>\n\n\n<ion-content>\n\n  <div *ngIf="noRecordSentense">\n    <p id="noRecords">{{noRecordSentense}}</p>\n  </div>\n  <div *ngIf="records && noRecordSentense==null">\n    <ion-card *ngFor="let record of records">\n      <ion-card-header>\n        {{record.Verse}}\n      </ion-card-header>\n      <ion-card-content>\n        {{record.Sentence}}\n        <p><ion-note> Relevance: {{record.Relevance}}</ion-note></p>\n      </ion-card-content>\n      <div text-center>\n\n        <button [disabled]="record.disabled" (click)="returnYse(record)" class="cardButton" icon-start ion-button icon-only color="secondary">\n          <ion-icon name="checkmark"></ion-icon>\n        </button>\n        <button [disabled]="record.disabled" (click)="returnNo(record)"  class="cardButton" icon-end ion-button icon-only color="danger">\n          <ion-icon name="close"></ion-icon>\n        </button>\n      </div>\n\n    </ion-card>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/tsechihin/Documents/ionicProject/livingWater/src/pages/search/search.html"*/,
        animations: [
            Object(__WEBPACK_IMPORTED_MODULE_6__angular_animations__["i" /* trigger */])('flyInOut', [
                Object(__WEBPACK_IMPORTED_MODULE_6__angular_animations__["f" /* state */])('in', Object(__WEBPACK_IMPORTED_MODULE_6__angular_animations__["g" /* style */])({ transform: 'translateX(0)' })),
                Object(__WEBPACK_IMPORTED_MODULE_6__angular_animations__["h" /* transition */])('void => *', [
                    Object(__WEBPACK_IMPORTED_MODULE_6__angular_animations__["c" /* animate */])(300, Object(__WEBPACK_IMPORTED_MODULE_6__angular_animations__["d" /* keyframes */])([
                        Object(__WEBPACK_IMPORTED_MODULE_6__angular_animations__["g" /* style */])({ opacity: 0, transform: 'translateX(-100%)', offset: 0 }),
                        Object(__WEBPACK_IMPORTED_MODULE_6__angular_animations__["g" /* style */])({ opacity: 1, transform: 'translateX(15px)', offset: 0.3 }),
                        Object(__WEBPACK_IMPORTED_MODULE_6__angular_animations__["g" /* style */])({ opacity: 1, transform: 'translateX(0)', offset: 1.0 })
                    ]))
                ]),
                Object(__WEBPACK_IMPORTED_MODULE_6__angular_animations__["h" /* transition */])('* => void', [
                    Object(__WEBPACK_IMPORTED_MODULE_6__angular_animations__["c" /* animate */])(300, Object(__WEBPACK_IMPORTED_MODULE_6__angular_animations__["d" /* keyframes */])([
                        Object(__WEBPACK_IMPORTED_MODULE_6__angular_animations__["g" /* style */])({ opacity: 1, transform: 'translateX(0)', offset: 0 }),
                        Object(__WEBPACK_IMPORTED_MODULE_6__angular_animations__["g" /* style */])({ opacity: 1, transform: 'translateX(-15px)', offset: 0.7 }),
                        Object(__WEBPACK_IMPORTED_MODULE_6__angular_animations__["g" /* style */])({ opacity: 0, transform: 'translateX(100%)', offset: 1.0 })
                    ]))
                ])
            ])
        ]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_service_service__["a" /* ServiceProvider */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_keyboard__["a" /* Keyboard */],
        __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Http */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__["a" /* StatusBar */]])
], SearchPage);

//# sourceMappingURL=search.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/*
 Generated class for the ServiceProvider provider.

 See https://angular.io/docs/ts/latest/guide/dependency-injection.html
 for more info on providers and Angular 2 DI.
 */
var ServiceProvider = (function () {
    function ServiceProvider(http, loadingCtrl, alertCtrl) {
        this.http = http;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.temp = false;
    }
    ServiceProvider.prototype.searching = function (sentence) {
        var _this = this;
        if (this.temp) {
            return Promise.resolve(this.data);
        }
        this.lastSearch = sentence;
        return new Promise(function (resolve) {
            var loading = _this.loadingCtrl.create({
                content: 'Searching...',
                spinner: 'crescent',
            });
            loading.present();
            _this.http.get('http://bible-verse-finder-api-ppeetteerrs.c9users.io:8080/index?sentence="' + sentence + '"')
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                console.log(data);
                _this.data = data;
                resolve(_this.data);
                loading.dismiss();
            }, function (err) {
                console.log(err);
                loading.dismiss();
                var alert = _this.alertCtrl.create({
                    title: 'Error',
                    subTitle: 'Please check your network connection',
                    buttons: ['Dismiss']
                });
                alert.present();
            });
        });
    };
    return ServiceProvider;
}());
ServiceProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
], ServiceProvider);

//# sourceMappingURL=service.js.map

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WeatherServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the WeatherServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
var WeatherServiceProvider = (function () {
    function WeatherServiceProvider(http) {
        this.http = http;
        this.key = 'ac39756652cf5d97ef95481c6f620c0d';
    }
    WeatherServiceProvider.prototype.load = function (latitude, longitude) {
        var _this = this;
        if (this.data) {
            return Promise.resolve(this.data);
        }
        return new Promise(function (resolve) {
            _this.http.get('https://api.forecast.io/forecast/' + _this.key + '/' + latitude + ',' + longitude + '?exclude=alerts,minutely,hourly')
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.data = data;
                resolve(_this.data);
            });
        });
    };
    return WeatherServiceProvider;
}());
WeatherServiceProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
], WeatherServiceProvider);

//# sourceMappingURL=weather-service.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OccasionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__occasion_details_occasion_details__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__ = __webpack_require__(26);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the OccasionPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var OccasionPage = (function () {
    function OccasionPage(navCtrl, navParams, statusBar) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.statusBar = statusBar;
        this.statusBar.styleBlackTranslucent();
        this.occasions = [
            { title: 'Baptism' },
            { title: 'Birth' },
            { title: 'Funeral' },
            { title: 'Illness' },
            { title: 'Wedding' }
        ];
    }
    OccasionPage.prototype.openOccasionDetailPage = function (title) {
        if (title == 'Baptism') {
            var contentForDetailPage = [
                {
                    verse: '2 Corinthians 5:17',
                    content: '17 Therefore, if anyone is in Christ, the new creation has come: The old has gone, the new is here!'
                },
                {
                    verse: 'Romans 6:3-4',
                    content: '3 Or don’t you know that all of us who were baptized into Christ Jesus were baptized into his death? 4 We were therefore buried with him through baptism into death in order that, just as Christ was raised from the dead through the glory of the Father, we too may live a new life.'
                },
                {
                    verse: 'Galatians 2:20',
                    content: '20 I have been crucified with Christ and I no longer live, but Christ lives in me. The life I now live in the body, I live by faith in the Son of God, who loved me and gave himself for me.'
                },
                {
                    verse: 'John 15:5-6',
                    content: '5 “I am the vine; you are the branches. If you remain in me and I in you, you will bear much fruit; apart from me you can do nothing. 6 If you do not remain in me, you are like a branch that is thrown away and withers; such branches are picked up, thrown into the fire and burned. '
                },
                {
                    verse: 'Hebrews 12:1-3',
                    content: '1 Therefore, since we are surrounded by such a great cloud of witnesses, let us throw off everything that hinders and the sin that so easily entangles. And let us run with perseverance the race marked out for us, 2 fixing our eyes on Jesus, the pioneer and perfecter of faith. For the joy set before him he endured the cross, scorning its shame, and sat down at the right hand of the throne of God. 3 Consider him who endured such opposition from sinners, so that you will not grow weary and lose heart.'
                },
                {
                    verse: 'Ephesians 3:17b-18',
                    content: '17 ... And I pray that you, being rooted and established in love, 18 may have power, together with all the Lord’s holy people, to grasp how wide and long and high and deep is the love of Christ'
                },
                {
                    verse: '2 Corinthians 5:14-15',
                    content: '14 For Christ’s love compels us, because we are convinced that one died for all, and therefore all died. 15 And he died for all, that those who live should no longer live for themselves but for him who died for them and was raised again.'
                },
                {
                    verse: 'Romans 12:2',
                    content: '2 Do not conform to the pattern of this world, but be transformed by the renewing of your mind. Then you will be able to test and approve what God’s will is—his good, pleasing and perfect will.'
                },
                {
                    verse: 'Ephesians 2:10',
                    content: '10 For we are God’s handiwork, created in Christ Jesus to do good works, which God prepared in advance for us to do.'
                },
                {
                    verse: 'Colossians 1:9-10',
                    content: '9 For this reason, since the day we heard about you, we have not stopped praying for you. We continually ask God to fill you with the knowledge of his will through all the wisdom and understanding that the Spirit gives, 10 so that you may live a life worthy of the Lord and please him in every way: bearing fruit in every good work, growing in the knowledge of God,'
                },
                {
                    verse: '1 Peter 2:2-3',
                    content: '2 Like newborn babies, crave pure spiritual milk, so that by it you may grow up in your salvation, 3 now that you have tasted that the Lord is good.'
                },
                {
                    verse: 'John 1:12-13',
                    content: '12 Yet to all who did receive him, to those who believed in his name, he gave the right to become children of God— 13 children born not of natural descent, nor of human decision or a husband’s will, but born of God.'
                },
                {
                    verse: 'Galatians 4:6-7',
                    content: '6 Because you are his sons, God sent the Spirit of his Son into our hearts, the Spirit who calls out, “Abba, Father.” 7 So you are no longer a slave, but God’s child; and since you are his child, God has made you also an heir.'
                },
                { verse: 'Philippians 1:6', content: ' 6 being confident of this, that he who began a good work in you will carry it on to completion until the day of Christ Jesus.' }
            ];
            var chineseContentForDetailPage = [
                { verse: '哥林多後書 5 章 17 節', content: '17 若有人在基督裏，他就是新造的人，舊事已過，都變成新的了。' },
                { verse: '羅馬書 6 章 3-4 節', content: '3 豈不知我們這受洗歸入基督耶穌的人，是受洗歸入他的死嗎？ 4 所以我們藉着洗禮歸入死，和他一同埋葬，原是叫我們一舉一動有新生的樣式，像基督藉着父的榮耀從死裏復活一樣。' },
                { verse: '加拉太書 2 章 20 節', content: '20 我已經與基督同釘十字架，現在活着的不再是我，乃是基督在我裏面活着；並且我如今在肉身活着，是因信神的兒子而活，他是愛我，為我捨己。 ' },
                { verse: '約翰福音 15 章 5-6 節', content: '5 「我是葡萄樹，你們是枝子。常在我裏面的，我也常在他裏面，這人就多結果子。因為離了我，你們就不能做甚麼。 6 人若不常在我裏面，就像枝子丟在外面枯乾，人拾起來扔在火裏燒了。 ' },
                { verse: '希伯來書 12 章 1-3 節', content: '1 我們既有這許多的見證人，如同雲彩圍着我們，就當放下各樣的重擔，脫去容易纏累我們的罪，存心忍耐，奔那擺在我們前頭的路程， 2 仰望為我們信心創始成終的耶穌。他因那擺在前面的喜樂，就輕看羞辱，忍受了十字架的苦難，便坐在神寶座的右邊。 3 那忍受罪人這樣頂撞的，你們要思想，免得疲倦灰心。' },
                { verse: '以弗所書 3 章 17-18 節', content: ' 17 使基督因你們的信，住在你們心裏，叫你們的愛心有根有基， 18 能以和眾聖徒一同明白基督的愛是何等長闊高深！ ' },
                { verse: '哥林多後書 5 章 14-15 節', content: '14 原來基督的愛激勵我們。因我們想，一人既替眾人死，眾人就都死了； 15 並且他替眾人死，是叫那些活着的人不再為自己活，乃為替他們死而復活的主活。' },
                { verse: '羅馬書 12 章 2 節', content: '2 不要效法這個世界，只要心意更新而變化，叫你們察驗何為神的善良、純全、可喜悅的旨意。' },
                { verse: '以弗所書 2 章 10 節', content: '10 我們原是他的工作，在基督耶穌裏造成的，為要叫我們行善，就是神所預備叫我們行的。' },
                { verse: '歌羅西書 1 章 9-10 節', content: '9 因此，我們自從聽見的日子，也就為你們不住地禱告祈求，願你們在一切屬靈的智慧悟性上，滿心知道神的旨意，10 好叫你們行事為人對得起主，凡事蒙他喜悅，在一切善事上結果子，漸漸地多知道神' },
                { verse: '彼得前書 2 章 2-3 節', content: ' 2 就要愛慕那純淨的靈奶，像才生的嬰孩愛慕奶一樣，叫你們因此漸長，以至得救。 3 你們若嘗過主恩的滋味，就必如此。' },
                { verse: '約翰福音 1 章 12-13 節', content: '12 凡接待他的，就是信他名的人，他就賜他們權柄，作神的兒女。 13這等人不是從血氣生的，不是從情慾生的，也不是從人意生的，乃是從神生的。' },
                { verse: '加拉太書 4 章 6-7 節', content: '6 你們既為兒子，神就差他兒子的靈進入你們的心，呼叫：「阿爸，父！」 7 可見，從此以後，你不是奴僕，乃是兒子了。既是兒子，就靠着神為後嗣。' },
                { verse: '腓立比書 1 章 6 節', content: '6 我深信那在你們心裏動了善工的，必成全這工，直到耶穌基督的日子。' }
            ];
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__occasion_details_occasion_details__["a" /* OccasionDetailsPage */], { chineseContent: chineseContentForDetailPage, content: contentForDetailPage, title: title });
        }
        else if (title == 'Birth') {
            var contentForDetailPage = [
                {
                    verse: 'Proverbs 22:6',
                    content: '6 Start children off on the way they should go, and even when they are old they will not turn from it.'
                },
                { verse: 'Psalm 127:3', content: '3 Children are a heritage from the Lord, offspring a reward from him. ' },
                {
                    verse: 'Mark 10:14b',
                    content: ' 14 ...He said to them, “Let the little children come to me, and do not hinder them, for the kingdom of God belongs to such as these.'
                },
                {
                    verse: 'Psalm 121:5-8',
                    content: '5 The Lord watches over you—the Lord is your shade at your right hand; 6 the sun will not harm you by day, nor the moon by night. 7 The Lord will keep you from all harm—he will watch over your life; 8 the Lord will watch over your coming and going both now and forevermore.'
                },
                {
                    verse: 'Numbers 6:24-26',
                    content: '24 ‘“The Lord bless you and keep you; 25 the Lord make his face shine on you and be gracious to you; 26 the Lord turn his face toward you and give you peace.”’'
                },
                {
                    verse: 'Psalm 103:17-18',
                    content: '17 But from everlasting to everlasting the Lord’s love is with those who fear him, and his righteousness with their children’s children— 18 with those who keep his covenant and remember to obey his precepts.'
                },
                { verse: 'Luke 2:52', content: '52 And Jesus grew in wisdom and stature, and in favor with God and man.' },
                {
                    verse: 'Deuteronomy 6:6-9',
                    content: '6 These commandments that I give you today are to be on your hearts. 7 Impress them on your children. Talk about them when you sit at home and when you walk along the road, when you lie down and when you get up. 8 Tie them as symbols on your hands and bind them on your foreheads. 9 Write them on the doorframes of your houses and on your gates.'
                },
                {
                    verse: 'Ephesians 6:4',
                    content: '4 Fathers, do not exasperate your children; instead, bring them up in the training and instruction of the Lord.'
                },
            ];
            var chineseContentForDetailPage = [
                { verse: '箴言 22 章 6 節', content: '6 教養孩童，使他走當行的道，就是到老他也不偏離。' },
                { verse: '詩篇 127 篇 3 節', content: '3 兒女是耶和華所賜的產業，所懷的胎是他所給的賞賜。' },
                { verse: '馬可福音 10 章 14 節下 ', content: '14 ...對門徒說：「讓小孩子到我這裏來，不要禁止他們，因為在神國的，正是這樣的人。' },
                { verse: '詩篇 121 篇 5-8 節', content: '5 保護你的是耶和華，耶和華在你右邊蔭庇你。6 白日，太陽必不傷你；夜間，月亮必不害你。7 耶和華要保護你，免受一切的災害。他要保護你的性命。 8 你出你入，耶和華要保護你，從今時直到永遠。' },
                { verse: '民數記 6 章 24-26 節', content: '24 願耶和華賜福給你，保護你。 25 願耶和華使他的臉光照你，賜恩給你。 26 願耶和華向你仰臉，賜你平安。' },
                { verse: '詩篇 103 篇 17-18 節', content: '17 但耶和華的慈愛歸於敬畏他的人，從亙古到永遠；他的公義也歸於子子孫孫， 18 就是那些遵守他的約，記念他的訓詞而遵行的人。' },
                { verse: '路加福音 2 章 52 節', content: '52 耶穌的智慧和身量，並神和人喜愛他的心，都一齊增長。' },
                { verse: '申命記 6 章 6-9 節', content: '6 我今日所吩咐你的話都要記在心上， 7 也要殷勤教訓你的兒女，無論你坐在家裏，行在路上，躺下，起來，都要談論； 8 也要繫在手上為記號，戴在額上為經文； 9 又要寫在你房屋的門框上，並你的城門上。」' },
                { verse: '以弗所書 6 章 4 節', content: '4 你們作父親的，不要惹兒女的氣，只要照着主的教訓和警戒養育他們。' },
            ];
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__occasion_details_occasion_details__["a" /* OccasionDetailsPage */], { chineseContent: chineseContentForDetailPage, content: contentForDetailPage, title: title });
        }
        else if (title == 'Funeral') {
            var contentForDetailPage = [
                {
                    verse: 'John 11:25-26',
                    content: '25 Jesus said to her, “I am the resurrection and the life. The one who believes in me will live, even though they die; 26 and whoever lives by believing in me will never die. Do you believe this?”'
                },
                {
                    verse: '1 Thessalonians 4:13-14',
                    content: '13 Brothers and sisters, we do not want you to be uninformed about those who sleep in death, so that you do not grieve like the rest of mankind, who have no hope. 14 For we believe that Jesus died and rose again, and so we believe that God will bring with Jesus those who have fallen asleep in him. '
                },
                {
                    verse: 'John 14:1-4',
                    content: '1 “Do not let your hearts be troubled. You believe in God; believe also in me. 2 My Father’s house has many rooms; if that were not so, would I have told you that I am going there to prepare a place for you? 3 And if I go and prepare a place for you, I will come back and take you to be with me that you also may be where I am. 4 You know the way to the place where I am going.”'
                },
                {
                    verse: '1 Corinthians 15:42-44a',
                    content: '42 So will it be with the resurrection of the dead. The body that is sown is perishable, it is raised imperishable; 43 it is sown in dishonor, it is raised in glory; it is sown in weakness, it is raised in power; 44 it is sown a natural body, it is raised a spiritual body.'
                },
                {
                    verse: 'John 5:28-29',
                    content: '28 “Do not be amazed at this, for a time is coming when all who are in their graves will hear his voice 29 and come out—those who have done what is good will rise to live, and those who have done what is evil will rise to be condemned. '
                },
                {
                    verse: 'John 6:39-40',
                    content: '39 And this is the will of him who sent me, that I shall lose none of all those he has given me, but raise them up at the last day. 40 For my Father’s will is that everyone who looks to the Son and believes in him shall have eternal life, and I will raise them up at the last day.”'
                },
                {
                    verse: '2 Corinthians 4:16-18',
                    content: '16 Therefore we do not lose heart. Though outwardly we are wasting away, yet inwardly we are being renewed day by day. 17 For our light and momentary troubles are achieving for us an eternal glory that far outweighs them all. 18 So we fix our eyes not on what is seen, but on what is unseen, since what is seen is temporary, but what is unseen is eternal.'
                },
                {
                    verse: '2 Corinthians 5:1',
                    content: '1 For we know that if the earthly tent we live in is destroyed, we have a building from God, an eternal house in heaven, not built by human hands.'
                },
                {
                    verse: '1 Corinthians 15:54-57',
                    content: '54 When the perishable has been clothed with the imperishable, and the mortal with immortality, then the saying that is written will come true: “Death has been swallowed up in victory.” 55 “Where, O death, is your victory? Where, O death, is your sting?” 56 The sting of death is sin, and the power of sin is the law. 57 But thanks be to God! He gives us the victory through our Lord Jesus Christ.'
                },
                {
                    verse: 'Philippians 3:20-21',
                    content: '20 But our citizenship is in heaven. And we eagerly await a Savior from there, the Lord Jesus Christ, 21 who, by the power that enables him to bring everything under his control, will transform our lowly bodies so that they will be like his glorious body.'
                },
                {
                    verse: 'Revelations 21:1-4',
                    content: '1 Then I saw “a new heaven and a new earth,” for the first heaven and the first earth had passed away, and there was no longer any sea. 2 I saw the Holy City, the new Jerusalem, coming down out of heaven from God, prepared as a bride beautifully dressed for her husband. 3 And I heard a loud voice from the throne saying, “Look! God’s dwelling place is now among the people, and he will dwell with them. They will be his people, and God himself will be with them and be their God. 4 ‘He will wipe every tear from their eyes. There will be no more death’ or mourning or crying or pain, for the old order of things has passed away.”'
                },
                {
                    verse: 'Romans 8:37-39',
                    content: '37 No, in all these things we are more than conquerors through him who loved us. 38 For I am convinced that neither death nor life, neither angels nor demons, neither the present nor the future, nor any powers, 39 neither height nor depth, nor anything else in all creation, will be able to separate us from the love of God that is in Christ Jesus our Lord.'
                },
                {
                    verse: 'John 14:27',
                    content: '27 Peace I leave with you; my peace I give you. I do not give to you as the world gives. Do not let your hearts be troubled and do not be afraid.'
                },
                {
                    verse: 'Ecclesiastes 3:1-4',
                    content: '1 There is a time for everything, and a season for every activity under the heavens: 2 a time to be born and a time to die, a time to plant and a time to uproot, 3 a time to kill and a time to heal, a time to tear down and a time to build, 4 a time to weep and a time to laugh, a time to mourn and a time to dance,'
                },
            ];
            var chineseContentForDetailPage = [
                { verse: '約翰福音 11 章 25-26 節', content: '25 耶穌對她說：「復活在我，生命也在我！信我的人，雖然死了，也必復活。 26 凡活着信我的人必永遠不死。你信這話嗎？」' },
                { verse: '帖撒羅尼迦前書 4 章 13-14 節', content: '13 論到睡了的人，我們不願意弟兄們不知道，恐怕你們憂傷，像那些沒有指望的人一樣。 14 我們若信耶穌死而復活了，那已經在耶穌裏睡了的人，神也必將他與耶穌一同帶來。 ' },
                { verse: '約翰福音 14 章 1-4 節', content: '1 「你們心裏不要憂愁，你們信神，也當信我。 2 在我父的家裏有許多住處，若是沒有，我就早已告訴你們了。我去原是為你們預備地方去。 3 我若去為你們預備了地方，就必再來接你們到我那裏去；我在哪裏，叫你們也在那裏。 4我往哪裏去，你們知道；那條路，你們也知道。」' },
                { verse: '哥林多前書 15 章 42-44 節上', content: '42 死人復活也是這樣：所種的是必朽壞的，復活的是不朽壞的； 43 所種的是羞辱的，復活的是榮耀的；所種的是軟弱的，復活的是強壯的； 44 所種的是血氣的身體，復活的是靈性的身體。' },
                { verse: '約翰福音 5 章 28-29 節', content: '28 「你們不要把這事看作希奇。時候要到，凡在墳墓裏的，都要聽見他的聲音，就出來。 29 行善的，復活得生；作惡的，復活定罪。」' },
                { verse: '約翰福音 6 章 39-40 節', content: '39 差我來者的意思就是：他所賜給我的，叫我一個也不失落，在末日卻叫他復活。 40 因為我父的意思是叫一切見子而信的人得永生，並且在末日我要叫他復活。」' },
                { verse: '哥林多後書 4 章 16-18 節', content: '16 所以，我們不喪膽。外體雖然毀壞，內心卻一天新似一天。 17 我們這至暫至輕的苦楚，要為我們成就極重無比永遠的榮耀。 18 原來我們不是顧念所見的，乃是顧念所不見的；因為所見的是暫時的，所不見的是永遠的。' },
                { verse: '哥林多後書 5 章 1 節', content: '1 我們原知道，我們這地上的帳棚若拆毀了，必得神所造，不是人手所造，在天上永存的房屋。 ' },
                { verse: '哥林多前書 15 章 54-57 節', content: ' 54 這必朽壞的既變成不朽壞的，這必死的既變成不死的，那時經上所記「死被得勝吞滅」的話就應驗了。55 「死啊，你得勝的權勢在哪裏？死啊，你的毒鈎在哪裏？」 56 死的毒鈎就是罪，罪的權勢就是律法。 57 感謝神，使我們藉着我們的主耶穌基督得勝。' },
                { verse: '腓立比書 3 章 20-21 節', content: '20 我們卻是天上的國民，並且等候救主，就是主耶穌基督從天上降臨。 21 他要按着那能叫萬有歸服自己的大能，將我們這卑賤的身體改變形狀，和他自己榮耀的身體相似。' },
                { verse: '啟示錄 21 章 1-4 節', content: '1 我又看見一個新天新地。因為先前的天地已經過去了，海也不再有了。 2 我又看見聖城新耶路撒冷由神那裏從天而降，預備好了，就如新婦妝飾整齊，等候丈夫。3 我聽見有大聲音從寶座出來說：「看哪！神的帳幕在人間。他要與人同住，他們要作他的子民；神要親自與他們同在，作他們的神。 4  神要擦去他們一切的眼淚。不再有死亡，也不再有悲哀、哭號、疼痛，因為以前的事都過去了。」' },
                { verse: '羅馬書 8 章 37-39 節', content: '37 然而，靠着愛我們的主，在這一切的事上已經得勝有餘了。 38 因為我深信無論是死、是生，是天使、是掌權的，是有能的，是現在的事、是將來的事， 39 是高處的、是低處的，是別的受造之物，都不能叫我們與神的愛隔絕，這愛是在我們的主基督耶穌裏的。' },
                { verse: '約翰福音 14 章 27 節', content: '27 我留下平安給你們，我將我的平安賜給你們；我所賜的，不像世人所賜的。你們心裏不要憂愁，也不要膽怯。' },
                { verse: '傳道書 3 章 1-4 節', content: '1 凡事都有定期，天下萬務都有定時。2 生有時，死有時；栽種有時，拔出所栽種的也有時；3 殺戮有時，醫治有時；拆毀有時，建造有時；4 哭有時，笑有時；哀慟有時，跳舞有時；' }
            ];
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__occasion_details_occasion_details__["a" /* OccasionDetailsPage */], { chineseContent: chineseContentForDetailPage, content: contentForDetailPage, title: title });
        }
        else if (title == 'Illness') {
            var contentForDetailPage = [
                {
                    verse: 'James 5:14-15 ',
                    content: '14 Is anyone among you sick? Let them call the elders of the church to pray over them and anoint them with oil in the name of the Lord. 15 And the prayer offered in faith will make the sick person well; the Lord will raise them up. If they have sinned, they will be forgiven.'
                },
                {
                    verse: 'Psalm 23:1-3',
                    content: '1 The Lord is my shepherd, I lack nothing. 2 He makes me lie down in green pastures, he leads me beside quiet waters, 3 he refreshes my soul. He guides me along the right paths for his name’s sake.'
                },
                {
                    verse: 'Psalm 23:4',
                    content: '4 Even though I walk through the darkest valley, I will fear no evil, for you are with me; your rod and your staff, they comfort me.'
                },
                {
                    verse: 'Psalm 32:7',
                    content: '7 You are my hiding place; you will protect me from trouble and surround me with songs of deliverance.'
                },
                {
                    verse: 'Psalm 46:1-3',
                    content: '1 God is our refuge and strength, an ever-present help in trouble. 2 Therefore we will not fear, though the earth give way and the mountains fall into the heart of the sea, 3 though its waters roar and foam and the mountains quake with their surging.'
                },
                {
                    verse: 'Psalm 46:10',
                    content: '10 He says, “Be still, and know that I am God; I will be exalted among the nations, I will be exalted in the earth.”'
                },
                {
                    verse: 'Psalm 121:1-4',
                    content: '1 I lift up my eyes to the mountains—where does my help come from? 2 My help comes from the Lord, the Maker of heaven and earth. 3 He will not let your foot slip—he who watches over you will not slumber; 4 indeed, he who watches over Israel will neither slumber nor sleep.'
                },
                {
                    verse: 'Philippians 4:6-7',
                    content: '6 Do not be anxious about anything, but in every situation, by prayer and petition, with thanksgiving, present your requests to God. 7 And the peace of God, which transcends all understanding, will guard your hearts and your minds in Christ Jesus.'
                },
                {
                    verse: 'Philippians 4:12-13',
                    content: '12 I know what it is to be in need, and I know what it is to have plenty. I have learned the secret of being content in any and every situation, whether well fed or hungry, whether living in plenty or in want. 13 I can do all this through him who gives me strength.'
                },
                {
                    verse: '2 Corinthians 12:9',
                    content: '9 But he said to me, “My grace is sufficient for you, for my power is made perfect in weakness.” Therefore I will boast all the more gladly about my weaknesses, so that Christ’s power may rest on me.'
                },
                { verse: '1 Peter 5:7', content: '7 Cast all your anxiety on him because he cares for you.' },
                {
                    verse: '2 Corinthians 4:16-18',
                    content: '16 Therefore we do not lose heart. Though outwardly we are wasting away, yet inwardly we are being renewed day by day. 17 For our light and momentary troubles are achieving for us an eternal glory that far outweighs them all. 18 So we fix our eyes not on what is seen, but on what is unseen, since what is seen is temporary, but what is unseen is eternal.'
                },
                {
                    verse: 'Isaiah 40:30-31',
                    content: '30 Even youths grow tired and weary, and young men stumble and fall; 31 but those who hope in the Lord will renew their strength. They will soar on wings like eagles; they will run and not grow weary, they will walk and not be faint.'
                },
                {
                    verse: 'John 14:12-14',
                    content: '12 Very truly I tell you, whoever believes in me will do the works I have been doing, and they will do even greater things than these, because I am going to the Father. 13 And I will do whatever you ask in my name, so that the Father may be glorified in the Son. 14 You may ask me for anything in my name, and I will do it.'
                },
                {
                    verse: 'Matthew 14:14',
                    content: ' 14 When Jesus landed and saw a large crowd, he had compassion on them and healed their sick.'
                },
                {
                    verse: 'Luke 8:47-48',
                    content: '47 Then the woman, seeing that she could not go unnoticed, came trembling and fell at his feet. In the presence of all the people, she told why she had touched him and how she had been instantly healed.48 Then he said to her, “Daughter, your faith has healed you. Go in peace.”'
                }
            ];
            var chineseContentForDetailPage = [
                { verse: '雅各書 5 章 14-15 節', content: ' 14 你們中間有病了的呢，他就該請教會的長老來，他們可以奉主的名用油抹他，為他禱告。 15 出於信心的祈禱要救那病人，主必叫他起來；他若犯了罪，也必蒙赦免。' },
                { verse: '詩篇 23 篇 1-3 節', content: '1 耶和華是我的牧者，我必不至缺乏。 2 他使我躺臥在青草地上，領我在可安歇的水邊；3 他使我的靈魂甦醒，為自己的名引導我走義路。 ' },
                { verse: '詩篇 23 篇 4 節', content: '4 我雖然行過死蔭的幽谷，也不怕遭害，因為你與我同在；你的杖，你的竿，都安慰我。' },
                { verse: '詩篇 32 篇 7 節', content: '7 你是我藏身之處，你必保佑我脫離苦難，以得救的樂歌四面環繞我。' },
                { verse: '詩篇 46 篇 1-3 節', content: '1 神是我們的避難所，是我們的力量，是我們在患難中隨時的幫助！ 2 所以地雖改變，山雖搖動到海心，3 其中的水雖匉訇翻騰，山雖因海漲而戰抖，我們也不害怕。' },
                { verse: '詩篇 46 篇 10 節', content: '10 你們要休息，要知道我是神！我必在外邦中被尊崇，在遍地上也被尊崇。' },
                { verse: '詩篇 121 篇 1-4 節', content: '1 我要向山舉目，我的幫助從何而來？ 2 我的幫助從造天地的耶和華而來。3 他必不叫你的腳搖動，保護你的必不打盹！ 4 保護以色列的，也不打盹，也不睡覺。' },
                { verse: '腓立比書 4 章 6-7 節', content: '6 應當一無掛慮，只要凡事藉着禱告、祈求和感謝，將你們所要的告訴神。 7 神所賜出人意外的平安，必在基督耶穌裏，保守你們的心懷意念。' },
                { verse: '腓立比書 4 章 12-13 節', content: '12 我知道怎樣處卑賤，也知道怎樣處豐富，或飽足、或飢餓、或有餘、或缺乏，隨事隨在，我都得了秘訣。 13 我靠着那加給我力量的，凡事都能做。' },
                { verse: '哥林多後書 12 章 9 節', content: ' 9 他對我說：「我的恩典夠你用的，因為我的能力是在人的軟弱上顯得完全。」所以，我更喜歡誇自己的軟弱，好叫基督的能力覆庇我。 ' },
                { verse: '彼得前書 5 章 7 節', content: '7 你們要將一切的憂慮卸給神，因為他顧念你們。' },
                { verse: '哥林多後書 4 章 16-18 節', content: '16 所以，我們不喪膽。外體雖然毀壞，內心卻一天新似一天。 17 我們這至暫至輕的苦楚，要為我們成就極重無比永遠的榮耀。 18 原來我們不是顧念所見的，乃是顧念所不見的；因為所見的是暫時的，所不見的是永遠的。' },
                { verse: '以賽亞書 40 章 30-31 節', content: '30 就是少年人也要疲乏困倦，強壯的也必全然跌倒； 31 但那等候耶和華的，必從新得力。他們必如鷹展翅上騰，他們奔跑卻不困倦，行走卻不疲乏。' },
                { verse: '約翰福音 14 章 12-14 節', content: ' 12 我實實在在地告訴你們：我所做的事，信我的人也要做，並且要做比這更大的事，因為我往父那裏去。 13 你們奉我的名無論求甚麼，我必成就，叫父因兒子得榮耀。 14 你們若奉我的名求甚麼，我必成就。' },
                { verse: '馬太福音 14 章 14 節', content: '14 耶穌出來，見有許多的人，就憐憫他們，治好了他們的病人。' },
                { verse: '路加福音 8 章 47-48 節', content: '47 那女人知道不能隱藏，就戰戰兢兢地來俯伏在耶穌腳前，把摸他的緣故和怎樣立刻得好了，當着眾人都說出來。48 耶穌對她說：「女兒，你的信救了你；平平安安地去吧！」' }
            ];
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__occasion_details_occasion_details__["a" /* OccasionDetailsPage */], { chineseContent: chineseContentForDetailPage, content: contentForDetailPage, title: title });
        }
        else {
            var contentForDetailPage = [
                {
                    verse: 'Genesis 2:20-24',
                    content: '20 So the man gave names to all the livestock, the birds in the sky and all the wild animals. But for Adam no suitable helper was found. 21 So the Lord God caused the man to fall into a deep sleep; and while he was sleeping, he took one of the man’s ribs and then closed up the place with flesh. 22 Then the Lord God made a woman from the rib he had taken out of the man, and he brought her to the man. 23 The man said, “This is now bone of my bones and flesh of my flesh; she shall be called ‘woman,’ for she was taken out of man.” 24 That is why a man leaves his father and mother and is united to his wife, and they become one flesh.'
                },
                {
                    verse: 'Matthew 19:4-6',
                    content: '4 “Haven’t you read,” he replied, “that at the beginning the Creator ‘made them male and female,’ 5 and said, ‘For this reason a man will leave his father and mother and be united to his wife, and the two will become one flesh’? 6 So they are no longer two, but one flesh. Therefore what God has joined together, let no one separate.”'
                },
                {
                    verse: '1 Corinthians 13:4-7',
                    content: '4 Love is patient, love is kind. It does not envy, it does not boast, it is not proud. 5 It does not dishonor others, it is not self-seeking, it is not easily angered, it keeps no record of wrongs. 6 Love does not delight in evil but rejoices with the truth. 7 It always protects, always trusts, always hopes, always perseveres.'
                },
                {
                    verse: 'John 13:34-35',
                    content: '34 “A new command I give you: Love one another. As I have loved you, so you must love one another. 35 By this everyone will know that you are my disciples, if you love one another.”'
                },
                {
                    verse: 'Romans 12:9-13',
                    content: '9 Love must be sincere. Hate what is evil; cling to what is good. 10 Be devoted to one another in love. Honor one another above yourselves. 11 Never be lacking in zeal, but keep your spiritual fervor, serving the Lord. 12 Be joyful in hope, patient in affliction, faithful in prayer. 13 Share with the Lord’s people who are in need.Practice hospitality.'
                },
                {
                    verse: 'Joshua 24:15',
                    content: '15 ... then choose for yourselves this day whom you will serve, ...But as for me and my household, we will serve the Lord'
                },
                {
                    verse: 'Psalm 103:17-18',
                    content: '17 But from everlasting to everlasting the Lord’s love is with those who fear him, and his righteousness with their children’s children— 18 with those who keep his covenant and remember to obey his precepts.'
                },
                {
                    verse: 'Ephesians 5:22-24',
                    content: '22 Wives, submit yourselves to your own husbands as you do to the Lord. 23  For the husband is the head of the wife as Christ is the head of the church, his body, of which he is the Savior. 24 Now as the church submits to Christ, so also wives should submit to their husbands in everything.'
                },
                {
                    verse: 'Ephesians 5:25-28',
                    content: '25 Husbands, love your wives, just as Christ loved the church and gave himself up for her 26 to make her holy, cleansing her by the washing with water through the word, 27 and to present her to himself as a radiant church, without stain or wrinkle or any other blemish, but holy and blameless. 28 In this same way, husbands ought to love their wives as their own bodies. He who loves his wife loves himself. '
                },
                {
                    verse: '1 Peter 3:7',
                    content: '7 Husbands, in the same way be considerate as you live with your wives, and treat them with respect as the weaker partner and as heirs with you of the gracious gift of life, so that nothing will hinder your prayers.'
                }
            ];
            var chineseContentForDetailPage = [
                { verse: '創世記 2 章 20-24 節', content: '20 那人便給一切牲畜和空中飛鳥、野地走獸都起了名。只是那人沒有遇見配偶幫助他。21 耶和華神使他沉睡，他就睡了；於是取下他的一條肋骨，又把肉合起來。 22 耶和華神就用那人身上所取的肋骨造成一個女人，領她到那人跟前。 23 那人說：「這是我骨中的骨，肉中的肉，可以稱她為『女人』，因為她是從男人身上取出來的。」24 因此，人要離開父母與妻子連合，二人成為一體。' },
                { verse: '馬太福音 19 章 4-6 節', content: '4 耶穌回答說：「那起初造人的，是造男造女， 5 並且說：『因此，人要離開父母，與妻子連合，二人成為一體。』這經你們沒有念過嗎？ 6 既然如此，夫妻不再是兩個人，乃是一體的了。所以，神配合的，人不可分開。」' },
                { verse: '哥林多前書 13 章 4-7 節', content: '4 愛是恆久忍耐，又有恩慈；愛是不嫉妒，愛是不自誇，不張狂， 5 不作害羞的事，不求自己的益處，不輕易發怒，不計算人的惡， 6 不喜歡不義，只喜歡真理； 7 凡事包容，凡事相信，凡事盼望，凡事忍耐；' },
                { verse: '約翰福音 13 章 34-35 節', content: '34 「我賜給你們一條新命令，乃是叫你們彼此相愛；我怎樣愛你們，你們也要怎樣相愛。 35 你們若有彼此相愛的心，眾人因此就認出你們是我的門徒了。」' },
                { verse: '羅馬書 12 章 9-13 節', content: '9 愛人不可虛假，惡要厭惡，善要親近。 10 愛弟兄，要彼此親熱；恭敬人，要彼此推讓。 11 殷勤不可懶惰，要心裏火熱，常常服事主。 12 在指望中要喜樂，在患難中要忍耐，禱告要恆切。 13 聖徒缺乏要幫補，客要一味地款待。' },
                { verse: '約書亞記 24 章 15 節', content: '15 若是你們以事奉耶和華為不好，今日就可以選擇所要事奉的：是你們列祖在大河那邊所事奉的神呢？是你們所住這地的亞摩利人的神呢？至於我和我家，我們必定事奉耶和華。」' },
                { verse: '詩篇 103 篇 17-18 節', content: '17 但耶和華的慈愛歸於敬畏他的人，從亙古到永遠；他的公義也歸於子子孫孫， 18 就是那些遵守他的約，記念他的訓詞而遵行的人。' },
                { verse: '以弗所書 5 章 22-24 節', content: '22 你們作妻子的，當順服自己的丈夫，如同順服主。 23 因為丈夫是妻子的頭，如同基督是教會的頭，他又是教會全體的救主。 24 教會怎樣順服基督，妻子也要怎樣凡事順服丈夫。' },
                { verse: '以弗所書 5 章 25-28 節', content: '25 你們作丈夫的，要愛你們的妻子，正如基督愛教會，為教會捨己。 26 要用水藉着道把教會洗淨，成為聖潔， 27可以獻給自己，作個榮耀的教會，毫無玷污、皺紋等類的病，乃是聖潔沒有瑕疵的。 28 丈夫也當照樣愛妻子，如同愛自己的身子，愛妻子便是愛自己了。 ' },
                { verse: '彼得前書 3 章 7 節', content: '7 你們作丈夫的也要按情理和妻子同住，因她比你軟弱，與你一同承受生命之恩的，所以要敬重她。這樣，便叫你們的禱告沒有阻礙。' }
            ];
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__occasion_details_occasion_details__["a" /* OccasionDetailsPage */], { chineseContent: chineseContentForDetailPage, content: contentForDetailPage, title: title });
        }
    };
    return OccasionPage;
}());
OccasionPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-occasion',template:/*ion-inline-start:"/Users/tsechihin/Documents/ionicProject/livingWater/src/pages/occasion/occasion.html"*/'<!--\n  Generated template for the OccasionPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon id="menuButton" name="menu"></ion-icon>\n    </button>\n    <ion-title ><span text-wrap text-color="my-custom-color" >Select Occasions</span></ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <ion-list>\n    <button ion-item *ngFor="let occasion of occasions" (click)="openOccasionDetailPage(occasion.title)">\n      {{occasion.title}}\n    </button>\n  </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"/Users/tsechihin/Documents/ionicProject/livingWater/src/pages/occasion/occasion.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__["a" /* StatusBar */]])
], OccasionPage);

//# sourceMappingURL=occasion.js.map

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OccasionDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(26);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the OccasionDetailsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var OccasionDetailsPage = (function () {
    function OccasionDetailsPage(navCtrl, navParams, statusBar) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.statusBar = statusBar;
        this.engContent = new Array();
        this.statusBar.styleBlackTranslucent();
        this.records = this.navParams.get('content');
        this.records.forEach(function (item) {
            _this.engContent.push(Object.assign({}, item));
        });
        this.chineseContent = this.navParams.get('chineseContent');
        this.title = this.navParams.get('title');
    }
    OccasionDetailsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad OccasionDetailsPage');
    };
    OccasionDetailsPage.prototype.translateChinese = function (index) {
        this.records[index].verse = this.chineseContent[index].verse;
        this.records[index].content = this.chineseContent[index].content;
    };
    OccasionDetailsPage.prototype.translateEng = function (index) {
        this.records[index].verse = this.engContent[index].verse;
        this.records[index].content = this.engContent[index].content;
    };
    return OccasionDetailsPage;
}());
OccasionDetailsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-occasion-details',template:/*ion-inline-start:"/Users/tsechihin/Documents/ionicProject/livingWater/src/pages/occasion-details/occasion-details.html"*/'<!--\n  Generated template for the OccasionDetailsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title><span text-color="my-custom-color">{{title}}</span></ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-card text-center *ngFor="let record of records; let i = index" >\n\n    <ion-card-header text-wrap>\n      {{record.verse}}\n    </ion-card-header>\n    <ion-card-content>\n      {{record.content}}\n      <div>\n        <button ion-button id="translateChineseButton" (click)="translateEng(i)">eng</button>\n        <button ion-button id="translateButton" (click)="translateChinese(i)">繁</button>\n      </div>\n\n    </ion-card-content>\n\n  </ion-card>\n\n</ion-content>\n'/*ion-inline-end:"/Users/tsechihin/Documents/ionicProject/livingWater/src/pages/occasion-details/occasion-details.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */]])
], OccasionDetailsPage);

//# sourceMappingURL=occasion-details.js.map

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TopicPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_topic_topic__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__topic_detail_topic_detail__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(26);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the TopicPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var TopicPage = (function () {
    function TopicPage(navCtrl, navParams, topicProvider, statusBar) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.topicProvider = topicProvider;
        this.statusBar = statusBar;
        this.searchTerm = '';
        this.statusBar.styleBlackTranslucent();
    }
    TopicPage.prototype.ionViewDidLoad = function () {
        this.setFilteredItems();
    };
    TopicPage.prototype.setFilteredItems = function () {
        this.topics = this.topicProvider.filterTopics(this.searchTerm);
    };
    TopicPage.prototype.openTopicDetailPage = function (title) {
        if (title == 'Bible/Scripture/Word of God') {
            var topicContent = [
                { verse: '2 Timothy 3:16-17', content: ' 16 All Scripture is God-breathed and is useful for teaching, rebuking, correcting and training in righteousness, 17 so that the servant of God may be thoroughly equipped for every good work.' },
                { verse: 'Deuteronomy 6:6-9', content: ' 6 These commandments that I give you today are to be on your hearts. 7 Impress them on your children. Talk about them when you sit at home and when you walk along the road, when you lie down and when you get up. 8 Tie them as symbols on your hands and bind them on your foreheads. 9 Write them on the doorframes of your houses and on your gates.' },
                { verse: 'Ephesians 6:13-17', content: '13 Therefore put on the full armor of God, so that when the day of evil comes, you may be able to stand your ground, and after you have done everything, to stand. 14 Stand firm then, with the belt of truth buckled around your waist, with the breastplate of righteousness in place, 15 and with your feet fitted with the readiness that comes from the gospel of peace. 16 In addition to all this, take up the shield of faith, with which you can extinguish all the flaming arrows of the evil one. 17 Take the helmet of salvation and the sword of the Spirit, which is the word of God.' },
                { verse: 'John 14:26', content: ' 26 But the Advocate, the Holy Spirit, whom the Father will send in my name, will teach you all things and will remind you of everything I have said to you.' },
                { verse: 'Joshua 1:8', content: '8 Keep this Book of the Law always on your lips; meditate on it day and night, so that you may be careful to do everything written in it. Then you will be prosperous and successful.' },
                { verse: 'Luke 1:1-4', content: '1 Many have undertaken to draw up an account of the things that have been fulfilled among us, 2 just as they were handed down to us by those who from the first were eyewitnesses and servants of the word. 3 With this in mind, since I myself have carefully investigated everything from the beginning, I too decided to write an orderly account for you, most excellent Theophilus, 4 so that you may know the certainty of the things you have been taught.' },
                { verse: 'Matthew 24:35', content: '35 Heaven and earth will pass away, but my words will never pass away.' },
                { verse: 'Matthew 7:24-27', content: '24 “Therefore everyone who hears these words of mine and puts them into practice is like a wise man who built his house on the rock. 25 The rain came down, the streams rose, and the winds blew and beat against that house; yet it did not fall, because it had its foundation on the rock. 26 But everyone who hears these words of mine and does not put them into practice is like a foolish man who built his house on sand. 27 The rain came down, the streams rose, and the winds blew and beat against that house, and it fell with a great crash.”' },
                { verse: 'Psalms 1:1-3', content: '1 Blessed is the one who does not walk in step with the wicked or stand in the way that sinners take or sit in the company of mockers, 2 but whose delight is in the law of the Lord, and who meditates on his law day and night. 3 That person is like a tree planted by streams of water, which yields its fruit in season and whose leaf does not wither—whatever they do prospers.' },
                { verse: 'James 1:22-25 ', content: '22 Do not merely listen to the word, and so deceive yourselves. Do what it says. 23 Anyone who listens to the word but does not do what it says is like someone who looks at his face in a mirror 24 and, after looking at himself, goes away and immediately forgets what he looks like. 25 But whoever looks intently into the perfect law that gives freedom, and continues in it—not forgetting what they have heard, but doing it—they will be blessed in what they do.' },
                { verse: 'Psalms 119:105', content: '105 Your word is a lamp for my feet, a light on my path.' }
            ];
            var chineseContentForDetailPage = [
                { verse: '提摩太後書 3 章 16-17 節', content: '16 聖經都是神所默示的，於教訓、督責、使人歸正、教導人學義，都是有益的， 17 叫屬神的人得以完全，預備行各樣的善事。' },
                { verse: '申命記 6 章 6-9 節', content: '6 我今日所吩咐你的話都要記在心上， 7 也要殷勤教訓你的兒女，無論你坐在家裏，行在路上，躺下，起來，都要談論； 8 也要繫在手上為記號，戴在額上為經文； 9 又要寫在你房屋的門框上，並你的城門上。」' },
                { verse: '以弗所書 6 章 13-17 節', content: ' 13 所以，要拿起神所賜的全副軍裝，好在磨難的日子抵擋仇敵，並且成就了一切，還能站立得住。 14 所以要站穩了，用真理當作帶子束腰，用公義當作護心鏡遮胸， 15又用平安的福音當作預備走路的鞋穿在腳上。 16 此外，又拿着信德當作籐牌，可以滅盡那惡者一切的火箭。 17 並戴上救恩的頭盔，拿着聖靈的寶劍，就是神的道。' },
                { verse: '約翰福音 14 章 26 節', content: '26 但保惠師，就是父因我的名所要差來的聖靈，他要將一切的事指教你們，並且要叫你們想起我對你們所說的一切話。' },
                { verse: '約書亞記 1 章 8 節', content: ' 8 這律法書不可離開你的口，總要晝夜思想，好使你謹守遵行這書上所寫的一切話。如此，你的道路就可以亨通，凡事順利。' },
                { verse: '路加福音 1 章 1-4 節', content: '1-2 提阿非羅大人哪，有好些人提筆作書，述說在我們中間所成就的事，是照傳道的人從起初親眼看見又傳給我們的。 3 這些事我既從起頭都詳細考察了，就定意要按着次序寫給你， 4 使你知道所學之道都是確實的。' },
                { verse: '馬太福音 24 章 35 節', content: '35 天地要廢去，我的話卻不能廢去。' },
                { verse: '馬太福音 7 章 24-27 節', content: '24 「所以，凡聽見我這話就去行的，好比一個聰明人，把房子蓋在磐石上。 25 雨淋，水沖，風吹，撞着那房子，房子總不倒塌，因為根基立在磐石上。 26 凡聽見我這話不去行的，好比一個無知的人，把房子蓋在沙土上。 27 雨淋，水沖，風吹，撞着那房子，房子就倒塌了，並且倒塌得很大。」' },
                { verse: '詩篇 1 篇 1-3 節', content: '1 不從惡人的計謀，不站罪人的道路，不坐褻慢人的座位，2 惟喜愛耶和華的律法，晝夜思想，這人便為有福！ 3 他要像一棵樹栽在溪水旁，按時候結果子，葉子也不枯乾。凡他所做的盡都順利。 ' },
                { verse: '雅各書 1 章 22-25 節', content: '22 但是你們要行道，不要單單聽道，自己欺騙自己； 23 因為人若聽道而不行道，就像人對着鏡子察看自己天生的容貌， 24 他把自己察看一番後走開，立刻忘掉了自己是甚麼樣子。 25 相反，人詳細察看那完全的、使人自由的律法，而且常常都是這樣，不是聽過就忘掉，而是身體力行，這樣的人在他所做的事上必定蒙福。' },
                { verse: '詩篇 119 篇 105 節', content: '105 你的話是我腳前的燈，是我路上的光。' }
            ];
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__topic_detail_topic_detail__["a" /* TopicDetailPage */], { chineseContent: chineseContentForDetailPage, content: topicContent, title: title });
        }
        else if (title == 'Christian fellowship') {
            var topicContent = [
                { verse: 'John 13:34-35', content: '34 “A new command I give you: Love one another. As I have loved you, so you must love one another. 35 By this everyone will know that you are my disciples, if you love one another.”' },
                { verse: 'Hebrews 10:24-25', content: '24 And let us consider how we may spur one another on toward love and good deeds, 25 not giving up meeting together, as some are in the habit of doing, but encouraging one another—and all the more as you see the Day approaching.' },
                { verse: 'Ephesians 4:2-6', content: '2 Be completely humble and gentle; be patient, bearing with one another in love. 3 Make every effort to keep the unity of the Spirit through the bond of peace. 4 There is one body and one Spirit, just as you were called to one hope when you were called; 5 one Lord, one faith, one baptism; 6 one God and Father of all, who is over all and through all and in all.' },
                { verse: 'Ephesians 4:25', content: '25 Therefore each of you must put off falsehood and speak truthfully to your neighbor, for we are all members of one body.' },
                { verse: 'Romans 12:9-13', content: '9 Love must be sincere. Hate what is evil; cling to what is good. 10 Be devoted to one another in love. Honor one another above yourselves. 11 Never be lacking in zeal, but keep your spiritual fervor, serving the Lord. 12 Be joyful in hope, patient in affliction, faithful in prayer. 13 Share with the Lord’s people who are in need. Practice hospitality.' },
                { verse: 'Colossians 3:13', content: '13 Bear with each other and forgive one another if any of you has a grievance against someone. Forgive as the Lord forgave you.' },
                { verse: 'James 5:16', content: '16 Therefore confess your sins to each other and pray for each other so that you may be healed. The prayer of a righteous person is powerful and effective.' },
                { verse: 'Romans 15:1-3', content: '1 We who are strong ought to bear with the failings of the weak and not to please ourselves. 2 Each of us should please our neighbors for their good, to build them up. 3 For even Christ did not please himself but, as it is written: “The insults of those who insult you have fallen on me.”' },
                { verse: 'Romans 12:3', content: '3 For by the grace given me I say to every one of you: Do not think of yourself more highly than you ought, but rather think of yourself with sober judgment, in accordance with the faith God has distributed to each of you.' },
                { verse: 'Matthew 18:19-20', content: '19 “Again, truly I tell you that if two of you on earth agree about anything they ask for, it will be done for them by my Father in heaven. 20 For where two or three gather in my name, there am I with them.”' },
                { verse: 'Philippians 2:2-4', content: '2 then make my joy complete by being like-minded, having the same love, being one in spirit and of one mind. 3 Do nothing out of selfish ambition or vain conceit. Rather, in humility value others above yourselves, 4 not looking to your own interests but each of you to the interests of the others.' },
                { verse: 'Colossians 3:16', content: '16 Let the message of Christ dwell among you richly as you teach and admonish one another with all wisdom through psalms, hymns, and songs from the Spirit, singing to God with gratitude in your hearts.' }
            ];
            var chineseContentForDetailPage = [
                { verse: '約翰福音 13 章 34-35 節', content: '34 「我賜給你們一條新命令，乃是叫你們彼此相愛；我怎樣愛你們，你們也要怎樣相愛。 35 你們若有彼此相愛的心，眾人因此就認出你們是我的門徒了。」' },
                { verse: '希伯來書 10 章 24-25 節', content: '24 又要彼此相顧，激發愛心，勉勵行善。 25 你們不可停止聚會，好像那些停止慣了的人，倒要彼此勸勉。既知道那日子臨近，就更當如此。' },
                { verse: '以弗所書 4 章 2-6 節', content: ' 2 凡事謙虛、溫柔、忍耐，用愛心互相寬容，3 用和平彼此聯絡，竭力保守聖靈所賜合而為一的心。 4 身體只有一個，聖靈只有一個，正如你們蒙召，同有一個指望。 5 一主，一信，一洗， 6 一神，就是眾人的父，超乎眾人之上，貫乎眾人之中，也住在眾人之內。' },
                { verse: '以弗所書 4 章 25 節', content: '25 所以你們要棄絕謊言，各人與鄰舍說實話，因為我們是互相為肢體。' },
                { verse: '羅馬書 12 章 9-13 節', content: '9 愛人不可虛假，惡要厭惡，善要親近。 10 愛弟兄，要彼此親熱；恭敬人，要彼此推讓。 11 殷勤不可懶惰，要心裏火熱，常常服事主。 12 在指望中要喜樂，在患難中要忍耐，禱告要恆切。 13 聖徒缺乏要幫補，客要一味地款待。' },
                { verse: '歌羅西書 3 章 13 節', content: ' 13 倘若這人與那人有嫌隙，總要彼此包容，彼此饒恕；主怎樣饒恕了你們，你們也要怎樣饒恕人。' },
                { verse: '雅各書 5 章 16 節', content: '16 所以你們要彼此認罪，互相代求，使你們可以得醫治。義人祈禱所發的力量是大有功效的。' },
                { verse: '羅馬書 15 章 1-3 節', content: '1 我們堅固的人應該擔代不堅固人的軟弱，不求自己的喜悅。 2 我們各人務要叫鄰舍喜悅，使他得益處，建立德行。 3 因為基督也不求自己的喜悅，如經上所記：「辱罵你人的辱罵都落在我身上。」' },
                { verse: '羅馬書 12 章 3 節', content: '3 我憑着所賜我的恩，對你們各人說：不要看自己過於所當看的，要照着神所分給各人信心的大小，看得合乎中道。 ' },
                { verse: '馬太福音 18 章 19-20 節', content: '19 「我又告訴你們：若是你們中間有兩個人在地上同心合意地求甚麼事，我在天上的父必為他們成全。 20 因為無論在哪裏，有兩三個人奉我的名聚會，那裏就有我在他們中間。」' },
                { verse: '腓立比書 2 章 2-4 節', content: '2 你們就要意念相同，愛心相同，有一樣的心思，有一樣的意念，使我的喜樂可以滿足。 3 凡事不可結黨，不可貪圖虛浮的榮耀；只要存心謙卑，各人看別人比自己強。 4 各人不要單顧自己的事，也要顧別人的事。 ' },
                { verse: '歌羅西書 3 章 16 節', content: ' 16 當用各樣的智慧，把基督的道理豐豐富富地存在心裏，用詩章、頌詞、靈歌，彼此教導，互相勸戒，心被恩感，歌頌神。' }
            ];
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__topic_detail_topic_detail__["a" /* TopicDetailPage */], { chineseContent: chineseContentForDetailPage, content: topicContent, title: title });
        }
        else if (title == 'Church unity') {
            var topicContent = [
                { verse: '1 Corinthians 1:10', content: '10 I appeal to you, brothers and sisters, in the name of our Lord Jesus Christ, that all of you agree with one another in what you say and that there be no divisions among you, but that you be perfectly united in mind and thought. ' },
                { verse: '1 Corinthians 1:11-13', content: '11 My brothers and sisters, some from Chloe’s household have informed me that there are quarrels among you. 12 What I mean is this: One of you says, “I follow Paul”; another, “I follow Apollos”; another, “I follow Cephas”; still another, “I follow Christ.” 13 Is Christ divided? Was Paul crucified for you? Were you baptized in the name of Paul? ' },
                { verse: '1 Corinthians 3:3-5', content: '3 You are still worldly. For since there is jealousy and quarreling among you, are you not worldly? Are you not acting like mere humans? 4 For when one says, “I follow Paul,” and another, “I follow Apollos,” are you not mere human beings? 5 What, after all, is Apollos? And what is Paul? Only servants, through whom you came to believe—as the Lord has assigned to each his task.' },
                { verse: 'Ephesians 2:19-22', content: '19 Consequently, you are no longer foreigners and strangers, but fellow citizens with God’s people and also members of his household, 20 built on the foundation of the apostles and prophets, with Christ Jesus himself as the chief cornerstone. 21 In him the whole building is joined together and rises to become a holy temple in the Lord. 22 And in him you too are being built together to become a dwelling in which God lives by his Spirit.' },
                { verse: 'Ephesians 4:16', content: '16 From him the whole body, joined and held together by every supporting ligament, grows and builds itself up in love, as each part does its work.' },
                { verse: 'Ephesians 4:2-6', content: '2 Be completely humble and gentle; be patient, bearing with one another in love. 3 Make every effort to keep the unity of the Spirit through the bond of peace. 4 There is one body and one Spirit, just as you were called to one hope when you were called; 5 one Lord, one faith, one baptism; 6 one God and Father of all, who is over all and through all and in all.' },
                { verse: 'James 4:1-2', content: '1 What causes fights and quarrels among you? Don’t they come from your desires that battle within you? 2 You desire but do not have, so you kill. You covet but you cannot get what you want, so you quarrel and fight. You do not have because you do not ask God.' },
                { verse: 'Romans 12:4-8', content: '4 For just as each of us has one body with many members, and these members do not all have the same function, 5 so in Christ we, though many, form one body, and each member belongs to all the others. 6 We have different gifts, according to the grace given to each of us. If your gift is prophesying, then prophesy in accordance with your faith; 7 if it is serving, then serve; if it is teaching, then teach; 8 if it is to encourage, then give encouragement; if it is giving, then give generously; if it is to lead, do it diligently; if it is to show mercy, do it cheerfully.' },
                { verse: 'Romans 16:17-18', content: '17 I urge you, brothers and sisters, to watch out for those who cause divisions and put obstacles in your way that are contrary to the teaching you have learned. Keep away from them. 18 For such people are not serving our Lord Christ, but their own appetites. By smooth talk and flattery they deceive the minds of naive people. ' },
                { verse: 'John 17:20-21', content: '20 “My prayer is not for them alone. I pray also for those who will believe in me through their message, 21 that all of them may be one, Father, just as you are in me and I am in you. May they also be in us so that the world may believe that you have sent me.' }
            ];
            var chineseContentForDetailPage = [
                { verse: '哥林多前書 1 章 10 節', content: '10 弟兄們，我藉我們主耶穌基督的名，勸你們都說一樣的話。你們中間也不可分黨，只要一心一意，彼此相合。' },
                { verse: '哥林多前書 1 章 11-13 節', content: '11 因為革來氏家裏的人曾對我提起弟兄們來，說你們中間有紛爭。 12 我的意思就是你們各人說：「我是屬保羅的」，「我是屬亞波羅的」，「我是屬磯法的」，「我是屬基督的」。13 基督是分開的嗎？保羅為你們釘了十字架嗎？你們是奉保羅的名受了洗嗎？ ' },
                { verse: '哥林多前書 3 章 3-5 節', content: '3 你們仍是屬肉體的，因為在你們中間有嫉妒、紛爭，這豈不是屬乎肉體、照着世人的樣子行嗎？ 4 有說：「我是屬保羅的。」有說：「我是屬亞波羅的。」這豈不是你們和世人一樣嗎？5 亞波羅算甚麼？保羅算甚麼？無非是執事，照主所賜給他們各人的，引導你們相信。 ' },
                { verse: '以弗所書 2 章 19-22 節', content: '19 這樣，你們不再作外人和客旅，是與聖徒同國，是神家裏的人了。 20 並且被建造在使徒和先知的根基上，有基督耶穌自己為房角石， 21 各房靠他聯絡得合式，漸漸成為主的聖殿。 22 你們也靠他同被建造，成為神藉着聖靈居住的所在。' },
                { verse: '以弗所書 4 章 16 節', content: '16 全身都靠他聯絡得合式，百節各按各職，照着各體的功用彼此相助，便叫身體漸漸增長，在愛中建立自己。' },
                { verse: '以弗所書 4 章 2-6 節', content: ' 2 凡事謙虛、溫柔、忍耐，用愛心互相寬容，3 用和平彼此聯絡，竭力保守聖靈所賜合而為一的心。 4 身體只有一個，聖靈只有一個，正如你們蒙召，同有一個指望。 5 一主，一信，一洗， 6 一神，就是眾人的父，超乎眾人之上，貫乎眾人之中，也住在眾人之內。' },
                { verse: '雅各書 4 章 1-2 節', content: '1 你們中間的爭戰、鬥毆，是從哪裏來的呢？不是從你們百體中戰鬥之私慾來的嗎？ 2 你們貪戀，還是得不着；你們殺害嫉妒，又鬥毆爭戰，也不能得。你們得不着，是因為你們不求；' },
                { verse: '羅馬書 12 章 4-8 節', content: ' 4 正如我們一個身子上有好些肢體，肢體也不都是一樣的用處。 5 我們這許多人，在基督裏成為一身，互相聯絡作肢體，也是如此。 6 按我們所得的恩賜，各有不同：或說預言，就當照着信心的程度說預言； 7 或作執事，就當專一執事；或作教導的，就當專一教導； 8 或作勸化的，就當專一勸化；施捨的，就當誠實；治理的，就當殷勤；憐憫人的，就當甘心。' },
                { verse: '羅馬書 16 章 17-18 節', content: '17 弟兄們，那些離間你們、叫你們跌倒、背乎所學之道的人，我勸你們要留意躲避他們。 18 因為這樣的人不服事我們的主基督，只服事自己的肚腹，用花言巧語誘惑那些老實人的心。' },
                { verse: '約翰福音 17 章 20-21 節', content: '20 「我不但為這些人祈求，也為那些因他們的話信我的人祈求， 21 使他們都合而為一。正如你父在我裏面，我在你裏面，使他們也在我們裏面，叫世人可以信你差了我來。' }
            ];
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__topic_detail_topic_detail__["a" /* TopicDetailPage */], { chineseContent: chineseContentForDetailPage, content: topicContent, title: title });
        }
        else if (title == 'Divorce and re-marriage') {
            var topicContent = [
                { verse: 'Luke 16:18', content: '18 “Anyone who divorces his wife and marries another woman commits adultery, and the man who marries a divorced woman commits adultery.' },
                { verse: 'Matthew 19:3-6', content: '3 Some Pharisees came to him to test him. They asked, “Is it lawful for a man to divorce his wife for any and every reason?” 4 “Haven’t you read,” he replied, “that at the beginning the Creator ‘made them male and female,’ 5 and said, ‘For this reason a man will leave his father and mother and be united to his wife, and the two will become one flesh’? 6 So they are no longer two, but one flesh. Therefore what God has joined together, let no one separate.”' },
                { verse: 'Matthew 19:7-9', content: '7 “Why then,” they asked, “did Moses command that a man give his wife a certificate of divorce and send her away?” 8 Jesus replied, “Moses permitted you to divorce your wives because your hearts were hard. But it was not this way from the beginning. 9 I tell you that anyone who divorces his wife, except for sexual immorality, and marries another woman commits adultery.”' },
                { verse: 'Matthew 5:31-32', content: '31 “It has been said, ‘Anyone who divorces his wife must give her a certificate of divorce.’ 32 But I tell you that anyone who divorces his wife, except for sexual immorality, makes her the victim of adultery, and anyone who marries a divorced woman commits adultery.' },
                { verse: '1 Corinthians 7:10-11', content: '10 To the married I give this command (not I, but the Lord): A wife must not separate from her husband. 11 But if she does, she must remain unmarried or else be reconciled to her husband. And a husband must not divorce his wife.' },
                { verse: '1 Corinthians 7:12-16', content: '12 To the rest I say this (I, not the Lord): If any brother has a wife who is not a believer and she is willing to live with him, he must not divorce her. 13 And if a woman has a husband who is not a believer and he is willing to live with her, she must not divorce him. 14 For the unbelieving husband has been sanctified through his wife, and the unbelieving wife has been sanctified through her believing husband. Otherwise your children would be unclean, but as it is, they are holy. 15 But if the unbeliever leaves, let it be so. The brother or the sister is not bound in such circumstances; God has called us to live in peace. 16 How do you know, wife, whether you will save your husband? Or, how do you know, husband, whether you will save your wife?' },
                { verse: '1 Corinthians 7:39-40', content: '39 A woman is bound to her husband as long as he lives. But if her husband dies, she is free to marry anyone she wishes, but he must belong to the Lord. 40 In my judgment, she is happier if she stays as she is—and I think that I too have the Spirit of God.' },
                { verse: '1 Corinthians 7:8-9', content: '8 Now to the unmarried and the widows I say: It is good for them to stay unmarried, as I do. 9 But if they cannot control themselves, they should marry, for it is better to marry than to burn with passion.' }
            ];
            var chineseContentForDetailPage = [
                { verse: '路加福音 16 章 18 節', content: '18 「凡休妻另娶的就是犯姦淫，娶被休之妻的，也是犯姦淫。」' },
                { verse: '馬太福音 19 章 3-6 節', content: '3 有法利賽人來試探耶穌說：「人無論甚麼緣故都可以休妻嗎？」4 耶穌回答說：「那起初造人的，是造男造女， 5 並且說：『因此，人要離開父母，與妻子連合，二人成為一體。』這經你們沒有念過嗎？ 6 既然如此，夫妻不再是兩個人，乃是一體的了。所以，神配合的，人不可分開。」' },
                { verse: '馬太福音 19 章 7-9 節', content: '7 法利賽人說：「這樣，摩西為甚麼吩咐給妻子休書，就可以休她呢？」8 耶穌說：「摩西因為你們的心硬，所以許你們休妻，但起初並不是這樣。 9 我告訴你們：凡休妻另娶的，若不是為淫亂的緣故，就是犯姦淫了；有人娶那被休的婦人，也是犯姦淫了。」' },
                { verse: '馬太福音 5 章 31-32 節', content: '31 「又有話說：『人若休妻，就當給她休書。』 32 只是我告訴你們：凡休妻的，若不是為淫亂的緣故，就是叫她作淫婦了；人若娶這被休的婦人，也是犯姦淫了。」' },
                { verse: '哥林多前書 7 章 10-11 節', content: '10 至於那已經嫁娶的，我吩咐他們，其實不是我吩咐，乃是主吩咐說：「妻子不可離開丈夫。 11 若是離開了，不可再嫁，或是仍同丈夫和好。丈夫也不可離棄妻子。」' },
                { verse: '哥林多前書 7 章 12-16 節', content: '12 我對其餘的人說，不是主說，倘若某弟兄有不信的妻子，妻子也情願和他同住，他就不要離棄妻子。 13 妻子有不信的丈夫，丈夫也情願和她同住，她就不要離棄丈夫。 14因為不信的丈夫就因着妻子成了聖潔，並且不信的妻子就因着丈夫成了聖潔。不然，你們的兒女就不潔淨，但如今他們是聖潔的了。15 倘若那不信的人要離去，就由他離去吧！無論是弟兄，是姐妹，遇着這樣的事都不必拘束。神召我們原是要我們和睦。 16 你這作妻子的，怎麼知道不能救你的丈夫呢？你這作丈夫的，怎麼知道不能救你的妻子呢？' },
                { verse: '哥林多前書 7 章 39-40 節', content: '39 丈夫活着的時候，妻子是被約束的；丈夫若死了，妻子就可以自由，隨意再嫁，只是要嫁這在主裏面的人。 40然而按我的意見，若常守節更有福氣。我也想自己是被神的靈感動了。' },
                { verse: '哥林多前書 7 章 8-9 節', content: '8 我對着沒有嫁娶的和寡婦說，若他們常像我就好。 9 倘若自己禁止不住，就可以嫁娶。與其慾火攻心，倒不如嫁娶為妙。' },
            ];
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__topic_detail_topic_detail__["a" /* TopicDetailPage */], { chineseContent: chineseContentForDetailPage, content: topicContent, title: title });
        }
        else if (title == 'Eternal life and heaven') {
            var topicContent = [
                { verse: 'John 3:16', content: '16 For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life. ' },
                { verse: 'Romans 6:23', content: '23 For the wages of sin is death, but the gift of God is eternal life in Christ Jesus our Lord.' },
                { verse: 'John 6:39-40', content: '39 And this is the will of him who sent me, that I shall lose none of all those he has given me, but raise them up at the last day. 40 For my Father’s will is that everyone who looks to the Son and believes in him shall have eternal life, and I will raise them up at the last day.”' },
                { verse: 'John 6:51', content: '51 I am the living bread that came down from heaven. Whoever eats this bread will live forever. This bread is my flesh, which I will give for the life of the world.' },
                { verse: 'John 11:25-26', content: '25 Jesus said to her, “I am the resurrection and the life. The one who believes in me will live, even though they die; 26 and whoever lives by believing in me will never die. Do you believe this?”' },
                { verse: 'John 17:3', content: '3 Now this is eternal life: that they know you, the only true God, and Jesus Christ, whom you have sent.' },
                { verse: 'Luke 13:23-25a', content: '23 Someone asked him, “Lord, are only a few people going to be saved?” He said to them, 24 “Make every effort to enter through the narrow door, because many, I tell you, will try to enter and will not be able to. 25 Once the owner of the house gets up and closes the door, you will stand outside knocking and pleading, ‘Sir, open the door for us.’' },
                { verse: 'Luke 18:18-23', content: '18 A certain ruler asked him, “Good teacher, what must I do to inherit eternal life?” 19 “Why do you call me good?” Jesus answered. “No one is good—except God alone. 20 You know the commandments: ‘You shall not commit adultery, you shall not murder, you shall not steal, you shall not give false testimony, honor your father and mother.’” 21 “All these I have kept since I was a boy,” he said. 22 When Jesus heard this, he said to him, “You still lack one thing. Sell everything you have and give to the poor, and you will have treasure in heaven. Then come, follow me.” 23 When he heard this, he became very sad, because he was very wealthy.' },
                { verse: 'Luke 18:28-30', content: '28 Peter said to him, “We have left all we had to follow you!” 29 “Truly I tell you,” Jesus said to them, “no one who has left home or wife or brothers or sisters or parents or children for the sake of the kingdom of God 30 will fail to receive many times as much in this age, and in the age to come eternal life.”' },
                { verse: 'Matthew 7:21-23', content: '21 “Not everyone who says to me, ‘Lord, Lord,’ will enter the kingdom of heaven, but only the one who does the will of my Father who is in heaven. 22 Many will say to me on that day, ‘Lord, Lord, did we not prophesy in your name and in your name drive out demons and in your name perform many miracles?’ 23 Then I will tell them plainly, ‘I never knew you. Away from me, you evildoers!’' },
                { verse: 'Matthew 18:8-9', content: '8 If your hand or your foot causes you to stumble, cut it off and throw it away. It is better for you to enter life maimed or crippled than to have two hands or two feet and be thrown into eternal fire. 9 And if your eye causes you to stumble, gouge it out and throw it away. It is better for you to enter life with one eye than to have two eyes and be thrown into the fire of hell.' },
                { verse: 'Romans 2:6-8', content: '6 God “will repay each person according to what they have done.” 7 To those who by persistence in doing good seek glory, honor and immortality, he will give eternal life. 8 But for those who are self-seeking and who reject the truth and follow evil, there will be wrath and anger. ' },
                { verse: '1 John 3:14-15', content: ' 14 We know that we have passed from death to life, because we love each other. Anyone who does not love remains in death. 15 Anyone who hates a brother or sister is a murderer, and you know that no murderer has eternal life residing in him.' },
                { verse: 'Revelations 21:1-4', content: '1 Then I saw “a new heaven and a new earth,” for the first heaven and the first earth had passed away, and there was no longer any sea. 2 I saw the Holy City, the new Jerusalem, coming down out of heaven from God, prepared as a bride beautifully dressed for her husband. 3 And I heard a loud voice from the throne saying, “Look! God’s dwelling place is now among the people, and he will dwell with them. They will be his people, and God himself will be with them and be their God. 4 ‘He will wipe every tear from their eyes. There will be no more death’ or mourning or crying or pain, for the old order of things has passed away.”' },
            ];
            var chineseContentForDetailPage = [
                { verse: '約翰福音 3 章 16 節', content: '16 「神愛世人，甚至將他的獨生子賜給他們，叫一切信他的，不至滅亡，反得永生。 ' },
                { verse: '羅馬書 6 章 23 節', content: ' 23 因為罪的工價乃是死，惟有神的恩賜，在我們的主基督耶穌裏，乃是永生。' },
                { verse: '約翰福音 6 章 39-40 節', content: '39 差我來者的意思就是：他所賜給我的，叫我一個也不失落，在末日卻叫他復活。 40 因為我父的意思是叫一切見子而信的人得永生，並且在末日我要叫他復活。」' },
                { verse: '約翰福音 6 章 51 節', content: ' 51 我是從天上降下來生命的糧，人若吃這糧，就必永遠活着。我所要賜的糧，就是我的肉，為世人之生命所賜的。」' },
                { verse: '約翰福音 11 章 25-26 節', content: '25 耶穌對她說：「復活在我，生命也在我！信我的人，雖然死了，也必復活。 26 凡活着信我的人必永遠不死。你信這話嗎？」' },
                { verse: '約翰福音 17 章 3 節', content: '3 認識你獨一的真神，並且認識你所差來的耶穌基督，這就是永生。 ' },
                { verse: '路加福音 13 章 23-25 節上', content: '23 有一個人問他說：「主啊，得救的人少嗎？」24 耶穌對眾人說：「你們要努力進窄門。我告訴你們：將來有許多人想要進去，卻是不能。 25 及至家主起來關了門，你們站在外面叩門，說：『主啊，給我們開門！』' },
                { verse: '路加福音 18 章 18-23 節', content: '18 有一個官問耶穌說：「良善的夫子，我該做甚麼事才可以承受永生？」19 耶穌對他說：「你為甚麼稱我是良善的？除了神一位之外，再沒有良善的。 20 誡命你是曉得的：『不可姦淫，不可殺人，不可偷盜，不可作假見證，當孝敬父母。』」21 那人說：「這一切我從小都遵守了。」22 耶穌聽見了，就說：「你還缺少一件：要變賣你一切所有的，分給窮人，就必有財寶在天上；你還要來跟從我。」23 他聽見這話，就甚憂愁，因為他很富足。' },
                { verse: '路加福音 18 章 28-30 節', content: '28 彼得說：「看哪！我們已經撇下自己所有的跟從你了。」29 耶穌說：「我實在告訴你們：人為神的國撇下房屋，或是妻子、弟兄、父母、兒女， 30 沒有在今世不得百倍，在來世不得永生的。」' },
                { verse: '馬太福音 7 章 21-23 節', content: '21 「凡稱呼我『主啊，主啊』的人，不能都進天國；惟獨遵行我天父旨意的人，才能進去。 22 當那日，必有許多人對我說：『主啊，主啊，我們不是奉你的名傳道，奉你的名趕鬼，奉你的名行許多異能嗎？』 23 我就明明地告訴他們說：『我從來不認識你們，你們這些作惡的人，離開我去吧！』」' },
                { verse: '馬太福音 18 章 8-9 節', content: '8 倘若你一隻手或是一隻腳叫你跌倒，就砍下來丟掉；你缺一隻手或是一隻腳進入永生，強如有兩手兩腳被丟在永火裏。 9 倘若你一隻眼叫你跌倒，就把它剜出來丟掉；你只有一隻眼進入永生，強如有兩隻眼被丟在地獄的火裏。」' },
                { verse: '羅馬書 2 章 6-8 節', content: ' 6 他必照各人的行為報應各人。 7 凡恆心行善，尋求榮耀、尊貴和不能朽壞之福的，就以永生報應他們； 8 惟有結黨不順從真理，反順從不義的，就以忿怒、惱恨報應他們。' },
                { verse: '約翰一書 3 章 14-15 節', content: '14 我們因為愛弟兄，就曉得是已經出死入生了。沒有愛心的，仍住在死中。 15 凡恨他弟兄的，就是殺人的；你們曉得凡殺人的，沒有永生存在他裏面。' },
                { verse: '啟示錄 21 章 1-4 節', content: '1 我又看見一個新天新地。因為先前的天地已經過去了，海也不再有了。 2 我又看見聖城新耶路撒冷由神那裏從天而降，預備好了，就如新婦妝飾整齊，等候丈夫。3 我聽見有大聲音從寶座出來說：「看哪！神的帳幕在人間。他要與人同住，他們要作他的子民；神要親自與他們同在，作他們的神。 4  神要擦去他們一切的眼淚。不再有死亡，也不再有悲哀、哭號、疼痛，因為以前的事都過去了。」' },
            ];
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__topic_detail_topic_detail__["a" /* TopicDetailPage */], { chineseContent: chineseContentForDetailPage, content: topicContent, title: title });
        }
        else if (title == 'Faith') {
            var topicContent = [
                { verse: 'Hebrews 11:1-3', content: '1 Now faith is confidence in what we hope for and assurance about what we do not see. 2 This is what the ancients were commended for. 3 By faith we understand that the universe was formed at God’s command, so that what is seen was not made out of what was visible.' },
                { verse: 'Hebrews 11:6', content: '6 And without faith it is impossible to please God, because anyone who comes to him must believe that he exists and that he rewards those who earnestly seek him.' },
                { verse: 'Hebrews 11:7', content: '7 By faith Noah, when warned about things not yet seen, in holy fear built an ark to save his family. By his faith he condemned the world and became heir of the righteousness that is in keeping with faith.' },
                { verse: 'Hebrews 11:8-10', content: '8 By faith Abraham, when called to go to a place he would later receive as his inheritance, obeyed and went, even though he did not know where he was going. 9 By faith he made his home in the promised land like a stranger in a foreign country; he lived in tents, as did Isaac and Jacob, who were heirs with him of the same promise. 10 For he was looking forward to the city with foundations, whose architect and builder is God.' },
                { verse: 'Hebrews 11:13-14', content: '13 All these people were still living by faith when they died. They did not receive the things promised; they only saw them and welcomed them from a distance, admitting that they were foreigners and strangers on earth. 14 People who say such things show that they are looking for a country of their own.' },
                { verse: 'Romans 5:1-2a', content: '1 Therefore, since we have been justified through faith, we have peace with God through our Lord Jesus Christ, 2 through whom we have gained access by faith into this grace in which we now stand. ' },
                { verse: 'Romans 10:9-10', content: ' 9 If you declare with your mouth, “Jesus is Lord,” and believe in your heart that God raised him from the dead, you will be saved. 10 For it is with your heart that you believe and are justified, and it is with your mouth that you profess your faith and are saved. ' },
                { verse: 'James 2:14-17', content: '14 What good is it, my brothers and sisters, if someone claims to have faith but has no deeds? Can such faith save them? 15 Suppose a brother or a sister is without clothes and daily food. 16 If one of you says to them, “Go in peace; keep warm and well fed,” but does nothing about their physical needs, what good is it? 17 In the same way, faith by itself, if it is not accompanied by action, is dead.' },
                { verse: '1 Corinthians 13:1-3', content: '1 If I speak in the tongues of men or of angels, but do not have love, I am only a resounding gong or a clanging cymbal. 2 If I have the gift of prophecy and can fathom all mysteries and all knowledge, and if I have a faith that can move mountains, but do not have love, I am nothing. 3 If I give all I possess to the poor and give over my body to hardship that I may boast, but do not have love, I gain nothing.' },
                { verse: 'Psalm 121:1-4', content: '1 I lift up my eyes to the mountains—where does my help come from? 2 My help comes from the Lord, the Maker of heaven and earth. 3 He will not let your foot slip—he who watches over you will not slumber; 4 indeed, he who watches over Israel will neither slumber nor sleep.' },
                { verse: 'Psalm 46:10', content: '10 He says, “Be still, and know that I am God; I will be exalted among the nations, I will be exalted in the earth.”' },
                { verse: 'Luke 7:6-10', content: ' 6 So Jesus went with them. He was not far from the house when the centurion sent friends to say to him: “Lord, don’t trouble yourself, for I do not deserve to have you come under my roof. 7 That is why I did not even consider myself worthy to come to you. But say the word, and my servant will be healed. 8 For I myself am a man under authority, with soldiers under me. I tell this one, ‘Go,’ and he goes; and that one, ‘Come,’ and he comes. I say to my servant, ‘Do this,’ and he does it.” 9 When Jesus heard this, he was amazed at him, and turning to the crowd following him, he said, “I tell you, I have not found such great faith even in Israel.” 10 Then the men who had been sent returned to the house and found the servant well.' },
                { verse: 'Luke 8:23-25', content: '23 As they sailed, he fell asleep. A squall came down on the lake, so that the boat was being swamped, and they were in great danger. 24 The disciples went and woke him, saying, “Master, Master, we’re going to drown!” He got up and rebuked the wind and the raging waters; the storm subsided, and all was calm. 25 “Where is your faith?” he asked his disciples. In fear and amazement they asked one another, “Who is this? He commands even the winds and the water, and they obey him.”' },
                { verse: 'Matthew 17:18-20', content: '18 Jesus rebuked the demon, and it came out of the boy, and he was healed at that moment. 19 Then the disciples came to Jesus in private and asked, “Why couldn’t we drive it out?” 20 He replied, “Because you have so little faith. Truly I tell you, if you have faith as small as a mustard seed, you can say to this mountain, ‘Move from here to there,’ and it will move. Nothing will be impossible for you.” ' }
            ];
            var chineseContentForDetailPage = [
                { verse: '希伯來書 11 章 1-3 節', content: '1 信就是所望之事的實底，是未見之事的確據。 2 古人在這信上得了美好的證據。3 我們因着信，就知道諸世界是藉神話造成的，這樣，所看見的，並不是從顯然之物造出來的。' },
                { verse: '希伯來書 11 章 6 節', content: ' 6 人非有信，就不能得神的喜悅；因為到神面前來的人，必須信有神，且信他賞賜那尋求他的人。' },
                { verse: '希伯來書 11 章 7 節', content: '7 挪亞因着信，既蒙神指示他未見的事，動了敬畏的心，預備了一隻方舟，使他全家得救。因此就定了那世代的罪，自己也承受了那從信而來的義。' },
                { verse: '希伯來書 11 章 8-10 節', content: '8 亞伯拉罕因着信，蒙召的時候，就遵命出去，往將來要得為業的地方去；出去的時候，還不知往哪裏去。 9 他因着信，就在所應許之地作客，好像在異地居住帳棚，與那同蒙一個應許的以撒、雅各一樣。 10 因為他等候那座有根基的城，就是神所經營、所建造的。' },
                { verse: '希伯來書 11 章 13-14 節', content: '13 這些人都是存着信心死的，並沒有得着所應許的，卻從遠處望見，且歡喜迎接，又承認自己在世上是客旅，是寄居的。 14 說這樣話的人，是表明自己要找一個家鄉。' },
                { verse: '羅馬書 5 章 1-2 節上', content: '1 我們既因信稱義，就藉着我們的主耶穌基督得與神相和。 2 我們又藉着他，因信得進入現在所站的這恩典中，' },
                { verse: '羅馬書 10 章 9-10 節', content: '9 你若口裏認耶穌為主，心裏信神叫他從死裏復活，就必得救。 10 因為人心裏相信，就可以稱義；口裏承認，就可以得救。' },
                { verse: '雅各書 2 章 14-17 節', content: '14 我的弟兄們，若有人說自己有信心，卻沒有行為，有甚麼益處呢？這信心能救他嗎？ 15 若是弟兄或是姐妹，赤身露體，又缺了日用的飲食， 16 你們中間有人對他們說，「平平安安地去吧！願你們穿得暖吃得飽」，卻不給他們身體所需用的，這有甚麼益處呢？ 17 這樣，信心若沒有行為就是死的。' },
                { verse: '哥林多前書 13 章 1-3 節', content: '1 我若能說萬人的方言，並天使的話語，卻沒有愛，我就成了鳴的鑼、響的鈸一般。 2 我若有先知講道之能，也明白各樣的奧秘、各樣的知識，而且有全備的信，叫我能夠移山，卻沒有愛，我就算不得甚麼。 3 我若將所有的賙濟窮人，又捨己身叫人焚燒，卻沒有愛，仍然與我無益。' },
                { verse: '詩篇 121 篇 1-4 節', content: '1 我要向山舉目，我的幫助從何而來？ 2 我的幫助從造天地的耶和華而來。3 他必不叫你的腳搖動，保護你的必不打盹！ 4 保護以色列的，也不打盹，也不睡覺。' },
                { verse: '詩篇 46 篇 10 節', content: '10 你們要休息，要知道我是神！我必在外邦中被尊崇，在遍地上也被尊崇。' },
                { verse: '路加福音 7 章 6-10 節', content: '6 耶穌就和他們同去。離那家不遠，百夫長託幾個朋友去見耶穌，對他說：「主啊，不要勞動，因你到我舍下，我不敢當！ 7 我也自以為不配去見你，只要你說一句話，我的僕人就必好了。 8 因為我在人的權下，也有兵在我以下，對這個說：『去！』他就去；對那個說：『來！』他就來；對我的僕人說：『你做這事！』他就去做。」9 耶穌聽見這話，就希奇他，轉身對跟隨的眾人說：「我告訴你們，這麼大的信心，就是在以色列中，我也沒有遇見過。」 10 那託來的人回到百夫長家裏，看見僕人已經好了。' },
                { verse: '路加福音 8 章 23-25 節', content: '23 正行的時候，耶穌睡着了。湖上忽然起了暴風，船將滿了水，甚是危險。24 門徒來叫醒了他，說：「夫子！夫子！我們喪命啦！」耶穌醒了，斥責那狂風大浪，風浪就止住，平靜了。 25 耶穌對他們說：「你們的信心在哪裏呢？」他們又懼怕又希奇，彼此說：「這到底是誰？他吩咐風和水，連風和水也聽從他了。」' },
                { verse: '馬太福音 17 章 18-20 節', content: '18 耶穌斥責那鬼，鬼就出來，從此孩子就痊愈了。19 門徒暗暗地到耶穌跟前說：「我們為甚麼不能趕出那鬼呢？」20 耶穌說：「是因你們的信心小。我實在告訴你們：你們若有信心像一粒芥菜種，就是對這座山說，『你從這邊挪到那邊』，它也必挪去，並且你們沒有一件不能做的事了。' }
            ];
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__topic_detail_topic_detail__["a" /* TopicDetailPage */], { chineseContent: chineseContentForDetailPage, content: topicContent, title: title });
        }
        else if (title == 'Family and parenthood') {
            var topicContent = [
                { verse: 'Exodus 20:12', content: '12 “Honor your father and your mother, so that you may live long in the land the Lord your God is giving you.' },
                { verse: 'Ephesians 6:1-4', content: '1 Children, obey your parents in the Lord, for this is right. 2 “Honor your father and mother”—which is the first commandment with a promise— 3 “so that it may go well with you and that you may enjoy long life on the earth.” 4 Fathers, do not exasperate your children; instead, bring them up in the training and instruction of the Lord.' },
                { verse: 'Colossians 3:20-21', content: '20 Children, obey your parents in everything, for this pleases the Lord. 21 Fathers, do not embitter your children, or they will become discouraged.' },
                { verse: 'Deuteronomy 6:6-9', content: ' 6 These commandments that I give you today are to be on your hearts. 7 Impress them on your children. Talk about them when you sit at home and when you walk along the road, when you lie down and when you get up. 8 Tie them as symbols on your hands and bind them on your foreheads. 9 Write them on the doorframes of your houses and on your gates.' },
                { verse: 'Proverbs 1:8', content: '8 Listen, my son, to your father’s instruction and do not forsake your mother’s teaching.' },
                { verse: 'Proverbs 22:6', content: '6 Start children off on the way they should go, and even when they are old they will not turn from it.' },
                { verse: 'Psalm 103:17-18', content: '17 But from everlasting to everlasting the Lord’s love is with those who fear him, and his righteousness with their children’s children— 18 with those who keep his covenant and remember to obey his precepts.' },
                { verse: 'Proverbs 17:1', content: '1 Better a dry crust with peace and quiet than a house full of feasting, with strife.' },
                { verse: 'Psalm 127:3-5', content: '3 Children are a heritage from the Lord, offspring a reward from him. 4 Like arrows in the hands of a warrior are children born in one’s youth. 5 Blessed is the man whose quiver is full of them. They will not be put to shame when they contend with their opponents in court.' },
                { verse: '1 Timothy 5:8', content: '8 Anyone who does not provide for their relatives, and especially for their own household, has denied the faith and is worse than an unbeliever.' },
                { verse: '1 Timothy 5:3-6', content: '3 Give proper recognition to those widows who are really in need. 4 But if a widow has children or grandchildren, these should learn first of all to put their religion into practice by caring for their own family and so repaying their parents and grandparents, for this is pleasing to God. 5 The widow who is really in need and left all alone puts her hope in God and continues night and day to pray and to ask God for help. 6 But the widow who lives for pleasure is dead even while she lives. ' }
            ];
            var chineseContentForDetailPage = [
                { verse: '出埃及記 20 章 12 節', content: '12 「當孝敬父母，使你的日子在耶和華你神所賜你的地上得以長久。 ' },
                { verse: '以弗所書 6 章 1-4 節', content: '1 你們作兒女的，要在主裏聽從父母，這是理所當然的。 2-3 要孝敬父母，使你得福，在世長壽。這是第一條帶應許的誡命。4 你們作父親的，不要惹兒女的氣，只要照着主的教訓和警戒養育他們。' },
                { verse: '歌羅西書 3 章 20-21 節', content: '20 你們作兒女的，要凡事聽從父母，因為這是主所喜悅的。 21 你們作父親的，不要惹兒女的氣，恐怕他們失了志氣。' },
                { verse: '申命記 6 章 6-9 節', content: '6 我今日所吩咐你的話都要記在心上， 7 也要殷勤教訓你的兒女，無論你坐在家裏，行在路上，躺下，起來，都要談論； 8 也要繫在手上為記號，戴在額上為經文； 9 又要寫在你房屋的門框上，並你的城門上。」' },
                { verse: '箴言 1 章 8 節', content: '8 我兒，要聽你父親的訓誨，不可離棄你母親的法則，' },
                { verse: '箴言 22 章 6 節', content: '6 教養孩童，使他走當行的道，就是到老他也不偏離。' },
                { verse: '詩篇 103 篇 17-18 節', content: '17 但耶和華的慈愛歸於敬畏他的人，從亙古到永遠；他的公義也歸於子子孫孫，18 就是那些遵守他的約，記念他的訓詞而遵行的人。' },
                { verse: '箴言 17 章 1 節', content: '1 設筵滿屋，大家相爭，不如有塊乾餅，大家相安。' },
                { verse: '詩篇 127 篇 3-5 節', content: '3 兒女是耶和華所賜的產業，所懷的胎是他所給的賞賜。4 少年時所生的兒女，好像勇士手中的箭。 5 箭袋充滿的人便為有福。他們在城門口和仇敵說話的時候，必不至於羞愧。' },
                { verse: '提摩太前書 5 章 8 節', content: '8 人若不看顧親屬，就是背了真道，比不信的人還不好。不看顧自己家裏的人更是如此。' },
                { verse: '提摩太前書 5 章 3-6 節', content: '3 要尊敬那真為寡婦的。 4 若寡婦有兒女，或有孫子、孫女，便叫他們先在自己家中學着行孝，報答親恩，因為這在神面前是可悅納的。 5 那獨居無靠真為寡婦的，是仰賴神，晝夜不住地祈求禱告。 6 但那好宴樂的寡婦，正活着的時候也是死的。' }
            ];
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__topic_detail_topic_detail__["a" /* TopicDetailPage */], { chineseContent: chineseContentForDetailPage, content: topicContent, title: title });
        }
        else if (title == 'Forgiving others') {
            var topicContent = [
                { verse: 'Matthew 18:21-22', content: '21 Then Peter came to Jesus and asked, “Lord, how many times shall I forgive my brother or sister who sins against me? Up to seven times?” 22 Jesus answered, “I tell you, not seven times, but seventy-seven times.' },
                { verse: 'Matthew 18:32-35', content: '32 “Then the master called the servant in. ‘You wicked servant,’ he said, ‘I canceled all that debt of yours because you begged me to. 33 Shouldn’t you have had mercy on your fellow servant just as I had on you?’ 34 In anger his master handed him over to the jailers to be tortured, until he should pay back all he owed. 35 “This is how my heavenly Father will treat each of you unless you forgive your brother or sister from your heart.”' },
                { verse: 'Matthew 6:9-13', content: '9 “This, then, is how you should pray: “‘Our Father in heaven, hallowed be your name, 10 your kingdom come, your will be done, on earth as it is in heaven. 11 Give us today our daily bread. 12 And forgive us our debts, as we also have forgiven our debtors. 13 And lead us not into temptation, but deliver us from the evil one.’' },
                { verse: 'Matthew 6:14-15', content: '14 For if you forgive other people when they sin against you, your heavenly Father will also forgive you. 15 But if you do not forgive others their sins, your Father will not forgive your sins.' },
                { verse: 'Mark 11:25', content: ' 25 And when you stand praying, if you hold anything against anyone, forgive them, so that your Father in heaven may forgive you your sins.” ' },
                { verse: 'Colossians 3:13', content: '13 Bear with each other and forgive one another if any of you has a grievance against someone. Forgive as the Lord forgave you.' },
                { verse: 'Ephesians 4:32', content: '32 Be kind and compassionate to one another, forgiving each other, just as in Christ God forgave you.' },
                { verse: 'Luke 17:3-4', content: '3 … “If your brother or sister sins against you, rebuke them; and if they repent, forgive them. 4 Even if they sin against you seven times in a day and seven times come back to you saying ‘I repent,’ you must forgive them.”' },
                { verse: '1 Peter 3:9', content: ' 9 Do not repay evil with evil or insult with insult. On the contrary, repay evil with blessing, because to this you were called so that you may inherit a blessing.' },
                { verse: 'Luke 23:33-34', content: '33 When they came to the place called the Skull, they crucified him there, along with the criminals—one on his right, the other on his left. 34 Jesus said, “Father, forgive them, for they do not know what they are doing.”' },
                { verse: 'Matthew 5:7', content: '7 Blessed are the merciful, for they will be shown mercy.' }
            ];
            var chineseContentForDetailPage = [
                { verse: '馬太福音 18 章 21-22 節', content: '21 那時，彼得進前來，對耶穌說：「主啊，我弟兄得罪我，我當饒恕他幾次呢？到七次可以嗎？」22 耶穌說：「我對你說：不是到七次，乃是到七十個七次。' },
                { verse: '馬太福音 18 章 32-35 節', content: '32 「於是，主人叫了他來，對他說：『你這惡奴才！你央求我，我就把你所欠的都免了。 33 你不應當憐恤你的同伴，像我憐恤你嗎？』 34 主人就大怒，把他交給掌刑的，等他還清了所欠的債。35 「你們各人若不從心裏饒恕你的弟兄，我天父也要這樣待你們了。」' },
                { verse: '馬太福音 6 章 9-13 節', content: '9 「所以，你們禱告要這樣說：『我們在天上的父，願人都尊你的名為聖。10 願你的國降臨，願你的旨意行在地上，如同行在天上。 11 我們日用的飲食，今日賜給我們。 12 免我們的債，如同我們免了人的債。 13 不叫我們遇見試探，救我們脫離兇惡。因為國度、權柄、榮耀，全是你的，直到永遠。阿們！』' },
                { verse: '馬太福音 6 章 14-15 節', content: '14 你們饒恕人的過犯，你們的天父也必饒恕你們的過犯； 15 你們不饒恕人的過犯，你們的天父也必不饒恕你們的過犯。」' },
                { verse: '馬可福音 11 章 25 節', content: ' 25 你們站着禱告的時候，若想起有人得罪你們，就當饒恕他，好叫你們在天上的父也饒恕你們的過犯。' },
                { verse: '歌羅西書 3 章 13 節', content: ' 13 倘若這人與那人有嫌隙，總要彼此包容，彼此饒恕；主怎樣饒恕了你們，你們也要怎樣饒恕人。' },
                { verse: '以弗所書 4 章 32 節', content: '32 並要以恩慈相待，存憐憫的心，彼此饒恕，正如神在基督裏饒恕了你們一樣。' },
                { verse: '路加福音 17 章 3-4 節', content: '3 ...「若是你的弟兄得罪你，就勸戒他；他若懊悔，就饒恕他。 4 倘若他一天七次得罪你，又七次回轉，說：『我懊悔了』，你總要饒恕他。」' },
                { verse: '彼得前書 3 章 9 節', content: '9 不以惡報惡、以辱罵還辱罵，倒要祝福；因你們是為此蒙召，好叫你們承受福氣。 ' },
                { verse: '路加福音 23 章 33-34 節', content: '33 到了一個地方，名叫髑髏地，就在那裏把耶穌釘在十字架上，又釘了兩個犯人：一個在左邊，一個在右邊。 34 當下耶穌說：「父啊，赦免他們！因為他們所做的，他們不曉得。」兵丁就拈鬮分他的衣服。' },
                { verse: '馬太福音 5 章 7 節', content: '7 憐恤人的人有福了，因為他們必蒙憐恤。' },
            ];
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__topic_detail_topic_detail__["a" /* TopicDetailPage */], { chineseContent: chineseContentForDetailPage, content: topicContent, title: title });
        }
        else if (title == "God's Forgiveness") {
            console.log(title);
            var topicContent = [
                { verse: '1 John 1:8-9', content: '8 If we claim to be without sin, we deceive ourselves and the truth is not in us. 9 If we confess our sins, he is faithful and just and will forgive us our sins and purify us from all unrighteousness. ' },
                { verse: 'Acts 10:43', content: '43 All the prophets testify about him that everyone who believes in him receives forgiveness of sins through his name.' },
                { verse: 'Psalm 32:1-2', content: '1 Blessed is the one whose transgressions are forgiven, whose sins are covered. 2 Blessed is the one whose sin the Lord does not count against them and in whose spirit is no deceit.' },
                { verse: 'Psalm 32:3-5', content: '3 When I kept silent, my bones wasted away through my groaning all day long. 4 For day and night your hand was heavy on me; my strength was sapped as in the heat of summer. 5 Then I acknowledged my sin to you and did not cover up my iniquity. I said, “I will confess my transgressions to the Lord.” And you forgave the guilt of my sin.' },
                { verse: 'Psalms 103:10-12', content: '10 he does not treat us as our sins deserve or repay us according to our iniquities.11 For as high as the heavens are above the earth, so great is his love for those who fear him; 12 as far as the east is from the west, so far has he removed our transgressions from us.' },
                { verse: 'Matthew 6:14-15', content: '14 For if you forgive other people when they sin against you, your heavenly Father will also forgive you. 15 But if you do not forgive others their sins, your Father will not forgive your sins.' },
                { verse: 'Matthew 26:27-28', content: '27 Then he took a cup, and when he had given thanks, he gave it to them, saying, “Drink from it, all of you. 28 This is my blood of the covenant, which is poured out for many for the forgiveness of sins. ' },
                { verse: 'Luke 23:33-34', content: '33 When they came to the place called the Skull, they crucified him there, along with the criminals—one on his right, the other on his left. 34 Jesus said, “Father, forgive them, for they do not know what they are doing.”' }
            ];
            var chineseContentForDetailPage = [
                { verse: '約翰一書 1 章 8-9 節', content: '8 我們若說自己無罪，便是自欺，真理不在我們心裏了； 9 我們若認自己的罪，神是信實的，是公義的，必要赦免我們的罪，洗淨我們一切的不義；' },
                { verse: '使徒行傳 10 章 43 節', content: '43 眾先知也為他作見證，說：『凡信他的人，必因他的名得蒙赦罪。』」' },
                { verse: '詩篇 32 篇 1-2 節', content: '1 得赦免其過、遮蓋其罪的，這人是有福的！ 2 凡心裏沒有詭詐、耶和華不算為有罪的，這人是有福的！' },
                { verse: '詩篇 32 篇 3-5 節', content: '3 我閉口不認罪的時候，因終日唉哼而骨頭枯乾。 4 黑夜白日，你的手在我身上沉重；我的精液耗盡，如同夏天的乾旱。（細拉） 5 我向你陳明我的罪，不隱瞞我的惡。我說：「我要向耶和華承認我的過犯。」你就赦免我的罪惡。（細拉）' },
                { verse: '詩篇 103 篇 10-12 節', content: '10 他沒有按我們的罪過待我們，也沒有照我們的罪孽報應我們。11 天離地何等的高，他的慈愛向敬畏他的人也是何等的大！ 12 東離西有多遠，他叫我們的過犯離我們也有多遠！ ' },
                { verse: '馬太福音 6 章 14-15 節', content: '14 你們饒恕人的過犯，你們的天父也必饒恕你們的過犯； 15 你們不饒恕人的過犯，你們的天父也必不饒恕你們的過犯。」' },
                { verse: '馬太福音 26 章 27-28 節', content: '27 又拿起杯來，祝謝了，遞給他們，說：「你們都喝這個， 28 因為這是我立約的血，為多人流出來，使罪得赦。' },
                { verse: '路加福音 23 章 33-34 節', content: '33 到了一個地方，名叫髑髏地，就在那裏把耶穌釘在十字架上，又釘了兩個犯人：一個在左邊，一個在右邊。 34 當下耶穌說：「父啊，赦免他們！因為他們所做的，他們不曉得。」兵丁就拈鬮分他的衣服。' }
            ];
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__topic_detail_topic_detail__["a" /* TopicDetailPage */], { chineseContent: chineseContentForDetailPage, content: topicContent, title: title });
        }
        else if (title == "God's Love") {
            var topicContent = [
                { verse: 'Romans 5:8', content: '8 But God demonstrates his own love for us in this: While we were still sinners, Christ died for us.' },
                { verse: 'John 3:16', content: '16 For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life. ' },
                { verse: '1 John 4:9-10', content: ' 9 This is how God showed his love among us: He sent his one and only Son into the world that we might live through him. 10 This is love: not that we loved God, but that he loved us and sent his Son as an atoning sacrifice for our sins.' },
                { verse: 'Psalm 103:8-9', content: '8 The Lord is compassionate and gracious, slow to anger, abounding in love. 9 He will not always accuse, nor will he harbor his anger forever;' },
                { verse: 'Psalm 103:10-12', content: '10 he does not treat us as our sins deserve or repay us according to our iniquities.11 For as high as the heavens are above the earth, so great is his love for those who fear him; 12 as far as the east is from the west, so far has he removed our transgressions from us.' },
                { verse: 'Psalm 8:3-4', content: '3 When I consider your heavens, the work of your fingers, the moon and the stars, which you have set in place, 4 what is mankind that you are mindful of them, human beings that you care for them?' },
                { verse: 'Romans 8:37-39', content: '37 No, in all these things we are more than conquerors through him who loved us. 38 For I am convinced that neither death nor life, neither angels nor demons, neither the present nor the future, nor any powers, 39 neither height nor depth, nor anything else in all creation, will be able to separate us from the love of God that is in Christ Jesus our Lord.' },
                { verse: '1 John 4:16b', content: '16 ...God is love. Whoever lives in love lives in God, and God in them. ' },
                { verse: '1 John 3:1', content: '1 See what great love the Father has lavished on us, that we should be called children of God! ' },
                { verse: 'Psalm 23:1-3', content: '1 The Lord is my shepherd, I lack nothing. 2 He makes me lie down in green pastures, he leads me beside quiet waters, 3 he refreshes my soul. He guides me along the right paths for his name’s sake.' }
            ];
            var chineseContentForDetailPage = [
                { verse: '羅馬書 5 章 8 節', content: '8 惟有基督在我們還作罪人的時候為我們死，神的愛就在此向我們顯明了。' },
                { verse: '約翰福音 3 章 16 節', content: '16 「神愛世人，甚至將他的獨生子賜給他們，叫一切信他的，不至滅亡，反得永生。 ' },
                { verse: '約翰一書 4 章 9-10 節', content: ' 9 神差他獨生子到世間來，使我們藉着他得生，神愛我們的心在此就顯明了。 10 不是我們愛神，乃是神愛我們，差他的兒子，為我們的罪作了挽回祭，這就是愛了。' },
                { verse: '詩篇 103 篇 8-9 節', content: '8 耶和華有憐憫，有恩典，不輕易發怒，且有豐盛的慈愛。 9 他不長久責備，也不永遠懷怒。' },
                { verse: '詩篇 103 篇 10-12 節', content: '10 他沒有按我們的罪過待我們，也沒有照我們的罪孽報應我們。 11 天離地何等的高，他的慈愛向敬畏他的人也是何等的大！ 12 東離西有多遠，他叫我們的過犯離我們也有多遠！ ' },
                { verse: '詩篇 8 篇 3-4 節', content: '3 我觀看你指頭所造的天，並你所陳設的月亮星宿， 4 便說，人算甚麼，你竟顧念他？世人算甚麼，你竟眷顧他？ ' },
                { verse: '羅馬書 8 章 37-39 節', content: '37 然而，靠着愛我們的主，在這一切的事上已經得勝有餘了。 38 因為我深信無論是死、是生，是天使、是掌權的，是有能的，是現在的事、是將來的事， 39 是高處的、是低處的，是別的受造之物，都不能叫我們與神的愛隔絕，這愛是在我們的主基督耶穌裏的' },
                { verse: '約翰一書 4 章 16 節下', content: '16 … 神就是愛！住在愛裏面的，就是住在神裏面，神也住在他裏面。 ' },
                { verse: '約翰一書 3 章 1 節', content: '1 你看父賜給我們是何等的慈愛，使我們得稱為神的兒女！我們也真是他的兒女。世人所以不認識我們，是因未曾認識他。 ' },
                { verse: '詩篇 23 篇 1-3 節', content: '1 耶和華是我的牧者，我必不至缺乏。 2 他使我躺臥在青草地上，領我在可安歇的水邊；3 他使我的靈魂甦醒，為自己的名引導我走義路。 ' }
            ];
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__topic_detail_topic_detail__["a" /* TopicDetailPage */], { chineseContent: chineseContentForDetailPage, content: topicContent, title: title });
        }
        else if (title == 'Gospel/The Good News') {
            var topicContent = [
                { verse: 'John 3:16', content: '16 For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life. ' },
                { verse: 'Romans 3:23-25', content: '23 for all have sinned and fall short of the glory of God, 24 and all are justified freely by his grace through the redemption that came by Christ Jesus. 25 God presented Christ as a sacrifice of atonement, through the shedding of his blood—to be received by faith. He did this to demonstrate his righteousness, because in his forbearance he had left the sins committed beforehand unpunished—' },
                { verse: '1 Peter 2:24', content: '24 “He himself bore our sins” in his body on the cross, so that we might die to sins and live for righteousness; “by his wounds you have been healed.”' },
                { verse: 'Luke 2:10-11', content: '10 But the angel said to them, “Do not be afraid. I bring you good news that will cause great joy for all the people. 11 Today in the town of David a Savior has been born to you; he is the Messiah, the Lord.' },
                { verse: '1 Corinthians 15:2-5', content: '2 By this gospel you are saved, if you hold firmly to the word I preached to you. Otherwise, you have believed in vain. 3 For what I received I passed on to you as of first importance: that Christ died for our sins according to the Scriptures, 4 that he was buried, that he was raised on the third day according to the Scriptures, 5 and that he appeared to Cephas, and then to the Twelve.' },
                { verse: 'Luke 24:46-47', content: '46 He told them, “This is what is written: The Messiah will suffer and rise from the dead on the third day, 47 and repentance for the forgiveness of sins will be preached in his name to all nations, beginning at Jerusalem.' },
                { verse: 'Romans 1:16', content: '16 For I am not ashamed of the gospel, because it is the power of God that brings salvation to everyone who believes: first to the Jew, then to the Gentile. ' },
                { verse: 'Romans 10:14-15', content: '14 How, then, can they call on the one they have not believed in? And how can they believe in the one of whom they have not heard? And how can they hear without someone preaching to them? 15 And how can anyone preach unless they are sent? As it is written: “How beautiful are the feet of those who bring good news!”' },
                { verse: 'Matthew 28:18-20', content: '18 Then Jesus came to them and said, “All authority in heaven and on earth has been given to me. 19 Therefore go and make disciples of all nations, baptizing them in the name of the Father and of the Son and of the Holy Spirit, 20 and teaching them to obey everything I have commanded you. And surely I am with you always, to the very end of the age.”' },
                { verse: 'Luke 8:5-8', content: '5 “A farmer went out to sow his seed. As he was scattering the seed, some fell along the path; it was trampled on, and the birds ate it up. 6 Some fell on rocky ground, and when it came up, the plants withered because they had no moisture. 7 Other seed fell among thorns, which grew up with it and choked the plants. 8 Still other seed fell on good soil. It came up and yielded a crop, a hundred times more than was sown.”' },
                { verse: 'Luke 8:11-15', content: '11 “This is the meaning of the parable: The seed is the word of God. 12 Those along the path are the ones who hear, and then the devil comes and takes away the word from their hearts, so that they may not believe and be saved. 13 Those on the rocky ground are the ones who receive the word with joy when they hear it, but they have no root. They believe for a while, but in the time of testing they fall away. 14 The seed that fell among thorns stands for those who hear, but as they go on their way they are choked by life’s worries, riches and pleasures, and they do not mature. 15 But the seed on good soil stands for those with a noble and good heart, who hear the word, retain it, and by persevering produce a crop.' },
                { verse: '1 Corinthians 1:18-19', content: '18 For the message of the cross is foolishness to those who are perishing, but to us who are being saved it is the power of God. 19 For it is written: “I will destroy the wisdom of the wise; the intelligence of the intelligent I will frustrate.”' },
                { verse: 'Luke 10:2', content: ' 2 He told them, “The harvest is plentiful, but the workers are few. Ask the Lord of the harvest, therefore, to send out workers into his harvest field.' }
            ];
            var chineseContentForDetailPage = [
                { verse: '約翰福音 3 章 16 節', content: '16 「神愛世人，甚至將他的獨生子賜給他們，叫一切信他的，不至滅亡，反得永生。 ' },
                { verse: '羅馬書 3 章 23-25 節', content: ' 23 因為世人都犯了罪，虧缺了神的榮耀； 24如今卻蒙神的恩典，因基督耶穌的救贖，就白白地稱義。 25神設立耶穌作挽回祭，是憑着耶穌的血，藉着人的信，要顯明神的義。因為他用忍耐的心，寬容人先時所犯的罪，' },
                { verse: '彼得前書 2 章 24 節', content: '24 他被掛在木頭上，親身擔當了我們的罪，使我們既然在罪上死，就得以在義上活。因他受的鞭傷，你們便得了醫治。' },
                { verse: '路加福音 2 章 10-11 節', content: '10 那天使對他們說：「不要懼怕！我報給你們大喜的信息，是關乎萬民的。 11 因今天在大衞的城裏，為你們生了救主，就是主基督。' },
                { verse: '哥林多前書 15 章 2-5 節', content: ' 2 並且你們若不是徒然相信，能以持守我所傳給你們的，就必因這福音得救。3 我當日所領受又傳給你們的，第一，就是基督照聖經所說，為我們的罪死了， 4 而且埋葬了，又照聖經所說，第三天復活了， 5 並且顯給磯法看，然後顯給十二使徒看，' },
                { verse: '路加福音 24 章 46-47 節', content: '46 又對他們說：「照經上所寫的，基督必受害，第三日從死裏復活， 47 並且人要奉他的名傳悔改、赦罪的道，從耶路撒冷起直傳到萬邦。' },
                { verse: '羅馬書 1 章 16 節', content: '16 我不以福音為恥，這福音本是神的大能，要救一切相信的，先是猶太人，後是希臘人。 ' },
                { verse: '羅馬書 10 章 14-15 節', content: '14 然而人未曾信他，怎能求他呢？未曾聽見他，怎能信他呢？沒有傳道的，怎能聽見呢？ 15 若沒有奉差遣，怎能傳道呢？如經上所記：「報福音傳喜信的人，他們的腳蹤何等佳美！」' },
                { verse: '馬太福音 28 章 18-20 節', content: ' 18 耶穌進前來，對他們說：「天上地下所有的權柄都賜給我了。 19 所以，你們要去，使萬民作我的門徒，奉父、子、聖靈的名給他們施洗。 20 凡我所吩咐你們的，都教訓他們遵守，我就常與你們同在，直到世界的末了。」' },
                { verse: '路加福音 8 章 5-8 節', content: ' 5 「有一個撒種的出去撒種。撒的時候，有落在路旁的，被人踐踏，天上的飛鳥又來吃盡了。 6 有落在磐石上的，一出來就枯乾了，因為得不着滋潤。 7 有落在荊棘裏的，荊棘一同生長，把它擠住了。 8 又有落在好土裏的，生長起來，結實百倍。」' },
                { verse: '路加福音 8 章 11-15 節', content: '11 「這比喻乃是這樣：種子就是神的道。 12 那些在路旁的，就是人聽了道，隨後魔鬼來，從他們心裏把道奪去，恐怕他們信了得救。 13 那些在磐石上的，就是人聽道，歡喜領受，但心中沒有根，不過暫時相信，及至遇見試煉就退後了。 14 那落在荊棘裏的，就是人聽了道，走開以後，被今生的思慮、錢財、宴樂擠住了，便結不出成熟的子粒來。15 那落在好土裏的，就是人聽了道，持守在誠實善良的心裏，並且忍耐着結實。' },
                { verse: '哥林多前書 1 章 18-19 節', content: '18 因為十字架的道理，對於走向滅亡的人來說是愚拙的，但對於我們這些得救的人來說，卻是神的大能。 19 因為經上記着：「我要毀掉智慧人的智慧，廢掉聰明人的聰明。」' },
                { verse: '路加福音 10 章 2 節', content: ' 2 就對他們說：「要收的莊稼多，做工的人少。所以，你們當求莊稼的主打發工人出去收他的莊稼。' }
            ];
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__topic_detail_topic_detail__["a" /* TopicDetailPage */], { chineseContent: chineseContentForDetailPage, content: topicContent, title: title });
        }
        else if (title == 'Holiness') {
            var topicContent = [
                { verse: '1 Peter 2:9', content: '9 But you are a chosen people, a royal priesthood, a holy nation, God’s special possession, that you may declare the praises of him who called you out of darkness into his wonderful light. ' },
                { verse: 'Leviticus 19:1-2', content: '1 The Lord said to Moses, 2 “Speak to the entire assembly of Israel and say to them: ‘Be holy because I, the Lord your God, am holy.' },
                { verse: 'Leviticus 20:25-26', content: '25 “‘You must therefore make a distinction between clean and unclean animals and between unclean and clean birds. Do not defile yourselves by any animal or bird or anything that moves along the ground—those that I have set apart as unclean for you. 26 You are to be holy to me because I, the Lord, am holy, and I have set you apart from the nations to be my own.' },
                { verse: 'Matthew 5:13', content: '13 “You are the salt of the earth. But if the salt loses its saltiness, how can it be made salty again? It is no longer good for anything, except to be thrown out and trampled underfoot.' },
                { verse: '1 Corinthians 6:18-20', content: '18 Flee from sexual immorality. All other sins a person commits are outside the body, but whoever sins sexually, sins against their own body. 19 Do you not know that your bodies are temples of the Holy Spirit, who is in you, whom you have received from God? You are not your own; 20 you were bought at a price. Therefore honor God with your bodies.' },
                { verse: 'Psalms 119:9-11', content: '9 How can a young person stay on the path of purity? By living according to your word. 10 I seek you with all my heart; do not let me stray from your commands. 11 I have hidden your word in my heart that I might not sin against you.' },
                { verse: 'Philippians 4:8', content: '8 Finally, brothers and sisters, whatever is true, whatever is noble, whatever is right, whatever is pure, whatever is lovely, whatever is admirable—if anything is excellent or praiseworthy—think about such things.' },
                { verse: '2 Corinthians 7:1', content: '1 Therefore, since we have these promises, dear friends, let us purify ourselves from everything that contaminates body and spirit, perfecting holiness out of reverence for God.' },
                { verse: '1 Peter 1:14-16', content: ' 14 As obedient children, do not conform to the evil desires you had when you lived in ignorance. 15 But just as he who called you is holy, so be holy in all you do; 16 for it is written: “Be holy, because I am holy.”' },
                { verse: 'Romans 13:12-14', content: '12 The night is nearly over; the day is almost here. So let us put aside the deeds of darkness and put on the armor of light. 13 Let us behave decently, as in the daytime, not in carousing and drunkenness, not in sexual immorality and debauchery, not in dissension and jealousy. 14 Rather, clothe yourselves with the Lord Jesus Christ, and do not think about how to gratify the desires of the flesh.' },
                { verse: 'Matthew 18:8-9', content: '8 If your hand or your foot causes you to stumble, cut it off and throw it away. It is better for you to enter life maimed or crippled than to have two hands or two feet and be thrown into eternal fire. 9 And if your eye causes you to stumble, gouge it out and throw it away. It is better for you to enter life with one eye than to have two eyes and be thrown into the fire of hell.' },
                { verse: 'Hebrews 12:10-11', content: '10 They disciplined us for a little while as they thought best; but God disciplines us for our good, in order that we may share in his holiness. 11 No discipline seems pleasant at the time, but painful. Later on, however, it produces a harvest of righteousness and peace for those who have been trained by it.' },
                { verse: 'Hebrews 12:14', content: '14 Make every effort to live in peace with everyone and to be holy; without holiness no one will see the Lord.' },
                { verse: '2 Peter 3:11-13', content: '11 Since everything will be destroyed in this way, what kind of people ought you to be? You ought to live holy and godly lives 12 as you look forward to the day of God and speed its coming. That day will bring about the destruction of the heavens by fire, and the elements will melt in the heat. 13 But in keeping with his promise we are looking forward to a new heaven and a new earth, where righteousness dwells.' }
            ];
            var chineseContentForDetailPage = [
                { verse: '彼得前書 2 章 9 節', content: '9 惟有你們是被揀選的族類，是有君尊的祭司，是聖潔的國度，是屬神的子民，要叫你們宣揚那召你們出黑暗、入奇妙光明者的美德。' },
                { verse: '利未記 19 章 1-2 節', content: '1 耶和華對摩西說： 2 「你曉諭以色列全會眾說：『你們要聖潔，因為我耶和華你們的神是聖潔的。' },
                { verse: '利未記 20 章 25-26 節', content: '25 「『所以，你們要把潔淨和不潔淨的禽獸分別出來，不可因我給你們分為不潔淨的禽獸，或是滋生在地上的活物，使自己成為可憎惡的。 26 你們要歸我為聖，因為我耶和華是聖的，並叫你們與萬民有分別，使你們作我的民。' },
                { verse: '馬太福音 5 章 13 節', content: '13 「你們是世上的鹽。鹽若失了味，怎能叫它再鹹呢？以後無用，不過丟在外面，被人踐踏了。' },
                { verse: '哥林多前書 6 章 18-20 節', content: '18 你們要逃避淫行。人所犯的，無論甚麼罪，都在身子以外，惟有行淫的，是得罪自己的身子。 19 豈不知你們的身子就是聖靈的殿嗎？這聖靈是從神而來，住在你們裏頭的；並且你們不是自己的人， 20 因為你們是重價買來的，所以要在你們的身子上榮耀神。' },
                { verse: '詩篇 119 篇 9-11 節', content: '9 少年人用甚麼潔淨他的行為呢？是要遵行你的話。10 我一心尋求了你，求你不要叫我偏離你的命令。 11 我將你的話藏在心裏，免得我得罪你。 ' },
                { verse: '腓立比書 4 章 8 節', content: '8 弟兄們，我還有未盡的話：凡是真實的、可敬的、公義的、清潔的、可愛的、有美名的，若有甚麼德行，若有甚麼稱讚，這些事你們都要思念。' },
                { verse: '哥林多後書 7 章 1 節', content: '1 親愛的弟兄啊，我們既有這等應許，就當潔淨自己，除去身體、靈魂一切的污穢，敬畏神，得以成聖。' },
                { verse: '彼得前書 1 章 14-16 節', content: ' 14 你們既作順命的兒女，就不要效法從前蒙昧無知的時候那放縱私慾的樣子。 15 那召你們的既是聖潔，你們在一切所行的事上也要聖潔。 16 因為經上記着說：「你們要聖潔，因為我是聖潔的。」' },
                { verse: '羅馬書 13 章 12-14 節', content: ' 12 黑夜已深，白晝將近；我們就當脫去暗昧的行為，帶上光明的兵器。 13 行事為人要端正，好像行在白晝；不可荒宴醉酒，不可好色邪蕩，不可爭競嫉妒。 14 總要披戴主耶穌基督，不要為肉體安排去放縱私慾。' },
                { verse: '馬太福音 18 章 8-9 節', content: ' 8 倘若你一隻手或是一隻腳叫你跌倒，就砍下來丟掉；你缺一隻手或是一隻腳進入永生，強如有兩手兩腳被丟在永火裏。 9 倘若你一隻眼叫你跌倒，就把它剜出來丟掉；你只有一隻眼進入永生，強如有兩隻眼被丟在地獄的火裏。」' },
                { verse: '希伯來書 12 章 10-11 節', content: '10 生身的父都是暫隨己意管教我們，惟有萬靈的父管教我們，是要我們得益處，使我們在他的聖潔上有分。 11 凡管教的事，當時不覺得快樂，反覺得愁苦，後來卻為那經練過的人結出平安的果子，就是義。' },
                { verse: '希伯來書 12 章 14 節', content: '14 你們要追求與眾人和睦，並要追求聖潔；非聖潔沒有人能見主。' },
                { verse: '彼得後書 3 章 11-13 節', content: '11 這一切既然都要這樣熔化，那麼，你們應該成為怎麼樣的人？你們的生活就應當聖潔敬虔， 12 冀望並加快神的日子來臨，因為到那日，天要被火焚燒而熔化，眾天體都要燒燬熔解。 13 但我們按照他的應許冀望新天新地，在那裏有公義常住。' }
            ];
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__topic_detail_topic_detail__["a" /* TopicDetailPage */], { chineseContent: chineseContentForDetailPage, content: topicContent, title: title });
        }
        else if (title == 'Holy Spirit/Holy Ghost') {
            var topicContent = [
                { verse: 'John 7:38-39', content: ' 38 Whoever believes in me, as Scripture has said, rivers of living water will flow from within them.” 39 By this he meant the Spirit, whom those who believed in him were later to receive. Up to that time the Spirit had not been given, since Jesus had not yet been glorified.' },
                { verse: 'John 14:15-18', content: '15 “If you love me, keep my commands. 16 And I will ask the Father, and he will give you another advocate to help you and be with you forever— 17 the Spirit of truth. The world cannot accept him, because it neither sees him nor knows him. But you know him, for he lives with you and will be in you. 18 I will not leave you as orphans; I will come to you. ' },
                { verse: 'John 14:26', content: ' 26 But the Advocate, the Holy Spirit, whom the Father will send in my name, will teach you all things and will remind you of everything I have said to you.' },
                { verse: 'John 16:7-8', content: '7 But very truly I tell you, it is for your good that I am going away. Unless I go away, the Advocate will not come to you; but if I go, I will send him to you. 8 When he comes, he will prove the world to be in the wrong about sin and righteousness and judgment: ' },
                { verse: 'John 16:12-13', content: '12 “I have much more to say to you, more than you can now bear. 13 But when he, the Spirit of truth, comes, he will guide you into all the truth. He will not speak on his own; he will speak only what he hears, and he will tell you what is yet to come.' },
                { verse: 'Romans 8:26-27', content: '26 In the same way, the Spirit helps us in our weakness. We do not know what we ought to pray for, but the Spirit himself intercedes for us through wordless groans. 27 And he who searches our hearts knows the mind of the Spirit, because the Spirit intercedes for God’s people in accordance with the will of God.' },
                { verse: 'Luke 3:21-22', content: '21 When all the people were being baptized, Jesus was baptized too. And as he was praying, heaven was opened 22 and the Holy Spirit descended on him in bodily form like a dove. And a voice came from heaven: “You are my Son, whom I love; with you I am well pleased.”' },
                { verse: 'Acts 2:38', content: '38 Peter replied, “Repent and be baptized, every one of you, in the name of Jesus Christ for the forgiveness of your sins. And you will receive the gift of the Holy Spirit. ' },
                { verse: 'Acts 1:8', content: ' 8 But you will receive power when the Holy Spirit comes on you; and you will be my witnesses in Jerusalem, and in all Judea and Samaria, and to the ends of the earth.' },
                { verse: 'Acts 2:1-4', content: '1 When the day of Pentecost came, they were all together in one place. 2 Suddenly a sound like the blowing of a violent wind came from heaven and filled the whole house where they were sitting. 3 They saw what seemed to be tongues of fire that separated and came to rest on each of them. 4 All of them were filled with the Holy Spirit and began to speak in other tongues as the Spirit enabled them.' },
                { verse: 'Galatians 5:22-23', content: '22 But the fruit of the Spirit is love, joy, peace, forbearance, kindness, goodness, faithfulness, 23 gentleness and self-control. Against such things there is no law. ' },
                { verse: 'Romans 8:14-17', content: '14 For those who are led by the Spirit of God are the children of God. 15 The Spirit you received does not make you slaves, so that you live in fear again; rather, the Spirit you received brought about your adoption to sonship. And by him we cry, “Abba Father.” 16 The Spirit himself testifies with our spirit that we are God’s children. 17 Now if we are children, then we are heirs—heirs of God and co-heirs with Christ, if indeed we share in his sufferings in order that we may also share in his glory.' },
                { verse: '1 Corinthians 2:10b-11', content: '10 ...The Spirit searches all things, even the deep things of God. 11 For who knows a person’s thoughts except their own spirit within them? In the same way no one knows the thoughts of God except the Spirit of God.' }
            ];
            var chineseContentForDetailPage = [
                { verse: '約翰福音 7 章 38-39 節', content: ' 38 信我的人，就如經上所說：『從他腹中要流出活水的江河來。』」 39 耶穌這話是指着信他之人要受聖靈說的。那時還沒有賜下聖靈來，因為耶穌尚未得着榮耀。' },
                { verse: '約翰福音 14 章 15-18 節', content: '15 「你們若愛我，就必遵守我的命令。 16 我要求父，父就另外賜給你們一位保惠師，叫他永遠與你們同在， 17 就是真理的聖靈，乃世人不能接受的，因為不見他，也不認識他；你們卻認識他，因他常與你們同在，也要在你們裏面。18 我不撇下你們為孤兒，我必到你們這裏來。 ' },
                { verse: '約翰福音 14 章 26 節', content: '26 但保惠師，就是父因我的名所要差來的聖靈，他要將一切的事指教你們，並且要叫你們想起我對你們所說的一切話。' },
                { verse: '約翰福音 16 章 7-8 節', content: '7 然而我將真情告訴你們，我去是與你們有益的。我若不去，保惠師就不到你們這裏來；我若去，就差他來。8 他既來了，就要叫世人為罪、為義、為審判，自己責備自己。 ' },
                { verse: '約翰福音 16 章 12-13 節', content: '12 「我還有好些事要告訴你們，但你們現在擔當不了。 13只等真理的聖靈來了，他要引導你們明白一切的真理，因為他不是憑自己說的，乃是把他所聽見的都說出來，並要把將來的事告訴你們。 ' },
                { verse: '羅馬書 8 章 26-27 節', content: '26 況且，我們的軟弱有聖靈幫助，我們本不曉得當怎樣禱告，只是聖靈親自用說不出來的歎息替我們禱告。 27 鑒察人心的，曉得聖靈的意思，因為聖靈照着神的旨意替聖徒祈求。' },
                { verse: '路加福音 3 章 21-22 節', content: '21 眾百姓都受了洗，耶穌也受了洗。正禱告的時候，天就開了， 22 聖靈降臨在他身上，形狀彷彿鴿子；又有聲音從天上來，說：「你是我的愛子，我喜悅你。」' },
                { verse: '使徒行傳 2 章 38 節', content: '38 彼得說：「你們各人要悔改，奉耶穌基督的名受洗，叫你們的罪得赦，就必領受所賜的聖靈。' },
                { verse: '使徒行傳 1 章 8 節', content: '8 但聖靈降臨在你們身上，你們就必得着能力；並要在耶路撒冷、猶太全地和撒馬利亞，直到地極，作我的見證。」' },
                { verse: '使徒行傳 2 章 1-4 節', content: '1 五旬節到了，門徒都聚集在一處。 2 忽然，從天上有響聲下來，好像一陣大風吹過，充滿了他們所坐的屋子； 3又有舌頭如火焰顯現出來，分開落在他們各人頭上。 4 他們就都被聖靈充滿，按着聖靈所賜的口才說起別國的話來。' },
                { verse: '加拉太書 5 章 22-23 節', content: '22 聖靈所結的果子，就是仁愛、喜樂、和平、忍耐、恩慈、良善、信實、 23 溫柔、節制。這樣的事，沒有律法禁止。' },
                { verse: '羅馬書 8 章 14-17 節', content: '14 因為凡被神的靈引導的，都是神的兒子。 15 你們所受的不是奴僕的心，仍舊害怕；所受的乃是兒子的心，因此我們呼叫：「阿爸，父！」 16 聖靈與我們的心同證我們是神的兒女； 17 既是兒女，便是後嗣，就是神的後嗣，和基督同作後嗣。如果我們和他一同受苦，也必和他一同得榮耀。' },
                { verse: '哥林多前書 10下-11 節', content: '10 ...因為聖靈參透萬事，就是神深奧的事也參透了。 11 除了在人裏頭的靈，誰知道人的事？像這樣，除了神的靈，也沒有人知道神的事。' }
            ];
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__topic_detail_topic_detail__["a" /* TopicDetailPage */], { chineseContent: chineseContentForDetailPage, content: topicContent, title: title });
        }
        else if (title == 'Loving others') {
            var topicContent = [
                { verse: '1 Corinthians 13:1-3', content: '1 If I speak in the tongues of men or of angels, but do not have love, I am only a resounding gong or a clanging cymbal. 2 If I have the gift of prophecy and can fathom all mysteries and all knowledge, and if I have a faith that can move mountains, but do not have love, I am nothing. 3 If I give all I possess to the poor and give over my body to hardship that I may boast, but do not have love, I gain nothing.' },
                { verse: '1 Corinthians 13:4-7', content: '4 Love is patient, love is kind. It does not envy, it does not boast, it is not proud. 5 It does not dishonor others, it is not self-seeking, it is not easily angered, it keeps no record of wrongs. 6 Love does not delight in evil but rejoices with the truth. 7 It always protects, always trusts, always hopes, always perseveres.' },
                { verse: '1 Corinthians 13:13', content: '13 And now these three remain: faith, hope and love. But the greatest of these is love.' },
                { verse: 'Colossians 3:14', content: '14 And over all these virtues put on love, which binds them all together in perfect unity.' },
                { verse: 'Romans 13:9-10', content: '9 The commandments, “You shall not commit adultery,” “You shall not murder,” “You shall not steal,” “You shall not covet,” and whatever other command there may be, are summed up in this one command: “Love your neighbor as yourself.” 10 Love does no harm to a neighbor. Therefore love is the fulfillment of the law.' },
                { verse: 'Matthew 22:37-40', content: '37 Jesus replied: “‘Love the Lord your God with all your heart and with all your soul and with all your mind.’ 38 This is the first and greatest commandment. 39 And the second is like it: ‘Love your neighbor as yourself.’ 40 All the Law and the Prophets hang on these two commandments.”' },
                { verse: 'Matthew 5:43-45', content: '43 “You have heard that it was said, ‘Love your neighbor and hate your enemy.’ 44 But I tell you, love your enemies and pray for those who persecute you, 45 that you may be children of your Father in heaven. He causes his sun to rise on the evil and the good, and sends rain on the righteous and the unrighteous.' },
                { verse: 'Matthew 5:46-48', content: '46 If you love those who love you, what reward will you get? Are not even the tax collectors doing that? 47 And if you greet only your own people, what are you doing more than others? Do not even pagans do that? 48 Be perfect, therefore, as your heavenly Father is perfect.' },
                { verse: 'John 13:34-35', content: '34 “A new command I give you: Love one another. As I have loved you, so you must love one another. 35 By this everyone will know that you are my disciples, if you love one another.”' },
                { verse: 'John 15:12-13', content: ' 12 My command is this: Love each other as I have loved you. 13 Greater love has no one than this: to lay down one’s life for one’s friends.' },
                { verse: '1 John 3:14-15', content: ' 14 We know that we have passed from death to life, because we love each other. Anyone who does not love remains in death. 15 Anyone who hates a brother or sister is a murderer, and you know that no murderer has eternal life residing in him.' },
                { verse: '1 John 3:16', content: '16 This is how we know what love is: Jesus Christ laid down his life for us. And we ought to lay down our lives for our brothers and sisters.' },
                { verse: '1 John 3:17-18', content: '17 If anyone has material possessions and sees a brother or sister in need but has no pity on them, how can the love of God be in that person? 18 Dear children, let us not love with words or speech but with actions and in truth.' },
                { verse: '1 John 4:7-8', content: '7 Dear friends, let us love one another, for love comes from God. Everyone who loves has been born of God and knows God. 8 Whoever does not love does not know God, because God is love. ' },
                { verse: '1 John 4:16b', content: '16 ...God is love. Whoever lives in love lives in God, and God in them. ' },
                { verse: '1 John 4:18', content: '18 There is no fear in love. But perfect love drives out fear, because fear has to do with punishment. The one who fears is not made perfect in love.' },
                { verse: '1 John 4:19-20', content: '19 We love because he first loved us. 20 Whoever claims to love God yet hates a brother or sister is a liar. For whoever does not love their brother and sister, whom they have seen, cannot love God, whom they have not seen. ' },
            ];
            var chineseContentForDetailPage = [
                { verse: '哥林多前書 13 章 1-3 節', content: '1 我若能說萬人的方言，並天使的話語，卻沒有愛，我就成了鳴的鑼、響的鈸一般。 2 我若有先知講道之能，也明白各樣的奧秘、各樣的知識，而且有全備的信，叫我能夠移山，卻沒有愛，我就算不得甚麼。 3 我若將所有的賙濟窮人，又捨己身叫人焚燒，卻沒有愛，仍然與我無益。' },
                { verse: '哥林多前書 13 章 4-7 節', content: '4 愛是恆久忍耐，又有恩慈；愛是不嫉妒，愛是不自誇，不張狂， 5 不作害羞的事，不求自己的益處，不輕易發怒，不計算人的惡， 6 不喜歡不義，只喜歡真理； 7 凡事包容，凡事相信，凡事盼望，凡事忍耐；' },
                { verse: '哥林多前書 13 章 13 節', content: '13 如今常存的有信，有望，有愛；這三樣，其中最大的是愛。' },
                { verse: '歌羅西書 3 章 14 節', content: ' 14 在這一切之外，要存着愛心，愛心就是聯絡全德的。' },
                { verse: '羅馬書 13 章 9-10 節', content: '9 像那「不可姦淫」，「不可殺人」，「不可偷盜」，「不可貪婪」，或有別的誡命，都包在「愛人如己」這一句話之內了。 10 愛是不加害與人的，所以愛就完全了律法。' },
                { verse: '馬太福音 22 章 37-40 節', content: '37 耶穌對他說：「你要盡心、盡性、盡意，愛主你的神。 38 這是誡命中的第一，且是最大的。 39 其次也相倣，就是要愛人如己。 40 這兩條誡命是律法和先知一切道理的總綱。」' },
                { verse: '馬太福音 5 章 43-45 節', content: '43 「你們聽見有話說：『當愛你的鄰舍，恨你的仇敵。』 44 只是我告訴你們：要愛你們的仇敵，為那逼迫你們的禱告。 45 這樣，就可以作你們天父的兒子，因為他叫日頭照好人，也照歹人；降雨給義人，也給不義的人。' },
                { verse: '馬太福音 5 章 46-48 節', content: '46 「你們若單愛那愛你們的人，有甚麼賞賜呢？就是稅吏不也是這樣行嗎？ 47 你們若單請你弟兄的安，比人有甚麼長處呢？就是外邦人不也是這樣行嗎？48 「所以你們要完全，像你們的天父完全一樣。」' },
                { verse: '約翰福音 13 章 34-35 節', content: '34 「我賜給你們一條新命令，乃是叫你們彼此相愛；我怎樣愛你們，你們也要怎樣相愛。 35 你們若有彼此相愛的心，眾人因此就認出你們是我的門徒了。」' },
                { verse: '約翰福音 15 章 12-13 節', content: ' 12 你們要彼此相愛，像我愛你們一樣，這就是我的命令。 13人為朋友捨命，人的愛心沒有比這個大的。 ' },
                { verse: '約翰一書 3 章 14-15 節', content: ' 14 我們因為愛弟兄，就曉得是已經出死入生了。沒有愛心的，仍住在死中。 15 凡恨他弟兄的，就是殺人的；你們曉得凡殺人的，沒有永生存在他裏面。' },
                { verse: '約翰一書 3 章 16 節', content: '16 主為我們捨命，我們從此就知道何為愛，我們也當為弟兄捨命。' },
                { verse: '約翰一書 3 章 17-18 節', content: ' 17 凡有世上財物的，看見弟兄窮乏，卻塞住憐恤的心，愛神的心怎能存在他裏面呢？ 18 小子們哪，我們相愛，不要只在言語和舌頭上，總要在行為和誠實上。' },
                { verse: '約翰一書 4 章 7-8 節', content: '7 親愛的弟兄啊，我們應當彼此相愛，因為愛是從神來的。凡有愛心的，都是由神而生，並且認識神。 8 沒有愛心的，就不認識神，因為神就是愛。' },
                { verse: '約翰一書 4 章 16 節下', content: '16 ...神就是愛！住在愛裏面的，就是住在神裏面，神也住在他裏面。' },
                { verse: '約翰一書 4 章 18 節', content: '18 愛裏沒有懼怕；愛既完全，就把懼怕除去，因為懼怕裏含着刑罰，懼怕的人在愛裏未得完全。' },
                { verse: '約翰一書 4 章 19-20 節', content: '19 我們愛，因為神先愛我們。 20 人若說「我愛神」，卻恨他的弟兄，就是說謊話的；不愛他所看見的弟兄，就不能愛沒有看見的神。 ' },
            ];
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__topic_detail_topic_detail__["a" /* TopicDetailPage */], { chineseContent: chineseContentForDetailPage, content: topicContent, title: title });
        }
        else if (title == 'Marriage/Husband-wife relationship') {
            var topicContent = [
                { verse: 'Genesis 2:20-24', content: '20 So the man gave names to all the livestock, the birds in the sky and all the wild animals. But for Adam no suitable helper was found. 21 So the Lord God caused the man to fall into a deep sleep; and while he was sleeping, he took one of the man’s ribs and then closed up the place with flesh. 22 Then the Lord God made a woman from the rib he had taken out of the man, and he brought her to the man. 23 The man said, “This is now bone of my bones and flesh of my flesh; she shall be called ‘woman,’ for she was taken out of man.” 24 That is why a man leaves his father and mother and is united to his wife, and they become one flesh.' },
                { verse: 'Hebrews 13:4', content: '4 Marriage should be honored by all, and the marriage bed kept pure, for God will judge the adulterer and all the sexually immoral. ' },
                { verse: 'Ephesians 5:22-24', content: '22 Wives, submit yourselves to your own husbands as you do to the Lord. 23  For the husband is the head of the wife as Christ is the head of the church, his body, of which he is the Savior. 24 Now as the church submits to Christ, so also wives should submit to their husbands in everything.' },
                { verse: 'Ephesians 5:25-28', content: '25 Husbands, love your wives, just as Christ loved the church and gave himself up for her 26 to make her holy, cleansing her by the washing with water through the word, 27 and to present her to himself as a radiant church, without stain or wrinkle or any other blemish, but holy and blameless. 28 In this same way, husbands ought to love their wives as their own bodies. He who loves his wife loves himself. ' },
                { verse: '1 Peter 3:1-2', content: '1 Wives, in the same way submit yourselves to your own husbands so that, if any of them do not believe the word, they may be won over without words by the behavior of their wives, 2 when they see the purity and reverence of your lives. ' },
                { verse: '1 Peter 3:7', content: '7 Husbands, in the same way be considerate as you live with your wives, and treat them with respect as the weaker partner and as heirs with you of the gracious gift of life, so that nothing will hinder your prayers.' },
                { verse: '1 Corinthians 7:1-7', content: '1 Now for the matters you wrote about: “It is good for a man not to have sexual relations with a woman.” 2 But since sexual immorality is occurring, each man should have sexual relations with his own wife, and each woman with her own husband. 3 The husband should fulfill his marital duty to his wife, and likewise the wife to her husband. 4 The wife does not have authority over her own body but yields it to her husband. In the same way, the husband does not have authority over his own body but yields it to his wife. 5 Do not deprive each other except perhaps by mutual consent and for a time, so that you may devote yourselves to prayer. Then come together again so that Satan will not tempt you because of your lack of self-control. 6 I say this as a concession, not as a command. 7 I wish that all of you were as I am. But each of you has your own gift from God; one has this gift, another has that.' },
                { verse: '1 Corinthians 7:10-11', content: '10 To the married I give this command (not I, but the Lord): A wife must not separate from her husband. 11 But if she does, she must remain unmarried or else be reconciled to her husband. And a husband must not divorce his wife.' },
                { verse: '1 Corinthians 7:12-16', content: '12 To the rest I say this (I, not the Lord): If any brother has a wife who is not a believer and she is willing to live with him, he must not divorce her. 13 And if a woman has a husband who is not a believer and he is willing to live with her, she must not divorce him. 14 For the unbelieving husband has been sanctified through his wife, and the unbelieving wife has been sanctified through her believing husband. Otherwise your children would be unclean, but as it is, they are holy. 15 But if the unbeliever leaves, let it be so. The brother or the sister is not bound in such circumstances; God has called us to live in peace. 16 How do you know, wife, whether you will save your husband? Or, how do you know, husband, whether you will save your wife?' },
                { verse: 'Matthew 19:3-6', content: '3 Some Pharisees came to him to test him. They asked, “Is it lawful for a man to divorce his wife for any and every reason?” 4 “Haven’t you read,” he replied, “that at the beginning the Creator ‘made them male and female,’ 5 and said, ‘For this reason a man will leave his father and mother and be united to his wife, and the two will become one flesh’? 6 So they are no longer two, but one flesh. Therefore what God has joined together, let no one separate.”' },
                { verse: 'Matthew 19:7-9', content: '7 “Why then,” they asked, “did Moses command that a man give his wife a certificate of divorce and send her away?” 8 Jesus replied, “Moses permitted you to divorce your wives because your hearts were hard. But it was not this way from the beginning. 9 I tell you that anyone who divorces his wife, except for sexual immorality, and marries another woman commits adultery.”' },
                { verse: '1 Corinthians 7:8-9', content: '8 Now to the unmarried and the widows I say: It is good for them to stay unmarried, as I do. 9 But if they cannot control themselves, they should marry, for it is better to marry than to burn with passion.' }
            ];
            var chineseContentForDetailPage = [
                { verse: '創世記 2 章 20-24 節', content: ' 20 那人便給一切牲畜和空中飛鳥、野地走獸都起了名。只是那人沒有遇見配偶幫助他。21 耶和華神使他沉睡，他就睡了；於是取下他的一條肋骨，又把肉合起來。 22 耶和華神就用那人身上所取的肋骨造成一個女人，領她到那人跟前。23 那人說：「這是我骨中的骨，肉中的肉，可以稱她為『女人』，因為她是從男人身上取出來的。」24 因此，人要離開父母與妻子連合，二人成為一體。' },
                { verse: '希伯來書 13 章 4 節', content: '4 婚姻，人人都當尊重，牀也不可污穢，因為苟合行淫的人，神必要審判。' },
                { verse: '以弗所書 5 章 22-24 節', content: '22 你們作妻子的，當順服自己的丈夫，如同順服主。 23 因為丈夫是妻子的頭，如同基督是教會的頭，他又是教會全體的救主。 24 教會怎樣順服基督，妻子也要怎樣凡事順服丈夫。' },
                { verse: '以弗所書 5 章 25-28 節', content: '25 你們作丈夫的，要愛你們的妻子，正如基督愛教會，為教會捨己。 26 要用水藉着道把教會洗淨，成為聖潔， 27可以獻給自己，作個榮耀的教會，毫無玷污、皺紋等類的病，乃是聖潔沒有瑕疵的。 28 丈夫也當照樣愛妻子，如同愛自己的身子，愛妻子便是愛自己了。' },
                { verse: '彼得前書 3 章 1-2 節', content: '1 你們作妻子的要順服自己的丈夫。這樣，若有不信從道理的丈夫，他們雖然不聽道，也可以因妻子的品行被感化過來。 2 這正是因看見你們有貞潔的品行和敬畏的心。 ' },
                { verse: '彼得前書 3 章 7 節', content: '7 你們作丈夫的也要按情理和妻子同住，因她比你軟弱，與你一同承受生命之恩的，所以要敬重她。這樣，便叫你們的禱告沒有阻礙。' },
                { verse: '哥林多前書 7 章 1-7 節', content: '1 論到你們信上所提的事，我說男不近女倒好。 2 但要免淫亂的事，男子當各有自己的妻子，女子也當各有自己的丈夫。 3 丈夫當用合宜之分待妻子，妻子待丈夫也要如此。4 妻子沒有權柄主張自己的身子，乃在丈夫；丈夫也沒有權柄主張自己的身子，乃在妻子。 5 夫妻不可彼此虧負，除非兩相情願，暫時分房，為要專心禱告方可；以後仍要同房，免得撒但趁着你們情不自禁引誘你們。 6 我說這話，原是准你們的，不是命你們的。 7 我願意眾人像我一樣，只是各人領受神的恩賜，一個是這樣，一個是那樣。' },
                { verse: '哥林多前書 7 章 10-11 節', content: '10 至於那已經嫁娶的，我吩咐他們，其實不是我吩咐，乃是主吩咐說：「妻子不可離開丈夫。 11 若是離開了，不可再嫁，或是仍同丈夫和好。丈夫也不可離棄妻子。」' },
                { verse: '哥林多前書 7 章 12-16 節', content: '12 我對其餘的人說，不是主說，倘若某弟兄有不信的妻子，妻子也情願和他同住，他就不要離棄妻子。 13 妻子有不信的丈夫，丈夫也情願和她同住，她就不要離棄丈夫。 14 因為不信的丈夫就因着妻子成了聖潔，並且不信的妻子就因着丈夫成了聖潔。不然，你們的兒女就不潔淨，但如今他們是聖潔的了。15 倘若那不信的人要離去，就由他離去吧！無論是弟兄，是姐妹，遇着這樣的事都不必拘束。神召我們原是要我們和睦。 16 你這作妻子的，怎麼知道不能救你的丈夫呢？你這作丈夫的，怎麼知道不能救你的妻子呢？' },
                { verse: '馬太福音 19 章 3-6 節', content: '3 有法利賽人來試探耶穌說：「人無論甚麼緣故都可以休妻嗎？」4 耶穌回答說：「那起初造人的，是造男造女， 5 並且說：『因此，人要離開父母，與妻子連合，二人成為一體。』這經你們沒有念過嗎？ 6 既然如此，夫妻不再是兩個人，乃是一體的了。所以，神配合的，人不可分開。」' },
                { verse: '馬太福音 19 章 7-9 節', content: '7 法利賽人說：「這樣，摩西為甚麼吩咐給妻子休書，就可以休她呢？」8 耶穌說：「摩西因為你們的心硬，所以許你們休妻，但起初並不是這樣。 9 我告訴你們：凡休妻另娶的，若不是為淫亂的緣故，就是犯姦淫了；有人娶那被休的婦人，也是犯姦淫了。」' },
                { verse: '哥林多前書 7 章 8-9 節', content: '8 我對着沒有嫁娶的和寡婦說，若他們常像我就好。 9 倘若自己禁止不住，就可以嫁娶。與其慾火攻心，倒不如嫁娶為妙。' }
            ];
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__topic_detail_topic_detail__["a" /* TopicDetailPage */], { chineseContent: chineseContentForDetailPage, content: topicContent, title: title });
        }
        else if (title == 'Money and wealth') {
            var topicContent = [
                { verse: 'Matthew 6:19-21', content: '19 “Do not store up for yourselves treasures on earth, where moths and vermin destroy, and where thieves break in and steal. 20 But store up for yourselves treasures in heaven, where moths and vermin do not destroy, and where thieves do not break in and steal. 21 For where your treasure is, there your heart will be also.' },
                { verse: 'Matthew 6:24', content: '24 “No one can serve two masters. Either you will hate the one and love the other, or you will be devoted to the one and despise the other. You cannot serve both God and money.' },
                { verse: 'Hebrews 13:5', content: '5 Keep your lives free from the love of money and be content with what you have, because God has said,“Never will I leave you; never will I forsake you.”' },
                { verse: 'Luke 18:18-23', content: '18 A certain ruler asked him, “Good teacher, what must I do to inherit eternal life?” 19 “Why do you call me good?” Jesus answered. “No one is good—except God alone. 20 You know the commandments: ‘You shall not commit adultery, you shall not murder, you shall not steal, you shall not give false testimony, honor your father and mother.’” 21 “All these I have kept since I was a boy,” he said. 22 When Jesus heard this, he said to him, “You still lack one thing. Sell everything you have and give to the poor, and you will have treasure in heaven. Then come, follow me.” 23 When he heard this, he became very sad, because he was very wealthy.' },
                { verse: 'Luke 18:24-27', content: '24 Jesus looked at him and said, “How hard it is for the rich to enter the kingdom of God! 25 Indeed, it is easier for a camel to go through the eye of a needle than for someone who is rich to enter the kingdom of God.” 26 Those who heard this asked, “Who then can be saved?” 27 Jesus replied, “What is impossible with man is possible with God.”' },
                { verse: '1 Timothy 6:9-10', content: '9 Those who want to get rich fall into temptation and a trap and into many foolish and harmful desires that plunge people into ruin and destruction. 10 For the love of money is a root of all kinds of evil. Some people, eager for money, have wandered from the faith and pierced themselves with many griefs.' },
                { verse: 'Ecclesiastes 5:10-11', content: '10 Whoever loves money never has enough; whoever loves wealth is never satisfied with their income. This too is meaningless. 11 As goods increase, so do those who consume them. And what benefit are they to the owners except to feast their eyes on them?' },
                { verse: '1 Timothy 6:17-19', content: '17 Command those who are rich in this present world not to be arrogant nor to put their hope in wealth, which is so uncertain, but to put their hope in God, who richly provides us with everything for our enjoyment. 18 Command them to do good, to be rich in good deeds, and to be generous and willing to share. 19 In this way they will lay up treasure for themselves as a firm foundation for the coming age, so that they may take hold of the life that is truly life.' },
                { verse: '1 John 3:17-18', content: '17 If anyone has material possessions and sees a brother or sister in need but has no pity on them, how can the love of God be in that person? 18 Dear children, let us not love with words or speech but with actions and in truth.' },
                { verse: 'Malachi 3:10', content: '10 Bring the whole tithe into the storehouse, that there may be food in my house. Test me in this,” says the Lord Almighty, “and see if I will not throw open the floodgates of heaven and pour out so much blessing that there will not be room enough to store it.' },
                { verse: 'Ecclesiastes 5:18-20', content: '18 This is what I have observed to be good: that it is appropriate for a person to eat, to drink and to find satisfaction in their toilsome labor under the sun during the few days of life God has given them—for this is their lot. 19 Moreover, when God gives someone wealth and possessions, and the ability to enjoy them, to accept their lot and be happy in their toil—this is a gift of God. 20 They seldom reflect on the days of their life, because God keeps them occupied with gladness of heart.' },
                { verse: 'Proverbs 30:7-9', content: '7 “Two things I ask of you, Lord; do not refuse me before I die: 8 Keep falsehood and lies far from me; give me neither poverty nor riches, but give me only my daily bread. 9 Otherwise, I may have too much and disown you and say, ‘Who is the Lord?’ Or I may become poor and steal, and so dishonor the name of my God.' },
                { verse: 'Proverbs 17:1', content: '1 Better a dry crust with peace and quiet than a house full of feasting, with strife.' }
            ];
            var chineseContentForDetailPage = [
                { verse: '馬太福音 6 章 19-21 節', content: '19 「不要為自己積攢財寶在地上，地上有蟲子咬，能銹壞，也有賊挖窟窿來偷； 20 只要積攢財寶在天上，天上沒有蟲子咬，不能銹壞，也沒有賊挖窟窿來偷。 21 因為你的財寶在哪裏，你的心也在那裏。」' },
                { verse: '馬太福音 6 章 24 節', content: '24 「一個人不能事奉兩個主。不是惡這個愛那個，就是重這個輕那個。你們不能又事奉神，又事奉瑪門。' },
                { verse: '希伯來書 13 章 5 節', content: '5 你們存心不可貪愛錢財，要以自己所有的為足。因為主曾說：「我總不撇下你，也不丟棄你。」' },
                { verse: '路加福音 18 章 18-23 節', content: '18 有一個官問耶穌說：「良善的夫子，我該做甚麼事才可以承受永生？」19 耶穌對他說：「你為甚麼稱我是良善的？除了神一位之外，再沒有良善的。 20 誡命你是曉得的：『不可姦淫，不可殺人，不可偷盜，不可作假見證，當孝敬父母。』」21 那人說：「這一切我從小都遵守了。」22 耶穌聽見了，就說：「你還缺少一件：要變賣你一切所有的，分給窮人，就必有財寶在天上；你還要來跟從我。」23 他聽見這話，就甚憂愁，因為他很富足。' },
                { verse: '路加福音 18 章 24-27 節', content: '24 耶穌看見他，就說：「有錢財的人進神的國是何等地難哪！ 25 駱駝穿過針的眼，比財主進神的國還容易呢！」26 聽見的人說：「這樣，誰能得救呢？」27 耶穌說：「在人所不能的事，在神卻能。」' },
                { verse: '提摩太前書 6 章 9-10 節', content: '9 但那些想要發財的人，就陷在迷惑、落在網羅和許多無知有害的私慾裏，叫人沉在敗壞和滅亡中。 10 貪財是萬惡之根！有人貪戀錢財，就被引誘離了真道，用許多愁苦把自己刺透了。' },
                { verse: '傳道書 5 章 10-11 節', content: '10 貪愛銀子的，不因得銀子知足；貪愛豐富的，也不因得利益知足。這也是虛空。11 貨物增添，吃的人也增添，物主得甚麼益處呢？不過眼看而已。' },
                { verse: '提摩太前書 6 章 17-19 節', content: ' 17 你要囑咐那些今世富足的人，不要自高，也不要倚靠無定的錢財；只要倚靠那厚賜百物給我們享受的神。 18 又要囑咐他們行善，在好事上富足，甘心施捨，樂意供給人， 19為自己積成美好的根基，預備將來，叫他們持定那真正的生命。' },
                { verse: '約翰一書 3 章 17-18 節', content: ' 17 凡有世上財物的，看見弟兄窮乏，卻塞住憐恤的心，愛神的心怎能存在他裏面呢？ 18 小子們哪，我們相愛，不要只在言語和舌頭上，總要在行為和誠實上。' },
                { verse: '瑪拉基書 3 章 10 節', content: '10 萬軍之耶和華說：「你們要將當納的十分之一全然送入倉庫，使我家有糧，以此試試我是否為你們敞開天上的窗戶，傾福與你們，甚至無處可容。」' },
                { verse: '傳道書 5 章 18-20 節', content: '18 我所見為善為美的，就是人在神賜他一生的日子吃喝，享受日光之下勞碌得來的好處，因為這是他的分。 19 神賜人資財豐富，使他能以吃用，能取自己的分，在他勞碌中喜樂，這乃是神的恩賜。 20 他不多思念自己一生的年日，因為神應他的心使他喜樂。' },
                { verse: '箴言 30 章 7-9 節', content: '7 「我求你兩件事，在我未死之先，不要不賜給我：8 求你使虛假和謊言遠離我，使我也不貧窮也不富足，賜給我需用的飲食。9 恐怕我飽足不認你，說：『耶和華是誰呢？』又恐怕我貧窮就偷竊，以致褻瀆我神的名。' },
                { verse: '箴言 17 章 1 節', content: '1 設筵滿屋，大家相爭，不如有塊乾餅，大家相安。' }
            ];
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__topic_detail_topic_detail__["a" /* TopicDetailPage */], { chineseContent: chineseContentForDetailPage, content: topicContent, title: title });
        }
        else if (title == 'Persecution and trials') {
            var topicContent = [
                { verse: '1 Peter 4:12-13', content: '12 Dear friends, do not be surprised at the fiery ordeal that has come on you to test you, as though something strange were happening to you. 13 But rejoice inasmuch as you participate in the sufferings of Christ, so that you may be overjoyed when his glory is revealed. ' },
                { verse: 'James 1:2-4', content: '2 Consider it pure joy, my brothers and sisters, whenever you face trials of many kinds, 3 because you know that the testing of your faith produces perseverance. 4 Let perseverance finish its work so that you may be mature and complete, not lacking anything. ' },
                { verse: 'James 1:12', content: '12 Blessed is the one who perseveres under trial because, having stood the test, that person will receive the crown of life that the Lord has promised to those who love him.' },
                { verse: 'Matthew 5:10-12', content: '10 Blessed are those who are persecuted because of righteousness, for theirs is the kingdom of heaven. 11 “Blessed are you when people insult you, persecute you and falsely say all kinds of evil against you because of me. 12 Rejoice and be glad, because great is your reward in heaven, for in the same way they persecuted the prophets who were before you.' },
                { verse: 'Luke 12:8-10', content: '8 “I tell you, whoever publicly acknowledges me before others, the Son of Man will also acknowledge before the angels of God. 9 But whoever disowns me before others will be disowned before the angels of God. 10 And everyone who speaks a word against the Son of Man will be forgiven, but anyone who blasphemes against the Holy Spirit will not be forgiven.' },
                { verse: '2 Timothy 2:11-13', content: '11 Here is a trustworthy saying: If we died with him, we will also live with him; 12 if we endure, we will also reign with him. If we disown him, he will also disown us; 13 if we are faithless, he remains faithful, for he cannot disown himself.' },
                { verse: 'Luke 12:11-12', content: '11 “When you are brought before synagogues, rulers and authorities, do not worry about how you will defend yourselves or what you will say, 12 for the Holy Spirit will teach you at that time what you should say.”' },
                { verse: 'Luke 21:12-19', content: '12 “But before all this, they will seize you and persecute you. They will hand you over to synagogues and put you in prison, and you will be brought before kings and governors, and all on account of my name. 13 And so you will bear testimony to me. 14 But make up your mind not to worry beforehand how you will defend yourselves. 15 For I will give you words and wisdom that none of your adversaries will be able to resist or contradict. 16 You will be betrayed even by parents, brothers and sisters, relatives and friends, and they will put some of you to death. 17 Everyone will hate you because of me. 18 But not a hair of your head will perish. 19 Stand firm, and you will win life.' },
                { verse: 'Romans 8:31-35', content: '31 What, then, shall we say in response to these things? If God is for us, who can be against us? 32 He who did not spare his own Son, but gave him up for us all—how will he not also, along with him, graciously give us all things?  33 Who will bring any charge against those whom God has chosen? It is God who justifies. 34 Who then is the one who condemns? No one. Christ Jesus who died—more than that, who was raised to life—is at the right hand of God and is also interceding for us. 35 Who shall separate us from the love of Christ? Shall trouble or hardship or persecution or famine or nakedness or danger or sword?' },
                { verse: 'John 15:18-19', content: '18 “If the world hates you, keep in mind that it hated me first. 19 If you belonged to the world, it would love you as its own. As it is, you do not belong to the world, but I have chosen you out of the world. That is why the world hates you. ' },
                { verse: 'Matthew 5:43-45', content: '43 “You have heard that it was said, ‘Love your neighbor and hate your enemy.’ 44 But I tell you, love your enemies and pray for those who persecute you, 45 that you may be children of your Father in heaven. He causes his sun to rise on the evil and the good, and sends rain on the righteous and the unrighteous.' },
                { verse: '1 Peter 4:19', content: '19 So then, those who suffer according to God’s will should commit themselves to their faithful Creator and continue to do good.' },
                { verse: 'Philippians 1:12-14', content: '12 Now I want you to know, brothers and sisters, that what has happened to me has actually served to advance the gospel. 13 As a result, it has become clear throughout the whole palace guard and to everyone else that I am in chains for Christ. 14 And because of my chains, most of the brothers and sisters have become confident in the Lord and dare all the more to proclaim the gospel without fear.' },
                { verse: '2 Timothy 1:11-12', content: ' 11 And of this gospel I was appointed a herald and an apostle and a teacher. 12 That is why I am suffering as I am. Yet this is no cause for shame, because I know whom I have believed, and am convinced that he is able to guard what I have entrusted to him until that day.' }
            ];
            var chineseContentForDetailPage = [
                { verse: '彼得前書 4 章 12-13 節', content: '12 親愛的弟兄啊，有火煉的試驗臨到你們，不要以為奇怪（似乎是遭遇非常的事）， 13 倒要歡喜。因為你們是與基督一同受苦，使你們在他榮耀顯現的時候，也可以歡喜快樂。' },
                { verse: '雅各書 1 章 2-4 節', content: '2 我的弟兄們，你們落在百般試煉中，都要以為大喜樂； 3 因為知道你們的信心經過試驗，就生忍耐。 4 但忍耐也當成功，使你們成全完備，毫無缺欠。' },
                { verse: '雅各書 1 章 12 節', content: '12 忍受試探的人是有福的，因為他經過試驗以後，必得生命的冠冕，這是主應許給那些愛他之人的。' },
                { verse: '馬太福音 5 章 10-12 節', content: '10 為義受逼迫的人有福了，因為天國是他們的。11 「人若因我辱罵你們，逼迫你們，揑造各樣壞話毀謗你們，你們就有福了。 12 應當歡喜快樂，因為你們在天上的賞賜是大的。在你們以前的先知，人也是這樣逼迫他們。」' },
                { verse: '路加福音 12 章 8-10 節', content: '8 「我又告訴你們：凡在人面前認我的，人子在神的使者面前也必認他； 9 在人面前不認我的，人子在神的使者面前也必不認他。 10 凡說話干犯人子的，還可得赦免；惟獨褻瀆聖靈的，總不得赦免。' },
                { verse: '提摩太後書 2 章 11-13 節', content: '11 有可信的話說：「我們若與基督同死，也必與他同活； 12 我們若能忍耐，也必和他一同作王；我們若不認他，他也必不認我們；13 我們縱然失信，他仍是可信的，因為他不能背乎自己。」' },
                { verse: '路加福音 12 章 11-12 節', content: '11 「人帶你們到會堂，並官府和有權柄的人面前，不要思慮怎麼分訴，說甚麼話， 12 因為正在那時候，聖靈要指教你們當說的話。」' },
                { verse: '路加福音 21 章 12-19 節', content: '12 「但這一切的事以先，人要下手拿住你們，逼迫你們，把你們交給會堂，並且收在監裏，又為我的名拉你們到君王諸侯面前。 13 但這些事終必為你們的見證。」14 「所以，你們當立定心意，不要預先思想怎樣分訴， 15 因為我必賜你們口才、智慧，是你們一切敵人所敵不住、駁不倒的。 16 連你們的父母、弟兄、親族、朋友也要把你們交官，你們也有被他們害死的。 17 你們要為我的名被眾人恨惡， 18 然而，你們連一根頭髮也必不損壞。 19 你們常存忍耐，就必保全靈魂。」' },
                { verse: '羅馬書 8 章 31-35 節', content: '31 既是這樣，還有甚麼說的呢？神若幫助我們，誰能敵擋我們呢？ 32 神既不愛惜自己的兒子為我們眾人捨了，豈不也把萬物和他一同白白地賜給我們嗎？ 33 誰能控告神所揀選的人呢？有神稱他們為義了。 34 誰能定他們的罪呢？有基督耶穌已經死了，而且從死裏復活，現今在神的右邊，也替我們祈求。 35 誰能使我們與基督的愛隔絕呢？難道是患難嗎？是困苦嗎？是逼迫嗎？是飢餓嗎？是赤身露體嗎？是危險嗎？是刀劍嗎？ ' },
                { verse: '約翰福音 15 章 18-19 節', content: '18 「世人若恨你們，你們知道恨你們以先，已經恨我了。19 你們若屬世界，世界必愛屬自己的；只因你們不屬世界，乃是我從世界中揀選了你們，所以世界就恨你們。' },
                { verse: '馬太福音 5 章 43-45 節', content: '43 「你們聽見有話說：『當愛你的鄰舍，恨你的仇敵。』 44 只是我告訴你們：要愛你們的仇敵，為那逼迫你們的禱告。 45 這樣，就可以作你們天父的兒子，因為他叫日頭照好人，也照歹人；降雨給義人，也給不義的人。' },
                { verse: '彼得前書 4 章 19 節', content: '19 所以，那照神旨意受苦的人要一心為善，將自己靈魂交與那信實的造化之主。' },
                { verse: '腓立比書 1 章 12-14 節', content: '12 弟兄們，我願意你們知道，我所遭遇的事更是叫福音興旺， 13 以致我受的捆鎖，在御營全軍和其餘的人中，已經顯明是為基督的緣故。 14 並且那在主裏的弟兄，多半因我受的捆鎖，就篤信不疑，越發放膽傳神的道，無所懼怕。' },
                { verse: '提摩太後書 1 章 11-12 節', content: ' 11 我為這福音奉派作傳道的，作使徒，作師傅。 12 為這緣故，我也受這些苦難，然而我不以為恥。因為知道我所信的是誰，也深信他能保全我所交付他的，直到那日。' },
            ];
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__topic_detail_topic_detail__["a" /* TopicDetailPage */], { chineseContent: chineseContentForDetailPage, content: topicContent, title: title });
        }
        else if (title == 'Prayer') {
            var topicContent = [
                { verse: 'Philippians 4:6-7', content: '6 Do not be anxious about anything, but in every situation, by prayer and petition, with thanksgiving, present your requests to God. 7 And the peace of God, which transcends all understanding, will guard your hearts and your minds in Christ Jesus.' },
                { verse: 'Matthew 6:5-6', content: '5 “And when you pray, do not be like the hypocrites, for they love to pray standing in the synagogues and on the street corners to be seen by others. Truly I tell you, they have received their reward in full. 6 But when you pray, go into your room, close the door and pray to your Father, who is unseen. Then your Father, who sees what is done in secret, will reward you. ' },
                { verse: 'Matthew 6:7-8', content: ' 7 And when you pray, do not keep on babbling like pagans, for they think they will be heard because of their many words. 8 Do not be like them, for your Father knows what you need before you ask him.' },
                { verse: 'Matthew 7:7-8', content: '7 “Ask and it will be given to you; seek and you will find; knock and the door will be opened to you. 8 For everyone who asks receives; the one who seeks finds; and to the one who knocks, the door will be opened.' },
                { verse: 'Matthew 7:9-11', content: '9 “Which of you, if your son asks for bread, will give him a stone? 10 Or if he asks for a fish, will give him a snake? 11 If you, then, though you are evil, know how to give good gifts to your children, how much more will your Father in heaven give good gifts to those who ask him! ' },
                { verse: 'James 1:6-7', content: '6 But when you ask, you must believe and not doubt, because the one who doubts is like a wave of the sea, blown and tossed by the wind. 7 That person should not expect to receive anything from the Lord. ' },
                { verse: 'James 4:3', content: ' 3 When you ask, you do not receive, because you ask with wrong motives, that you may spend what you get on your pleasures.' },
                { verse: 'Mark 11:21-24', content: ' 21 Peter remembered and said to Jesus, “Rabbi, look! The fig tree you cursed has withered!” 22 “Have faith in God,” Jesus answered. 23 “Truly I tell you, if anyone says to this mountain, ‘Go, throw yourself into the sea,’ and does not doubt in their heart but believes that what they say will happen, it will be done for them. 24 Therefore I tell you, whatever you ask for in prayer, believe that you have received it, and it will be yours. ' },
                { verse: 'John 14:12-14', content: '12 Very truly I tell you, whoever believes in me will do the works I have been doing, and they will do even greater things than these, because I am going to the Father. 13 And I will do whatever you ask in my name, so that the Father may be glorified in the Son. 14 You may ask me for anything in my name, and I will do it.' },
                { verse: 'John 15:7', content: '7 If you remain in me and my words remain in you, ask whatever you wish, and it will be done for you.' },
                { verse: 'Matthew 6:9-13', content: '9 “This, then, is how you should pray: “‘Our Father in heaven, hallowed be your name, 10 your kingdom come, your will be done, on earth as it is in heaven. 11 Give us today our daily bread. 12 And forgive us our debts, as we also have forgiven our debtors. 13 And lead us not into temptation, but deliver us from the evil one.’' },
                { verse: 'Romans 8:26-27', content: '26 In the same way, the Spirit helps us in our weakness. We do not know what we ought to pray for, but the Spirit himself intercedes for us through wordless groans. 27 And he who searches our hearts knows the mind of the Spirit, because the Spirit intercedes for God’s people in accordance with the will of God.' },
                { verse: 'Mark 11:25', content: ' 25 And when you stand praying, if you hold anything against anyone, forgive them, so that your Father in heaven may forgive you your sins.” ' },
                { verse: 'James 5:16', content: '16 Therefore confess your sins to each other and pray for each other so that you may be healed. The prayer of a righteous person is powerful and effective.' },
                { verse: 'Matthew 18:19-20', content: '19 “Again, truly I tell you that if two of you on earth agree about anything they ask for, it will be done for them by my Father in heaven. 20 For where two or three gather in my name, there am I with them.”' },
                { verse: 'James 5:14-15', content: '14 Is anyone among you sick? Let them call the elders of the church to pray over them and anoint them with oil in the name of the Lord. 15 And the prayer offered in faith will make the sick person well; the Lord will raise them up. If they have sinned, they will be forgiven. ' },
                { verse: 'Ephesians 6:18', content: '18 And pray in the Spirit on all occasions with all kinds of prayers and requests. With this in mind, be alert and always keep on praying for all the Lord’s people.' },
                { verse: 'Luke 18:10-14', content: '10 “Two men went up to the temple to pray, one a Pharisee and the other a tax collector. 11 The Pharisee stood by himself and prayed: ‘God, I thank you that I am not like other people—robbers, evildoers, adulterers—or even like this tax collector. 12 I fast twice a week and give a tenth of all I get.’ 13 “But the tax collector stood at a distance. He would not even look up to heaven, but beat his breast and said, ‘God, have mercy on me, a sinner.’ 14 “I tell you that this man, rather than the other, went home justified before God. For all those who exalt themselves will be humbled, and those who humble themselves will be exalted.”' }
            ];
            var chineseContentForDetailPage = [
                { verse: '腓立比書 4 章 6-7 節', content: ' 6 應當一無掛慮，只要凡事藉着禱告、祈求和感謝，將你們所要的告訴神。 7 神所賜出人意外的平安，必在基督耶穌裏，保守你們的心懷意念。' },
                { verse: '馬太福音 6 章 5-6 節', content: '5 「你們禱告的時候，不可像那假冒為善的人，愛站在會堂裏和十字路口上禱告，故意叫人看見。我實在告訴你們，他們已經得了他們的賞賜。 6 你禱告的時候，要進你的內屋，關上門，禱告你在暗中的父，你父在暗中察看，必然報答你。' },
                { verse: '馬太福音 6 章 7-8 節', content: '7 「你們禱告，不可像外邦人，用許多重複話，他們以為話多了必蒙垂聽。 8 你們不可效法他們，因為你們沒有祈求以先，你們所需用的，你們的父早已知道了。」' },
                { verse: '馬太福音 7 章 7-8 節', content: '7 「你們祈求，就給你們；尋找，就尋見；叩門，就給你們開門。 8 因為凡祈求的，就得着；尋找的，就尋見；叩門的，就給他開門。' },
                { verse: '馬太福音 7 章 9-11 節', content: '9 「你們中間誰有兒子求餅，反給他石頭呢？ 10 求魚，反給他蛇呢？ 11 你們雖然不好，尚且知道拿好東西給兒女，何況你們在天上的父，豈不更把好東西給求他的人嗎？ ' },
                { verse: '雅各書 1 章 6-7 節', content: '6 只要憑着信心求，一點不疑惑；因為那疑惑的人，就像海中的波浪，被風吹動翻騰。 7這樣的人不要想從主那裏得甚麼。' },
                { verse: '雅各書 4 章 3 節', content: '3 你們求也得不着，是因為你們妄求，要浪費在你們的宴樂中。' },
                { verse: '馬可福音 11 章 21-24 節', content: '21 彼得想起耶穌的話來，就對他說：「拉比，請看！你所咒詛的無花果樹，已經枯乾了。」22 耶穌回答說：「你們當信服神。 23 我實在告訴你們：無論何人對這座山說：『你挪開此地，投在海裏！』他若心裏不疑惑，只信他所說的必成，就必給他成了。 24 所以我告訴你們：凡你們禱告祈求的，無論是甚麼，只要信是得着的，就必得着。' },
                { verse: '約翰福音 14 章 12-14 節', content: ' 12 我實實在在地告訴你們：我所做的事，信我的人也要做，並且要做比這更大的事，因為我往父那裏去。 13 你們奉我的名無論求甚麼，我必成就，叫父因兒子得榮耀。 14 你們若奉我的名求甚麼，我必成就。」' },
                { verse: '約翰福音 15 章 7 節', content: ' 7 你們若常在我裏面，我的話也常在你們裏面；凡你們所願意的，祈求就給你們成就。' },
                { verse: '馬太福音 6 章 9-13 節', content: '9 「所以，你們禱告要這樣說：『我們在天上的父，願人都尊你的名為聖。10 願你的國降臨，願你的旨意行在地上，如同行在天上。 11 我們日用的飲食，今日賜給我們。 12 免我們的債，如同我們免了人的債。 13 不叫我們遇見試探，救我們脫離兇惡。因為國度、權柄、榮耀，全是你的，直到永遠。阿們！』' },
                { verse: '羅馬書 8 章 26-27 節', content: '26 況且，我們的軟弱有聖靈幫助，我們本不曉得當怎樣禱告，只是聖靈親自用說不出來的歎息替我們禱告。 27 鑒察人心的，曉得聖靈的意思，因為聖靈照着神的旨意替聖徒祈求。' },
                { verse: '馬可福音 11 章 25 節', content: ' 25 你們站着禱告的時候，若想起有人得罪你們，就當饒恕他，好叫你們在天上的父也饒恕你們的過犯。 ' },
                { verse: '雅各書 5 章 16 節', content: '16 所以你們要彼此認罪，互相代求，使你們可以得醫治。義人祈禱所發的力量是大有功效的。' },
                { verse: '馬太福音 18 章 19-20 節', content: '19 「我又告訴你們：若是你們中間有兩個人在地上同心合意地求甚麼事，我在天上的父必為他們成全。 20 因為無論在哪裏，有兩三個人奉我的名聚會，那裏就有我在他們中間。」' },
                { verse: '雅各書 5 章 14-15 節', content: ' 14 你們中間有病了的呢，他就該請教會的長老來，他們可以奉主的名用油抹他，為他禱告。15 出於信心的祈禱要救那病人，主必叫他起來；他若犯了罪，也必蒙赦免。' },
                { verse: '以弗所書 6 章 18 節', content: '18 靠着聖靈，隨時多方禱告祈求，並要在此警醒不倦，為眾聖徒祈求，' },
                { verse: '路加福音 18 章 10-14 節', content: '10 說：「有兩個人上殿裏去禱告：一個是法利賽人，一個是稅吏。 11 法利賽人站着，自言自語地禱告說：『神啊，我感謝你，我不像別人勒索、不義、姦淫，也不像這個稅吏。12 我一個禮拜禁食兩次，凡我所得的都捐上十分之一。』13 「那稅吏遠遠地站着，連舉目望天也不敢，只捶着胸說：『神啊，開恩可憐我這個罪人！』14 「我告訴你們：這人回家去比那人倒算為義了。因為凡自高的，必降為卑；自卑的，必升為高。」' }
            ];
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__topic_detail_topic_detail__["a" /* TopicDetailPage */], { chineseContent: chineseContentForDetailPage, content: topicContent, title: title });
        }
        else if (title == 'Resurrection') {
            var topicContent = [
                { verse: 'Luke 24:1-8', content: '1 On the first day of the week, very early in the morning, the women took the spices they had prepared and went to the tomb. 2 They found the stone rolled away from the tomb, 3 but when they entered, they did not find the body of the Lord Jesus. 4 While they were wondering about this, suddenly two men in clothes that gleamed like lightning stood beside them. 5 In their fright the women bowed down with their faces to the ground, but the men said to them, “Why do you look for the living among the dead? 6 He is not here; he has risen! Remember how he told you, while he was still with you in Galilee: 7 ‘The Son of Man must be delivered over to the hands of sinners, be crucified and on the third day be raised again.’ ” 8 Then they remembered his words.' },
                { verse: 'Luke 24:36-43', content: '36 While they were still talking about this, Jesus himself stood among them and said to them, “Peace be with you.” 37 They were startled and frightened, thinking they saw a ghost. 38 He said to them, “Why are you troubled, and why do doubts rise in your minds? 39 Look at my hands and my feet. It is I myself! Touch me and see; a ghost does not have flesh and bones, as you see I have.” 40 When he had said this, he showed them his hands and feet. 41 And while they still did not believe it because of joy and amazement, he asked them, “Do you have anything here to eat?” 42 They gave him a piece of broiled fish, 43 and he took it and ate it in their presence.' },
                { verse: 'John 20:6-9', content: '6 Then Simon Peter came along behind him and went straight into the tomb. He saw the strips of linen lying there, 7 as well as the cloth that had been wrapped around Jesus’ head. The cloth was still lying in its place, separate from the linen. 8 Finally the other disciple, who had reached the tomb first, also went inside. He saw and believed. 9 (They still did not understand from Scripture that Jesus had to rise from the dead.)' },
                { verse: 'John 11:25-26', content: '25 Jesus said to her, “I am the resurrection and the life. The one who believes in me will live, even though they die; 26 and whoever lives by believing in me will never die. Do you believe this?”' },
                { verse: 'John 6:39-40', content: '39 And this is the will of him who sent me, that I shall lose none of all those he has given me, but raise them up at the last day. 40 For my Father’s will is that everyone who looks to the Son and believes in him shall have eternal life, and I will raise them up at the last day.”' },
                { verse: 'John 5:28-29', content: '28 “Do not be amazed at this, for a time is coming when all who are in their graves will hear his voice 29 and come out—those who have done what is good will rise to live, and those who have done what is evil will rise to be condemned. ' },
                { verse: '1 Thessalonians 4:13-14', content: '13 Brothers and sisters, we do not want you to be uninformed about those who sleep in death, so that you do not grieve like the rest of mankind, who have no hope. 14 For we believe that Jesus died and rose again, and so we believe that God will bring with Jesus those who have fallen asleep in him. ' },
                { verse: '1 Thessalonians 4:15-18', content: '15 According to the Lord’s word, we tell you that we who are still alive, who are left until the coming of the Lord, will certainly not precede those who have fallen asleep. 16 For the Lord himself will come down from heaven, with a loud command, with the voice of the archangel and with the trumpet call of God, and the dead in Christ will rise first. 17 After that, we who are still alive and are left will be caught up together with them in the clouds to meet the Lord in the air. And so we will be with the Lord forever. 18 Therefore encourage one another with these words.' },
                { verse: '1 Corinthians 15:2-5', content: '2 By this gospel you are saved, if you hold firmly to the word I preached to you. Otherwise, you have believed in vain. 3 For what I received I passed on to you as of first importance: that Christ died for our sins according to the Scriptures, 4 that he was buried, that he was raised on the third day according to the Scriptures, 5 and that he appeared to Cephas, and then to the Twelve.' },
                { verse: '1 Corinthians 15:6-8', content: '6 After that, he appeared to more than five hundred of the brothers and sisters at the same time, most of whom are still living, though some have fallen asleep. 7 Then he appeared to James, then to all the apostles, 8 and last of all he appeared to me also, as to one abnormally born.' },
                { verse: '1 Corinthians 15:16-19', content: '16 For if the dead are not raised, then Christ has not been raised either.17 And if Christ has not been raised, your faith is futile; you are still in your sins. 18 Then those also who have fallen asleep in Christ are lost. 19 If only for this life we have hope in Christ, we are of all people most to be pitied.' },
                { verse: 'Acts 10:38-42', content: '38 how God anointed Jesus of Nazareth with the Holy Spirit and power, and how he went around doing good and healing all who were under the power of the devil, because God was with him. 39 “We are witnesses of everything he did in the country of the Jews and in Jerusalem. They killed him by hanging him on a cross, 40 but God raised him from the dead on the third day and caused him to be seen. 41 He was not seen by all the people, but by witnesses whom God had already chosen—by us who ate and drank with him after he rose from the dead. 42 He commanded us to preach to the people and to testify that he is the one whom God appointed as judge of the living and the dead.' },
                { verse: 'Matthew 22:29-32', content: '29 Jesus replied, “You are in error because you do not know the Scriptures or the power of God. 30 At the resurrection people will neither marry nor be given in marriage; they will be like the angels in heaven. 31 But about the resurrection of the dead—have you not read what God said to you, 32 ‘I am the God of Abraham, the God of Isaac, and the God of Jacob’? He is not the God of the dead but of the living.”' }
            ];
            var chineseContentForDetailPage = [
                { verse: '路加福音 24 章 1-8 節', content: '1 七日的頭一日，黎明的時候，那些婦女帶着所預備的香料來到墳墓前， 2 看見石頭已經從墳墓滾開了， 3 她們就進去，只是不見主耶穌的身體。 4 正在猜疑之間，忽然有兩個人站在旁邊，衣服放光。 5 婦女們驚怕，將臉伏地。那兩個人就對她們說：「為甚麼在死人中找活人呢？ 6 他不在這裏，已經復活了。當記念他還在加利利的時候怎樣告訴你們， 7 說：『人子必須被交在罪人手裏，釘在十字架上，第三日復活。』」8 她們就想起耶穌的話來，' },
                { verse: '路加福音 24 章 36-43 節', content: '36 正說這話的時候，耶穌親自站在他們當中，說：「願你們平安！」37 他們卻驚慌害怕，以為所看見的是魂。 38 耶穌說：「你們為甚麼愁煩？為甚麼心裏起疑念呢？ 39 你們看我的手，我的腳，就知道實在是我了。摸我看看！魂無骨無肉，你們看，我是有的。」40 說了這話，就把手和腳給他們看。 41 他們正喜得不敢信，並且希奇，耶穌就說：「你們這裏有甚麼吃的沒有？」 42 他們便給他一片燒魚， 43 他接過來，在他們面前吃了。' },
                { verse: '約翰福音 20 章 6-9 節', content: ' 6 西門彼得隨後也到了，進墳墓裏去，就看見細麻布還放在那裏， 7 又看見耶穌的裹頭巾沒有和細麻布放在一處，是另在一處捲着。 8 先到墳墓的那門徒也進去，看見就信了。 9 因為他們還不明白聖經的意思，就是耶穌必要從死裏復活。 ' },
                { verse: '約翰福音 11 章 25-26 節', content: '25 耶穌對她說：「復活在我，生命也在我！信我的人，雖然死了，也必復活。 26 凡活着信我的人必永遠不死。你信這話嗎？」' },
                { verse: '約翰福音 6 章 39-40 節', content: ' 39 差我來者的意思就是：他所賜給我的，叫我一個也不失落，在末日卻叫他復活。 40 因為我父的意思是叫一切見子而信的人得永生，並且在末日我要叫他復活。」' },
                { verse: '約翰福音 5 章 28-29 節', content: '28 「你們不要把這事看作希奇。時候要到，凡在墳墓裏的，都要聽見他的聲音，就出來。 29 行善的，復活得生；作惡的，復活定罪。」' },
                { verse: '帖撒羅尼迦前書 4 章 13-14 節', content: '13 論到睡了的人，我們不願意弟兄們不知道，恐怕你們憂傷，像那些沒有指望的人一樣。 14 我們若信耶穌死而復活了，那已經在耶穌裏睡了的人，神也必將他與耶穌一同帶來。 ' },
                { verse: '帖撒羅尼迦前書 4 章 15-18 節', content: ' 15 我們現在照主的話告訴你們一件事：我們這活着還存留到主降臨的人，斷不能在那已經睡了的人之先， 16 因為主必親自從天降臨，有呼叫的聲音和天使長的聲音，又有神的號吹響；那在基督裏死了的人必先復活。 17 以後我們這活着還存留的人必和他們一同被提到雲裏，在空中與主相遇。這樣，我們就要和主永遠同在。 18 所以，你們當用這些話彼此勸慰。' },
                { verse: '哥林多前書 15 章 2-5 節', content: ' 2 並且你們若不是徒然相信，能以持守我所傳給你們的，就必因這福音得救。3 我當日所領受又傳給你們的，第一，就是基督照聖經所說，為我們的罪死了， 4 而且埋葬了，又照聖經所說，第三天復活了， 5 並且顯給磯法看，然後顯給十二使徒看，' },
                { verse: '哥林多前書 15 章 6-8 節', content: ' 6 後來一時顯給五百多弟兄看，其中一大半到如今還在，卻也有已經睡了的。 7 以後顯給雅各看，再顯給眾使徒看， 8 末了，也顯給我看，我如同未到產期而生的人一般。' },
                { verse: '哥林多前書 15 章 16-19 節', content: '16 因為死人若不復活，基督也就沒有復活了。 17 基督若沒有復活，你們的信便是徒然，你們仍在罪裏， 18 就是在基督裏睡了的人也滅亡了。 19 我們若靠基督只在今生有指望，就算比眾人更可憐。' },
                { verse: '使徒行傳 10 章 38-42 節', content: '38 神怎樣以聖靈和能力膏拿撒勒人耶穌，這都是你們知道的。他周流四方，行善事，醫好凡被魔鬼壓制的人，因為神與他同在。39 「他在猶太人之地並耶路撒冷所行的一切事，有我們作見證。他們竟把他掛在木頭上殺了。 40 第三日，神叫他復活，顯現出來； 41 不是顯現給眾人看，乃是顯現給神預先所揀選為他作見證的人看，就是我們這些在他從死裏復活以後，和他同吃同喝的人。 42 他吩咐我們傳道給眾人，證明他是神所立定的，要作審判活人死人的主。 ' },
                { verse: '馬太福音 22 章 29-32 節', content: '29 耶穌回答說：「你們錯了，因為不明白聖經，也不曉得神的大能。 30 當復活的時候，人也不娶，也不嫁，乃像天上的使者一樣。 31 論到死人復活，神在經上向你們所說的，你們沒有念過嗎？ 32 他說：『我是亞伯拉罕的神，以撒的神，雅各的神。』神不是死人的神，乃是活人的神。」' }
            ];
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__topic_detail_topic_detail__["a" /* TopicDetailPage */], { chineseContent: chineseContentForDetailPage, content: topicContent, title: title });
        }
        else {
            var chineseContentForDetailPage = [
                { verse: '約翰福音 3 章 3-6 節', content: '3 耶穌回答說：「我實實在在地告訴你：人若不重生，就不能見神的國。」4 尼哥德慕說：「人已經老了，如何能重生呢？豈能再進母腹生出來嗎？」5 耶穌說：「我實實在在地告訴你：人若不是從水和聖靈生的，就不能進神的國。 6 從肉身生的，就是肉身；從靈生的，就是靈。' },
                { verse: '約翰福音 3 章 16 節', content: '16 「神愛世人，甚至將他的獨生子賜給他們，叫一切信他的，不至滅亡，反得永生。 ' },
                { verse: '使徒行傳 2 章 38 節', content: '38 彼得說：「你們各人要悔改，奉耶穌基督的名受洗，叫你們的罪得赦，就必領受所賜的聖靈。 ' },
                { verse: '使徒行傳 4 章 12 節', content: '12 除他以外，別無拯救，因為在天下人間，沒有賜下別的名，我們可以靠着得救。」' },
                { verse: '羅馬書 3 章 23-25 節', content: '23 因為世人都犯了罪，虧缺了神的榮耀； 24如今卻蒙神的恩典，因基督耶穌的救贖，就白白地稱義。 25神設立耶穌作挽回祭，是憑着耶穌的血，藉着人的信，要顯明神的義。因為他用忍耐的心，寬容人先時所犯的罪，' },
                { verse: '羅馬書 8 章 1-3 節', content: '1 如今，那些在基督耶穌裏的就不定罪了。 2 因為賜生命聖靈的律在基督耶穌裏釋放了我，使我脫離罪和死的律了。 3 律法既因肉體軟弱，有所不能行的，神就差遣自己的兒子成為罪身的形狀，作了贖罪祭，在肉體中定了罪案，' },
                { verse: '羅馬書 10 章 9-10 節', content: '9 你若口裏認耶穌為主，心裏信神叫他從死裏復活，就必得救。 10 因為人心裏相信，就可以稱義；口裏承認，就可以得救。' },
                { verse: '以弗所書 2 章 4-5 節', content: ' 4 然而神既有豐富的憐憫，因他愛我們的大愛， 5 當我們死在過犯中的時候，便叫我們與基督一同活過來（你們得救是本乎恩）' },
                { verse: '以弗所書 2 章 8-9 節', content: '8 你們得救是本乎恩，也因着信。這並不是出於自己，乃是神所賜的； 9 也不是出於行為，免得有人自誇。' },
                { verse: '使徒行傳 16 章 30-33 節', content: '30 又領他們出來，說：「二位先生，我當怎樣行才可以得救？」31 他們說：「當信主耶穌，你和你一家都必得救。」 32 他們就把主的道講給他和他全家的人聽。33 當夜，就在那時候，禁卒把他們帶去，洗他們的傷；他和屬乎他的人立時都受了洗。' }
            ];
            var topicContent = [
                { verse: 'John 3:3-6', content: '3 Jesus replied, “Very truly I tell you, no one can see the kingdom of God unless they are born again.” 4 “How can someone be born when they are old?” Nicodemus asked. “Surely they cannot enter a second time into their mother’s womb to be born!” 5 Jesus answered, “Very truly I tell you, no one can enter the kingdom of God unless they are born of water and the Spirit. 6 Flesh gives birth to flesh, but the Spirit gives birth to spirit.' },
                { verse: 'John 3:16', content: '16 For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life. ' },
                { verse: 'Acts 2:38', content: '38 Peter replied, “Repent and be baptized, every one of you, in the name of Jesus Christ for the forgiveness of your sins. And you will receive the gift of the Holy Spirit. ' },
                { verse: 'Acts 4:12', content: '12 Salvation is found in no one else, for there is no other name under heaven given to mankind by which we must be saved.”' },
                { verse: 'Romans 3:23-25', content: '23 for all have sinned and fall short of the glory of God, 24 and all are justified freely by his grace through the redemption that came by Christ Jesus. 25 God presented Christ as a sacrifice of atonement, through the shedding of his blood—to be received by faith. He did this to demonstrate his righteousness, because in his forbearance he had left the sins committed beforehand unpunished—' },
                { verse: 'Romans 8:1-3', content: '1 Therefore, there is now no condemnation for those who are in Christ Jesus, 2 because through Christ Jesus the law of the Spirit who gives life has set you free from the law of sin and death. 3 For what the law was powerless to do because it was weakened by the flesh, God did by sending his own Son in the likeness of sinful flesh to be a sin offering.' },
                { verse: 'Romans 10:9-10', content: ' 9 If you declare with your mouth, “Jesus is Lord,” and believe in your heart that God raised him from the dead, you will be saved. 10 For it is with your heart that you believe and are justified, and it is with your mouth that you profess your faith and are saved. ' },
                { verse: 'Ephesians 2:4-5', content: '4 But because of his great love for us, God, who is rich in mercy, 5 made us alive with Christ even when we were dead in transgressions—it is by grace you have been saved.' },
                { verse: 'Ephesians 2:8-9', content: '8 For it is by grace you have been saved, through faith—and this is not from yourselves, it is the gift of God— 9 not by works, so that no one can boast. ' },
                { verse: 'Acts 16:30-33', content: ' 30 He then brought them out and asked, “Sirs, what must I do to be saved?” 31 They replied, “Believe in the Lord Jesus, and you will be saved—you and your household.” 32 Then they spoke the word of the Lord to him and to all the others in his house. 33 At that hour of the night the jailer took them and washed their wounds; then immediately he and all his household were baptized.' }
            ];
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__topic_detail_topic_detail__["a" /* TopicDetailPage */], { chineseContent: chineseContentForDetailPage, content: topicContent, title: title });
        }
    };
    return TopicPage;
}());
TopicPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-topic',template:/*ion-inline-start:"/Users/tsechihin/Documents/ionicProject/livingWater/src/pages/topic/topic.html"*/'<!--\n  Generated template for the TopicPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon id="menuButton" name="menu"></ion-icon>\n    </button>\n    <ion-title><span text-color="my-custom-color">Select Topic</span></ion-title>\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-searchbar [(ngModel)]="searchTerm" (ionInput)="setFilteredItems()"></ion-searchbar>\n\n  <ion-list>\n    <button ion-item *ngFor="let topic of topics" (click)="openTopicDetailPage(topic.title)">\n      {{topic.title}}\n    </button>\n  </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"/Users/tsechihin/Documents/ionicProject/livingWater/src/pages/topic/topic.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_topic_topic__["a" /* TopicProvider */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */]])
], TopicPage);

//# sourceMappingURL=topic.js.map

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TopicProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the TopicProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
var TopicProvider = (function () {
    function TopicProvider(http) {
        this.http = http;
        this.topics = [
            { title: 'Bible/Scripture/Word of God' },
            { title: 'Christian fellowship' },
            { title: 'Church unity' },
            { title: 'Divorce and re-marriage' },
            { title: 'Eternal life and heaven' },
            { title: 'Faith' },
            { title: 'Family and parenthood' },
            { title: 'Forgiving others' },
            { title: "God's Forgiveness" },
            { title: "God's Love" },
            { title: "Gospel/The Good News" },
            { title: "Holiness" },
            { title: "Holy Spirit/Holy Ghost" },
            { title: "Loving others" },
            { title: "Marriage/Husband-wife relationship" },
            { title: "Money and wealth" },
            { title: "Persecution and trials" },
            { title: "Prayer" },
            { title: "Resurrection" },
            { title: "Salvation" }
        ];
    }
    TopicProvider.prototype.filterTopics = function (searchTerm) {
        return this.topics.filter(function (topic) {
            return topic.title.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
        });
    };
    return TopicProvider;
}());
TopicProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
], TopicProvider);

//# sourceMappingURL=topic.js.map

/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TopicDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(26);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the TopicDetailPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var TopicDetailPage = (function () {
    function TopicDetailPage(navCtrl, navParams, statusBar) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.statusBar = statusBar;
        this.engContent = new Array();
        this.records = this.navParams.get('content');
        this.chineseContent = this.navParams.get('chineseContent');
        this.tempTitle = this.navParams.get('title');
        this.records.forEach(function (item) {
            _this.engContent.push(Object.assign({}, item));
        });
        if (this.tempTitle.length > 12) {
            this.title = this.navParams.get('title');
        }
        else
            this.title2 = this.navParams.get('title');
        this.statusBar.styleBlackTranslucent();
    }
    TopicDetailPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TopicDetailPage');
    };
    TopicDetailPage.prototype.translateChinese = function (index) {
        this.records[index].verse = this.chineseContent[index].verse;
        this.records[index].content = this.chineseContent[index].content;
    };
    TopicDetailPage.prototype.translateEng = function (index) {
        this.records[index].verse = this.engContent[index].verse;
        this.records[index].content = this.engContent[index].content;
    };
    return TopicDetailPage;
}());
TopicDetailPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-topic-detail',template:/*ion-inline-start:"/Users/tsechihin/Documents/ionicProject/livingWater/src/pages/topic-detail/topic-detail.html"*/'<!--\n  Generated template for the TopicDetailPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title><span text-color="my-custom-color">{{title2}}</span></ion-title>\n    <div *ngIf="title">\n      <h5 class="marquee"><span text-color="my-custom-color">{{title}}</span></h5>\n    </div>\n\n\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-card text-center *ngFor="let record of records let i = index" >\n    <ion-card-header>\n      {{record.verse}}\n    </ion-card-header>\n    <ion-card-content>\n      {{record.content}}\n      <div>\n        <button ion-button id="translateChineseButton" (click)="translateEng(i)">eng</button>\n        <button ion-button id="translateButton" (click)="translateChinese(i)">繁</button>\n      </div>\n    </ion-card-content>\n\n  </ion-card>\n\n</ion-content>\n'/*ion-inline-end:"/Users/tsechihin/Documents/ionicProject/livingWater/src/pages/topic-detail/topic-detail.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */]])
], TopicDetailPage);

//# sourceMappingURL=topic-detail.js.map

/***/ }),

/***/ 208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_purchase__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_purchase_purchase__ = __webpack_require__(103);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the AboutPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var NONCONSUMEABLE_KEY = 'com.test_2.living_water.in_app_purchase';
var AboutPage = (function () {
    function AboutPage(iap, plt, purchaseProvider) {
        var _this = this;
        this.iap = iap;
        this.plt = plt;
        this.purchaseProvider = purchaseProvider;
        this.plt.ready().then(function () {
            _this.iap.getProducts([NONCONSUMEABLE_KEY])
                .then(function (products) {
                _this.products = products;
            })
                .catch(function (err) {
                console.log(err);
            });
        });
    }
    AboutPage.prototype.buy = function () {
        var _this = this;
        this.iap
            .buy(NONCONSUMEABLE_KEY)
            .then(function () {
            console.log('product was successfully consumed!');
            _this.enableItems(NONCONSUMEABLE_KEY);
        })
            .catch(function (err) { return console.log(err); });
    };
    AboutPage.prototype.enableItems = function (id) {
        // Normally store these settings/purchases inside your app or server!
        if (id === NONCONSUMEABLE_KEY) {
            this.purchaseProvider.setPurchaseToTrue();
        }
    };
    AboutPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AboutPage');
    };
    return AboutPage;
}());
AboutPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-about',template:/*ion-inline-start:"/Users/tsechihin/Documents/ionicProject/livingWater/src/pages/about/about.html"*/'<!--\n  Generated template for the AboutPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon id="menuButton" name="menu" ></ion-icon>\n    </button>\n    <ion-title>In app purchase</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-card *ngFor="let product of products">\n    <ion-card-header>{{ product.title }}</ion-card-header>\n    <ion-card-content>\n      {{ product.description }}\n    </ion-card-content>\n    <ion-row>\n      <ion-col>\n        <button ion-button block (click)="buy()">\n          Buy now - {{ product.price }}\n        </button>\n      </ion-col>\n    </ion-row>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"/Users/tsechihin/Documents/ionicProject/livingWater/src/pages/about/about.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_purchase__["a" /* InAppPurchase */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_3__providers_purchase_purchase__["a" /* PurchaseProvider */]])
], AboutPage);

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 209:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_web_animations_js_web_animations_min__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_web_animations_js_web_animations_min___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_web_animations_js_web_animations_min__);



Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 228:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_keyboard__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_in_app_purchase__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_home_home__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_about_about__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_search_search__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_occasion_occasion__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_service_service__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_http__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_platform_browser_animations__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__providers_weather_service_weather_service__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_geolocation__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_occasion_details_occasion_details__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_topic_topic__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__providers_topic_topic__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_topic_detail_topic_detail__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__providers_purchase_purchase__ = __webpack_require__(103);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_about_about__["a" /* AboutPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_search_search__["a" /* SearchPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_occasion_occasion__["a" /* OccasionPage */],
            __WEBPACK_IMPORTED_MODULE_17__pages_occasion_details_occasion_details__["a" /* OccasionDetailsPage */],
            __WEBPACK_IMPORTED_MODULE_18__pages_topic_topic__["a" /* TopicPage */],
            __WEBPACK_IMPORTED_MODULE_20__pages_topic_detail_topic_detail__["a" /* TopicDetailPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */], {
                backButtonText: ' ',
                iconMode: 'ios',
                modalEnter: 'modal-slide-in',
                modalLeave: 'modal-slide-out',
                tabsPlacement: 'bottom',
                pageTransition: 'ios-transition'
            }),
            __WEBPACK_IMPORTED_MODULE_14__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_13__angular_http__["b" /* HttpModule */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_about_about__["a" /* AboutPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_search_search__["a" /* SearchPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_occasion_occasion__["a" /* OccasionPage */],
            __WEBPACK_IMPORTED_MODULE_17__pages_occasion_details_occasion_details__["a" /* OccasionDetailsPage */],
            __WEBPACK_IMPORTED_MODULE_18__pages_topic_topic__["a" /* TopicPage */],
            __WEBPACK_IMPORTED_MODULE_20__pages_topic_detail_topic_detail__["a" /* TopicDetailPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_12__providers_service_service__["a" /* ServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_keyboard__["a" /* Keyboard */],
            __WEBPACK_IMPORTED_MODULE_12__providers_service_service__["a" /* ServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_in_app_purchase__["a" /* InAppPurchase */],
            __WEBPACK_IMPORTED_MODULE_15__providers_weather_service_weather_service__["a" /* WeatherServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_16__ionic_native_geolocation__["a" /* Geolocation */],
            __WEBPACK_IMPORTED_MODULE_19__providers_topic_topic__["a" /* TopicProvider */],
            __WEBPACK_IMPORTED_MODULE_21__providers_purchase_purchase__["a" /* PurchaseProvider */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 276:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_about_about__ = __webpack_require__(208);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen, menuCtrl) {
        this.menuCtrl = menuCtrl;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        this.AboutPage = __WEBPACK_IMPORTED_MODULE_5__pages_about_about__["a" /* AboutPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp.prototype.openMenu = function () {
        this.menuCtrl.open();
    };
    MyApp.prototype.openHome = function () {
        //this.menuCtrl.close();
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */]);
    };
    MyApp.prototype.openAbout = function () {
        //this.menuCtrl.close();
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_5__pages_about_about__["a" /* AboutPage */]);
    };
    return MyApp;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */])
], MyApp.prototype, "nav", void 0);
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/tsechihin/Documents/ionicProject/livingWater/src/app/app.html"*/'<ion-menu [content]="content">\n  <ion-header>\n\n    <ion-navbar>\n      <ion-title>Menu</ion-title>\n    </ion-navbar>\n\n  </ion-header>\n\n\n  <ion-content padding>\n    <ion-list>\n      <button menuClose ion-item (click)="openHome()"><ion-icon name="home" ios></ion-icon>&nbsp; &nbsp;Home</button>\n      <button menuClose ion-item (click)="openAbout()"><ion-icon name="logo-usd"></ion-icon>&nbsp; &nbsp; In app purchase</button>\n    </ion-list>\n  </ion-content>\n</ion-menu>\n<ion-nav [root]="rootPage" #content></ion-nav>\n\n'/*ion-inline-end:"/Users/tsechihin/Documents/ionicProject/livingWater/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* MenuController */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ })

},[209]);
//# sourceMappingURL=main.js.map