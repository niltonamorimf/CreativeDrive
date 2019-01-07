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
        const savedQuotes = [];
        for (let key in res.quotes) {
          savedQuotes.push({type: key, price: res.quotes[key]});
        }
        this._products.forEach( (p, index, arr) => {
          if (p.sku === res.sku) {
            arr[index].quotes = savedQuotes;
          }
        });
        return res;
      }));
  }

  public chargeProducts(skuList) {
    return this._api.post('chargeProducts', {skuList: skuList})
      .pipe(map( res => {
        const list = skuList.filter( sku => {
          const product = this.newProductsRef(this._products.find(p => p.sku === sku))
          return product && this.validateProduct(product);
        });
        return {skuList: skuList, success: list.length === skuList.length};
      }));
  }

  public getProduct(sku) {
    return this._api.get('getProduct', {sku: sku})
      .pipe(map( res => this.newProductsRef(this._products.find( p => p.sku === sku))));
  }

  public isQuoteValid(quote): boolean {
    if (quote.price > 0 && quote.type !== 'QUALITY_ASSURANCE') {
      return true;
    } else if (quote.price >= 0 && quote.type === 'QUALITY_ASSURANCE') {
      return true;
    }
    return false;
  }

  public validateProduct(product): boolean {
    return product && product.quotes.filter( q => this.isQuoteValid(q)).length === product.quotes.length;
  }

  public newProductsRef(object) {
    return JSON.parse(JSON.stringify(object));
  }
}
