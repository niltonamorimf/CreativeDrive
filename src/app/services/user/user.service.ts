import { Injectable } from '@angular/core';
import { USERS } from './users';
import { ApiService } from '../api/api.service';
import { map } from 'rxjs/internal/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private _users;

  constructor(private _api: ApiService) {
    this._users = [...USERS];
  }

  public get users(): any {
    return this._users;
  }

  public getUser(id): Observable<any> {
    return this._api.get('getUser', {id: id})
      .pipe(map(res => this._users.find( u => u._id === parseInt(res.id, 0))));
  }
}
