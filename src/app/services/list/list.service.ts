import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  constructor() { }

  public getFirsts(number, array): [any] {
    return array.slice(0, number);
  }

  public getItem(filter, array): any {
    return array.find(filter);
  }
}
