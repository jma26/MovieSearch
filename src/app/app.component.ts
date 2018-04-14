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
      console.log(data);
    })
  }

}
