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
      name: "Paolo Rossi",
      importo: 4,
      negozio: "McDonald",
      image: "assets/imgs/donald.png"
    },{
      name: "Paolo Rossi",
      importo: 2,
      negozio: "Farmacia Bonomelli",
      image: "assets/imgs/merchant.png"
    },{
      name: "Paolo Rossi",
      importo: 45,
      negozio: "Zara",
      image: "assets/imgs/zara.png"
    }]
  }

}
