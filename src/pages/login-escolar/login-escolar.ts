import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController, MenuController } from 'ionic-angular';
import { AindaNaoClientePage } from '../ainda-nao-cliente/ainda-nao-cliente';
import { CardapioPage } from '../cardapio/cardapio';
import { ServicosProvider } from '../../providers/servicos/servicos';

@Component({
  selector: 'page-login-escolar',
  templateUrl: 'login-escolar.html',
})
export class LoginEscolarPage {

  cpf = "";
  cadastrado = true;
  camposVazios = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, public serv: ServicosProvider, public loadingCtrl: LoadingController, private menu: MenuController) {

    this.menu.enable(false, 'menuApp');

  }

  logarCPF(){
    if(this.cpf.length == 0){
      this.camposVazios = true;
    }else if(this.verificaUsuario(this.cpf)){

      this.presentLoading();

      setTimeout(() => {
        this.navCtrl.setRoot(CardapioPage);
      }, 1000);  

    }else{
      this.cadastrado = false;
    }
  }

  verificaUsuario(numero){

      if(numero == '31986483860'){

        let usuario = {
          nome: "Tadeu Passos",
          numero: "31986483860",
          tipo: "1"
        }

        this.serv.armazenarCredenciais(usuario);

        return true;
      }else{
        return false;
      }
    
  }
  
  presentLoading(){
    
   let loader = this.loadingCtrl.create({
      content: "Por favor, aguarde...",
      duration: 1000
    });

    loader.present();
  }    

  abrirNaoCliente(){
    this.navCtrl.push(AindaNaoClientePage);
  }

  numero(){
    if(isNaN(parseInt(this.cpf)) || this.cpf.substr(-1) == "." || this.cpf.substr(-1) == " "){
      this.cpf = this.cpf.slice(0,-1);
    }
  }

  voltarLogin(){
    this.navCtrl.pop();
  }  

}
