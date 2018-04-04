import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RechargeWalletPage } from '../../pages/recharge-wallet/recharge-wallet';

/**
 * Generated class for the ProductDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-product-details',
  templateUrl: 'product-details.html',
})
export class ProductDetailsPage {

  public productPrice:any;
  public productImage:any;

  public buttonColor: string = '#d0ddf2';
  public selectedButton = {
    "background-color": this.buttonColor
  }

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductDetailsPage');
    console.log(this.navParams.data)
    this.productPrice = this.navParams.get('mrp');
    this.productImage = this.navParams.get('image');

  }

  private currentNumber = 0; 

  increment(): void {
    this.currentNumber++;
  }

  decrement(): void { 
    this.currentNumber--;
  }
  addEvent(event): void {
    console.log(event.target.id)
    this.buttonColor = '#f45353'; //desired Color
  }

  goToRecharge() {
    this.navCtrl.push(RechargeWalletPage);
  }
}
