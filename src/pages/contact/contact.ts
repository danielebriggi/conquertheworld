import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  values: any
  constructor(public navCtrl: NavController) {
    this.values = [{
      date: "08/03/2018 14:22",
      importo: 4,
      negozio: "McDonald",
      image: "assets/imgs/donald.png"
    },{
      date: "08/03/2018 11:38",
      importo: 2,
      negozio: "Farmacia Bonomelli",
      image: "assets/imgs/merchant.png"
    },{
      date: "07/03/2018 12:38",
      importo: 45,
      negozio: "Zara",
      image: "assets/imgs/zara.png"
    }]
  }

}
