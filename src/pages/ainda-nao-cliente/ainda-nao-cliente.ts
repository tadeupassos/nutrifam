import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-ainda-nao-cliente',
  templateUrl: 'ainda-nao-cliente.html',
})
export class AindaNaoClientePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AindaNaoClientePage');
  }

}
