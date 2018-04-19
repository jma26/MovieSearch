import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UserService {

  constructor(private _http: HttpClient) { }

  getUser(alias) {
    console.log('user.service hit ', alias);
    return this._http.get('/user/' + alias.alias);
  }
}
