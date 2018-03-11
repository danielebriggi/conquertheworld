import { ResultPage } from './../result/result';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { LostsPage } from '../losts/losts';
import { PremiPage } from '../premi/premi';

/**
 * Generated class for the RisikoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
    selector: 'page-risiko',
    templateUrl: 'risiko.html',
})
export class RisikoPage {


    constructor(public navCtrl: NavController, public navParams: NavParams, private modalCtrl: ModalController) {
    }

    open(id: any) {
        this.modalCtrl.create(ResultPage, { id }).present();
    }

    openLost(id) {
        this.modalCtrl.create(LostsPage, { id }).present();
    }

    goToCart() {
        this.modalCtrl.create(PremiPage, {}).present();
    }

}
