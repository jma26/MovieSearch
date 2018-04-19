import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-community',
  templateUrl: './community.component.html',
  styleUrls: ['./community.component.css']
})
export class CommunityComponent implements OnInit {
  users: any;
  errorBoolean: Boolean;
  error: String;
  profileBoolean: Boolean;
  userAlias: String;
  constructor(private _userService: UserService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.errorBoolean = false;
    this.profileBoolean = false;
    // Retrieve Signed in user's profile
    this.route.params.subscribe(params => {
      this.userAlias = params['alias'];
    })
    this.getAllUsers();
  }

  getAllUsers() {
    let observable = this._userService.getUsers();
    observable.subscribe(data => {
      console.log(data);
      if (data['success'] === false) {
        this.error = data['error'];
      } else if (data['success'] === true && data['users']) {
        this.users = data['users']; 
      }
    })
  }


}
