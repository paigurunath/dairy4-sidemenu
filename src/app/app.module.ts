import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpClientModule } from '@angular/common/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { ProductDetailsPage } from '../pages/product-details/product-details';
import { RechargeWalletPage } from '../pages/recharge-wallet/recharge-wallet';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ProductListProvider } from '../providers/product-list/product-list';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    ProductDetailsPage,
    RechargeWalletPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    ProductDetailsPage,
    RechargeWalletPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ProductListProvider
  ]
})
export class AppModule {}
