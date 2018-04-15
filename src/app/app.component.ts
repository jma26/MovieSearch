import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  movie: any;
  name: String;
  year: Number;
  
  errors: any;
  results: any;
  pageNumbers: Number;
  pageNumberArr: Array<number> = [];

  constructor(private _service: ApiService) {}
  ngOnInit() {
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
        this.errors = data['Error'];
      // Display successful response
      } else if (data['Response'] === "True") {
        this.results = data['Search'];
        // Page numbers in bottom
        this.pageNumbers = Math.ceil(data['totalResults'] / 10);
        for (let i = 1; i <= this.pageNumbers; i++) {
          this.pageNumberArr.push(i);
        }
        console.log(data);
      }
    })
  }

  getPageNumbers() {
    console.log('I am clicked');
  }

}
