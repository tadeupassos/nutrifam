import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { LoginCorporativoPage } from '../login-corporativo/login-corporativo';
import { LoginEscolarPage } from '../login-escolar/login-escolar';
import { BlogPage } from '../blog/blog'

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  abrirEscola(){
    this.navCtrl.push(LoginEscolarPage);
  }

  abrirCorporativo(){
    this.navCtrl.push(LoginCorporativoPage);
  }

  abrirBlog(){
    this.navCtrl.push(BlogPage);
  }

}
