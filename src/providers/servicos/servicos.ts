import { HttpClient } from '@angular/common/http';
import { Http, Headers, Response, ResponseOptions } from '@angular/http';
import { LoadingController } from 'ionic-angular';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class ServicosProvider {

  public qry = 'http://tadeupassos.xyz/nutrifam/querys/';

  public cardapioSemana: any[] = [];
  public cardapioLancheira: any[] = [];
  public cardapioCantina: any[]= [];

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

  carregarCardapioSemana(){

    this.cardapioSemana = [];
    
    let headers = new Headers({ 'Content-Type' : 'application/x-www-form-urlencoded' });
    let localiza = this.http.post(this.qry + "carregarCardapioSemana.php",{
      'tipo_cardapio' : 4,
      'empresa' : 13,
      'semana' : 21
    },{
      headers:headers,
      method: 'POST'
    }).map(res => res.json()).subscribe(data => {

      for (let i = 0; i < data.length; i++){

        this.cardapioSemana.push({
          tipoCardapio: data[i].tipoCardapio,
          nomeEmpresa: data[i].nome,
          numSemana: data[i].num_semana,
          dataSemana: data[i].data_semana,
          diaSemana: data[i].dia_semana,
          dataDiaSemana: data[i].data_dia_semana,
          item: data[i].item,
          corItem: data[i].cor_item,
          conteudo: data[i].conteudo,
          obsDia: data[i].obs 
        });
      }

      //console.log("cardapios: " + JSON.stringify(this.cardapioSemana));
      
    }, err => console.log('Deu erro carregarCardapioSemana(): ' + err));
  }

  carregarCardapioLancheira(){
    
    this.cardapioSemana = [];
    
    let headers = new Headers({ 'Content-Type' : 'application/x-www-form-urlencoded' });
    let localiza = this.http.post(this.qry + "carregarCardapioLancheira.php",{
      'tipo_cardapio' : 1,
      'empresa' : 13,
      'semana' : 21
    },{
      headers:headers,
      method: 'POST'
    }).map(res => res.json()).subscribe(data => {

      for (let i = 0; i < data.length; i++){

        this.cardapioLancheira.push({
          tipoCardapio: data[i].tipoCardapio,
          nomeEmpresa: data[i].nome,
          numSemana: data[i].num_semana,
          dataSemana: data[i].data_semana,
          diaSemana: data[i].dia_semana,
          dataDiaSemana: data[i].data_dia_semana,
          item: data[i].item,
          corItem: data[i].cor_item,
          conteudo: data[i].conteudo,
          obsDia: data[i].obs 
        });
      }

      //console.log("cardapios: " + JSON.stringify(this.cardapioSemana));
      
    }, err => console.log('Deu erro carregarCardapioLancheira(): ' + err));
  }  

  carregarCardapioCantina(){
    
    this.cardapioCantina = [];
    let cantina: any[] = []
    let dadosCantina: any[] = []
    
    let headers = new Headers({ 'Content-Type' : 'application/x-www-form-urlencoded' });
    let localiza = this.http.post(this.qry + "carregarCardapioCantina.php",{
      'tipo_cardapio' : 5,
      'empresa' : 13
    },{
      headers:headers,
      method: 'POST'
    }).map(res => res.json()).subscribe(data => {

      let comida: any;

      for (let i = 0; i < data.length; i++){

        cantina.push({
          item: data[i].item,
          corItem: data[i].cor_item,
          conteudo: data[i].conteudo,
          preco: data[i].preco,
          obsDia: data[i].obs 
        });


        if(comida != data[i].item){

          this.cardapioCantina.push({
            nomeEmpresa: data[i].nome,
            item: data[i].item,
            dados: [],
            corItem: data[i].cor_item
          });

          comida = data[i].item;
        }
      }

      //console.log("todos os itens com precos " + JSON.stringify(cantina))

      //console.log("2 itens " + JSON.stringify(this.cardapioCantina))

      for (let i = 0; i <  this.cardapioCantina.length; i++){

        this.cardapioCantina[i].dados = cantina.filter((item) => {
          return item.item == this.cardapioCantina[i].item;
        });

      }

      //console.log("2 itens e dados " + JSON.stringify(this.cardapioCantina))
      
    }, err => console.log('Deu erro carregarCardapioCantina(): ' + err));
  }    

}
