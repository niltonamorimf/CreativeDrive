import { Injectable } from '@angular/core';
import { USERS } from './users';
import { ApiService } from '../api/api.service';
import { map } from 'rxjs/internal/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private _users;

  constructor(private _api: ApiService) {
    this._users = [...USERS];
  }

  public get users() {
    return this._users;
  }

  public getUser(id): any {
    return this._api.get('getUser', {id: id})
      .pipe(map(res => this._users.find( u => u._id === parseInt(res.id, 0))));
  }
}
