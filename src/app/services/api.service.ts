import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ApiService {

  constructor(private _http: HttpClient) { }

  getMovies(movie) {
    console.log(movie);
    return this._http.get(`http://www.omdbapi.com/?s=${movie.name}&page=1&y=${movie.year}&apikey=68d0156`);
  }
}
