import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { ModalController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  title: string = 'Poste Italiane';
  lat: number = 45.443909;
  lng: number = 9.207897;

  constructor(public navCtrl: NavController, public modalCtrl: ModalController  ) {
    
  }

  presentProfileModal() {
    let profileModal = this.modalCtrl.create(undefined, { userId: 8675309 });
    profileModal.present();
  }
}
