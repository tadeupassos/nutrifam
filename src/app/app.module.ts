import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { LoginCorporativoPage } from '../pages/login-corporativo/login-corporativo';
import { LoginEscolarPage } from '../pages/login-escolar/login-escolar';
import { AindaNaoClientePage } from '../pages/ainda-nao-cliente/ainda-nao-cliente';
import { BlogPage } from '../pages/blog/blog';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginCorporativoPage,
    LoginEscolarPage,
    LoginPage,
    AindaNaoClientePage,
    BlogPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginCorporativoPage,
    LoginEscolarPage,
    LoginPage,
    AindaNaoClientePage,
    BlogPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
