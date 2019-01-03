import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  constructor() { }

  public getFirsts(number, array) {
    return array.slice(0, number);
  }
}
