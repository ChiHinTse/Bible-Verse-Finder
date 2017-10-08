import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the TopicProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class TopicProvider {
  topics: any;
  constructor(public http: Http) {
    this.topics=[
      {title: 'Bible/Scripture/Word of God'},
      {title: 'Christian fellowship'},
      {title: 'Church unity'},
      {title: 'Divorce and re-marriage'},
      {title: 'Eternal life and heaven'},
      {title: 'Faith'},
      {title: 'Family and parenthood'},
      {title: 'Forgiving others'},
      {title: "God's Forgiveness"},
      {title: "God's Love"},
      {title: "Gospel/The Good News"},
      {title: "Holiness"},
      {title: "Holy Spirit/Holy Ghost"},
      {title: "Loving others"},
      {title: "Marriage/Husband-wife relationship"},
      {title: "Money and wealth"},
      {title: "Persecution and trials"},
      {title: "Prayer"},
      {title: "Resurrection"},
      {title: "Salvation"}
    ]
  }
  filterTopics(searchTerm){//this service provider provide the searching function  for the topic page

    return this.topics.filter((topic) => {
      return topic.title.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
    });

  }

}
