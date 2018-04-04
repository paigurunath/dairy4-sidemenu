import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ProductListProvider } from '../../providers/product-list/product-list';
// import { Observable } from 'rxjs/Observable';
import { ProductDetailsPage } from '../../pages/product-details/product-details';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public product:any;
  errorMessage: string;

  constructor(
    public navCtrl: NavController,
    private navParams: NavParams,
    public productList: ProductListProvider
  ) {}

  ionViewDidLoad() {
    this.productList.getProductList().subscribe(
        data => { 
          this.product = data.products;
        }
    );
  }

  goToProductDetail(product, event) {
    console.log(event);
    console.log(product)

    this.navCtrl.push(ProductDetailsPage, product);
  } 
  // products => this.product = products,
  // error =>  this.errorMessage = <any>error
  // private handleError (error: Response | any) {
  //   let errMsg: string;
  //   if (error instanceof Response) {
  //     const err = error || '';
  //     errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
  //   } else {
  //     errMsg = error.message ? error.message : error.toString();
  //   }
  //   console.error(errMsg);
  //   return Observable.throw(errMsg);
  // }

}
