import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ResultPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-result',
  templateUrl: 'result.html',
})
export class ResultPage {

    city: string = "";
    score: string = "";
    coupon: boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
      const id = navParams.get("id");
      switch (id) {
            case 1: 
                this.city = "il Castello Sforzesco";
                this.score = "80";
                break;
            case 2: 
                this.city = "Brera";
                this.score = "250";
                break;
            case 3: 
                this.city = "la Scala";
                this.score = "45";
                break;
            case 4:
                this.city = "il Castello Sforzesco";
                this.score = "80";
                this.coupon = true;
            break;
      }
  }


}
