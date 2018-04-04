import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

/*
  Generated class for the ProductListProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ProductListProvider {

  constructor(public http: HttpClient) {
    console.log('Hello ProductListProvider Provider');
  }

  getProductList(): Observable<any> {
    // console.log(this.http.get('https://www.reddit.com/r/gifs/top/.json?limit=105sort=hot').subscribe(data => {
    //   console.log(data);
    // }));

    // console.log(this.http.get('./assets/data/dairy.json').subscribe(data => {
    //   console.log(data);
    // }));
    return this.http.get('./assets/data/dairy.json');
  }

  // getProductBasedOnId(): Observable<any> {
    

  // }
}
