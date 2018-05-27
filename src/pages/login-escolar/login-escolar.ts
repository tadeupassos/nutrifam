import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AindaNaoClientePage } from '../ainda-nao-cliente/ainda-nao-cliente';

@Component({
  selector: 'page-login-escolar',
  templateUrl: 'login-escolar.html',
})
export class LoginEscolarPage {

  cpf = "";
  cadastrado = true;
  camposVazios = false;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  logarCPF(){

  }

  abrirNaoCliente(){
    this.navCtrl.push(AindaNaoClientePage);
  }

  campoNaoVazio(){

  }

  voltarLogin(){
    this.navCtrl.pop();
  }  

}
