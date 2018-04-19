import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  userAlias: String;
  error: String;
  favorites: String;
  errorBoolean: Boolean;
  profileBoolean: Boolean;
  user: any;

  constructor(private _userService: UserService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.errorBoolean = false;
    this.profileBoolean = false;
    // Retrieve Signed in user's profile
    this.route.params.subscribe(params => {
      this.userAlias = params['alias'];
    })
    this.getUser(this.userAlias);
  }

  // Bind the dynamically generated pageNumbers with self
  get self() {
    return this;
  }

  getUser(userAlias) {
    let observable = this._userService.getUser({alias: userAlias});
    observable.subscribe(data => {
      if (data['success'] === false) {
        this.error = data['error'];
        this.errorBoolean = true;
      } else if (data['success'] === true && data['profile']) {
        this.user = data['profile'];
        this.profileBoolean = true;
        this.favorites = data['profile']['favorites'];
      }
    })
  }

  removeFavorite(movie) {
    console.log(movie);
    console.log('removeFavorite is clicked');
    let observable = this._userService.removeFavorite({alias: this.userAlias, movie: movie});
    observable.subscribe(data => {
      if (data['success'] === false) {
        this.error = data['error'];
        this.errorBoolean = true;
      } else if (data['success'] === true && data['profile']) {
        this.profileBoolean = true;
        this.user = data['profile'];
        this.favorites = data['profile']['favorites'];
      }
    })
  }

}
