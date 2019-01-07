import { Injectable } from '@angular/core';
import { PRODUCTS } from './products';
import { ApiService } from '../api/api.service';
import { map } from 'rxjs/internal/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private _products;

  constructor(private _api: ApiService) {
    this._products = this.newProductsRef(PRODUCTS);
  }

  public get products() {
    return this._api.get('getProductList')
      .pipe(map((res => {
        res = this._products;
        return res;
      }))
    );
  }

  public saveProduct(product) {
    return this._api.post('saveProduct', {product: product})
      .pipe( map((res) => {
        this._products.forEach( (p, index, arr) => {
          if (p.sku === product.sku) {
            arr[index] = product;
          }
          return p.sku === product.sku;
        });
    }));
  }

  public saveQuotes({sku, quotes}) {
    let body = {};
    quotes.forEach( (quote) => body = {...body, [quote.type]: quote.price});

    return this._api.post('saveProducQuotes', body, {sku: sku})
      .pipe( map( (res) => {
        this._products.forEach( (p, index, arr) => {
          if (p.sku === res.sku) {
            arr[index].quotes = res.quotes;
          }
        });
        return res;
      }));
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
