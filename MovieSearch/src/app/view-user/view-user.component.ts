import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.css']
})
export class ViewUserComponent implements OnInit {
  user: any;
  userAlias: String;
  errorBoolean: Boolean;
  error: String;
  profileBoolean: Boolean;
  constructor(private _userService: UserService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.errorBoolean = false;
    this.profileBoolean = false;
    // Retrieve Signed in user's alias
    this.route.params.subscribe(params => {
      this.userAlias = params['alias'];
    })
    // Retrieve favorites of user
    this.route.params.subscribe(params => {
      this.user = params['user'];
      this.getUser(this.user);
    })
  }
  
  getUser(user) {
    console.log(user);
    let observable = this._userService.getUser({alias: user});
    observable.subscribe(data => {
      if (data['success'] === false) {
        this.error = data['error'];
        this.errorBoolean = true;
      } else if (data['success'] === true && data['profile']) {
        this.user = data['profile'];
        this.profileBoolean = true;
        console.log(this.user);
        console.log(this.user.favorites.length)
      }
    })
  }

}
