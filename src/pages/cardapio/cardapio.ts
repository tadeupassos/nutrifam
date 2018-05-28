import { Component } from '@angular/core';
import { NavController, NavParams, MenuController } from 'ionic-angular';

@Component({
  selector: 'page-cardapio',
  templateUrl: 'cardapio.html',
})
export class CardapioPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private menu: MenuController) {

    this.menu.enable(true, 'menuApp');

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CardapioPage');
  }

}
