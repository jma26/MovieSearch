import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UserService {

  constructor(private _http: HttpClient) { }

  // Retrieve one user
  getUser(alias) {
    console.log('user.service hit--> getUser()', alias);
    return this._http.get('/user/' + alias.alias);
  }

  // Retrieve all users
  getUsers() {
    console.log('user.service hit--> getUsers()');
    return this._http.get('/users');
  }

  // Add Favorite
  addFavorite(movie, alias) {
    console.log('user.service hit--> addFavorite()');
    return this._http.patch(`/user/${alias}`, movie)
  }
  
}
