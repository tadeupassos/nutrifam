import { Component } from '@angular/core';
import { NavController, NavParams, MenuController } from 'ionic-angular';

@Component({
  selector: 'page-cardapio-corporativo',
  templateUrl: 'cardapio-corporativo.html',
})
export class CardapioCorporativoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private menu: MenuController) {

    this.menu.enable(true, 'menuApp');

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CardapioCorporativoPage');
  }

}
