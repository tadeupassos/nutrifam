import { Component } from '@angular/core';
import { NavController, NavParams, MenuController } from 'ionic-angular';
import { AindaNaoClienteCorporativoPage } from '../ainda-nao-cliente-corporativo/ainda-nao-cliente-corporativo';

@Component({
  selector: 'page-login-corporativo',
  templateUrl: 'login-corporativo.html',
})
export class LoginCorporativoPage {

  numeroCadastro = "";
  cadastrado = true;
  camposVazios = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, private menu: MenuController) {

    this.menu.enable(false, 'menuApp');

  }

  logarNumero(){

  }

  abrirNaoCliente(){
    this.navCtrl.push(AindaNaoClienteCorporativoPage);
  }

  campoNaoVazio(){

  }

  voltarLogin(){
    this.navCtrl.pop();
  } 

}
