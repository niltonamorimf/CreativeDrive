import { Injectable } from '@angular/core';
import { USERS } from './users';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private _users;

  constructor() {
    this._users = USERS;
  }

  public get users() {
    return this._users;
  }

  public findUser(id): any {
    return this._users.filter( u => u._id === id);
  }
}
