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
}
