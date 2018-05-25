import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-login-corporativo',
  templateUrl: 'login-corporativo.html',
})
export class LoginCorporativoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginCorporativoPage');
  }

}
