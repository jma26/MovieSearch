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

  constructor(private _userService: UserService, private route: ActivatedRoute) { }

  ngOnInit() {
    // Retrieve Signed in user's profile
    this.route.params.subscribe(params => {
      this.userAlias = params['alias'];
    })
    this.getUser(this.userAlias);
  }

  getUser(userAlias) {
    console.log(userAlias);
    let observable = this._userService.getUser({alias: userAlias});
    observable.subscribe(data => {
      console.log('Observable data returned ', data);
    })
  }

}
