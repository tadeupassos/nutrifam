import { HttpClient } from '@angular/common/http';
import { Http, Headers, Response, ResponseOptions } from '@angular/http';
import { LoadingController } from 'ionic-angular';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class ServicosProvider {

  public qry = 'http://www.brandgo.com.br/appbrandgo/v1.2.0.1/querys/';

  usuario = {
    nome: '',
    numero: '',
    tipo: '0'
  };

  constructor(public http: Http) {
    console.log('Hello ServicosProvider Provider');
  }

  abrirNutrifam(){

    if (window.localStorage.getItem('numero') == "undefined" || window.localStorage.getItem('numero') == null){
      this.usuario.tipo = '0';
    }
    else {
      this.usuario.nome = window.localStorage.getItem('nome');
      this.usuario.numero = window.localStorage.getItem('numero');
      this.usuario.tipo = window.localStorage.getItem('tipo');
    }

    return new Promise((resolve) => {
      resolve(this.usuario.tipo);
    });

  }

  armazenarCredenciais(usuario) {
    window.localStorage.setItem('nome', usuario.nome);
    window.localStorage.setItem('numero', usuario.numero);
    window.localStorage.setItem('tipo', usuario.tipo);
  }

  carregarCredenciais() {
    this.usuario.nome = window.localStorage.getItem('nome');
    this.usuario.numero = window.localStorage.getItem('numero');
    this.usuario.tipo = window.localStorage.getItem('tipo');
  }

  destruirCredenciais() {
    this.usuario.nome = '';
    this.usuario.numero = '';
    this.usuario.tipo = '0';
    window.localStorage.clear();
  }  

  carregarCardapio(){
    
    let headers = new Headers({ 'Content-Type' : 'application/x-www-form-urlencoded' });
    let localiza = this.http.post(this.qry + "carregarCardapio.php",{
      'tipo_cardapio' : 4,
      'empresa' : 2,
      'semana' : 21
    },{
      headers:headers,
      method: 'POST'
    }).map(res => res.json()).subscribe(data => {

      for (let i = 0; i < data.length; i++){

      }
      
    }, err => console.log('Deu erro carregarBrandsParaMapa(): ' + err));
  }

}
