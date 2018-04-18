import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  movie: any;
  name: String;
  year: Number;
  currentPage: Number;
  
  error: Boolean;
  results: any;
  totalResults: Number;
  pageNumbers: Number;
  pageNumberArr: Array<number> = [];

  constructor(private _service: ApiService, private _router: Router) {}
  ngOnInit() {
    this.currentPage = 1;
    this.error = true;
    this.movie = {
      name: '',
      year: ''
    }
  }

  // Movie search
  search() {
    let observable = this._service.getMovies(this.movie);
    observable.subscribe(data => {
      // Display error Messages
      if (data['Response'] === "False" || data['Error']) {
        this.error = true;
        this.results = data['Error'];
        console.log(data);
      // Display successful response
      } else if (data['Response'] === "True") {
        this.error = false;
        this.results = data['Search'];
        // Number of results
        this.totalResults = data['totalResults'];
        // Page numbers in bottom
        this.pageNumbers = Math.ceil(data['totalResults'] / 10);
        // Clear pageNumberArr, initialize as empty Array
        this.pageNumberArr = [];
        for (let i = 1; i <= this.pageNumbers; i++) {
          this.pageNumberArr.push(i);
        }
        console.log(data);
      }
    })
  }

  // Bind the dynamically generated pageNumbers with self
  get self() {
    return this;
  }

  getPageNumbers(pageNumber) {
    this.currentPage = pageNumber;
    let observable = this._service.getMoreMovies(this.movie, pageNumber);
    observable.subscribe(data => {
      // Display error messages
      if (data['Response'] === 'False' || data['Error']) {
        this.error = true;
        this.results = data['Error'];
      // Display successful response
      } else if (data['Response'] === 'True') {
        this.error = false;
        this.results = data['Search'];
      }
    })
  }

}
