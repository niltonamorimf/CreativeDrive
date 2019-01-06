import { Injectable } from '@angular/core';
import { PRODUCTS } from './products';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private _products;

  constructor() {
    this._products = [...PRODUCTS];
  }

  public get products() {
    return this._products;
  }

  public saveProduct(product) {
    this._products.forEach( p => {
       if (p._id === product._id) {
        p = product;
       }
    });
  }
}
