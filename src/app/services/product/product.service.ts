import { Injectable } from '@angular/core';
import { PRODUCTS } from './products';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private _products;

  constructor() {
    this._products = this.newProductsRef(PRODUCTS);
  }

  public get products() {
    return this._products;
  }

  public saveProduct(product) {
    return this._products.find( (p, index, arr) => {
       if (p.sku === product.sku) {
        arr[index] = product;
       }
       return p.sku === product.sku;
    });
  }

  public saveQuotes({sku, quotes}) {
    return this._products.find( (p, index, arr) => {
      if (p.sku === sku) {
       arr[index].quotes = quotes;
      }
      return p.sku === sku;
   });
  }

  public chargeProducts(skuList) {
    return skuList;
  }

  public getProduct(sku) {
    return this.newProductsRef(this._products.find( p => p.sku === sku));
  }

  public newProductsRef(object) {
    return JSON.parse(JSON.stringify(object));
  }
}
