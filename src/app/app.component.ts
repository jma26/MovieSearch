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
  totalResults: Number;

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
        this.totalResults = data['totalResults'];
        console.log(data);
      }
    })
  }

}
