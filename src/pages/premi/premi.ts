import { Component } from '@angular/core';
import { NavController, NavParams, ViewController, ModalController } from 'ionic-angular';
import { ResultPage } from '../result/result';

/**
 * Generated class for the LostsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
    selector: 'page-premi',
    templateUrl: 'premi.html',
})
export class PremiPage {
    constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, public modalCtrl: ModalController) {


    }
    pay() {
        this.viewCtrl.dismiss().then(() => {
            this.modalCtrl.create(ResultPage, { id: 4 }).present();
        }
        );
    }
}
