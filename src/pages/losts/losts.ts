import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the LostsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-losts',
    templateUrl: 'losts.html',
})
export class LostsPage {

    city = "";
    avatar = "";
    nickname = "";
    achievement = 0;

    constructor(public navCtrl: NavController, public navParams: NavParams) {
        const id = navParams.get("id");
        switch (id) {
            case 4:
                this.city = "Piazza Affari"
                this.avatar = "avatar.jpeg";
                this.nickname = "Mr Bobo";
                this.achievement = 67;
                break;
            case 5:
                this.city = "Galleria Vittorio Emanuele II";
                this.avatar = "avatar2.png";
                this.nickname = "The Postman";
                this.achievement = 104;
                break;
        }
    }
}
