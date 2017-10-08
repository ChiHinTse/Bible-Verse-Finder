import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the WeatherServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class WeatherServiceProvider {
  key: string = 'ac39756652cf5d97ef95481c6f620c0d';
  data:any;

  constructor(public http: Http) {
  }

  load(latitude:String,longitude:String) {
    if (this.data) {
      return Promise.resolve(this.data);
    }

    return new Promise(resolve => {

      this.http.get('https://api.forecast.io/forecast/'+this.key+'/'+latitude+','+longitude+'?exclude=alerts,minutely,hourly')
        .map(res => res.json())
        .subscribe(data => {
          this.data = data;
          resolve(this.data);
        });
    });

  }
}
