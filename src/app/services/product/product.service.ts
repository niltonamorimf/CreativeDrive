import { Injectable } from '@angular/core';
import { PRODUCTS } from './products';
import { ApiService } from '../api/api.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private _products;

  constructor(private _api: ApiService) {
    this._products = this.newProductsRef(PRODUCTS);
  }

  public get products() {
    this._api.get('getProductList').subscribe( x => console.log(x, 'response: getProductList'));
    return this._products;
  }

  public saveProduct(product) {
    this._api.post('saveProduct', {product: product}).subscribe( x => console.log(x, 'response: saveProduct'));
    return this._products.find( (p, index, arr) => {
       if (p.sku === product.sku) {
        arr[index] = product;
       }
       return p.sku === product.sku;
    });
  }

  public saveQuotes({sku, quotes}) {
    this._api.post('saveProducQuotes', {quotes: quotes, sku: sku}).subscribe( x => console.log(x, 'response: saveProducQuotes'));
    return this._products.find( (p, index, arr) => {
      if (p.sku === sku) {
       arr[index].quotes = quotes;
      }
      return p.sku === sku;
   });
  }

  public chargeProducts(skuList) {
    this._api.post('chargeProducts', {skuList: skuList}).subscribe( x => console.log(x, 'response: chargeProducts'));
    return skuList;
  }

  public getProduct(sku) {

    this._api.get('getProduct', {sku: sku}).subscribe( x => console.log(x, 'response: getProduct'));
    return this.newProductsRef(this._products.find( p => p.sku === sku));
  }

  public newProductsRef(object) {
    return JSON.parse(JSON.stringify(object));
  }
}
