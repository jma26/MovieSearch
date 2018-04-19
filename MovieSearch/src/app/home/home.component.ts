import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../services/api.service';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

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
  userAlias: String;
  
  error: Boolean;
  results: any;
  totalResults: Number;
  pageNumbers: Number;
  pageNumberArr: Array<number> = [];

  constructor(private _userService: UserService, private _service: ApiService, private route: ActivatedRoute) {}
  ngOnInit() {
    this.currentPage = 1;
    this.error = true;
    this.movie = {
      name: '',
      year: ''
    }
    // Retrieve Signed in user's profile
    this.route.params.subscribe(params => {
      this.userAlias = params['alias'];
    })
  }

  // Movie search
  search() {
    this.currentPage = 1;
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
    console.log(pageNumber);
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

  favorite(movie) {
    console.log(movie);
    let observable = this._userService.addFavorite(movie, this.userAlias);
    observable.subscribe(data => {
      // Dispaly error message
      if (data['success'] === false) {
        this.error = true;
        alert(data['error']);
      } else if (data['success'] === true) {
        this.error = false;
        alert('Movie added to favorites');
      }
    })
  }

}
