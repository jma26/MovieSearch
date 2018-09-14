import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  errors: any;
  userLogin: FormGroup;

  fullName: FormControl;
  email: FormControl;
  password: FormControl;
  confirmPassword: FormControl;
  alias: FormControl;

  loginEmail: FormControl;
  loginPassword: FormControl;

  constructor(private _loginService: LoginService, private router: Router) { }

  ngOnInit() {
    this.createFormControls();
    this.createForm();
  }

  // Create FormControls as part of component properties
  createFormControls() {
    this.fullName = new FormControl('', Validators.required),
    this.email = new FormControl('', Validators.required),
    this.alias = new FormControl('', Validators.required),
    this.password = new FormControl('', [Validators.required, Validators.minLength(5)]),
    this.confirmPassword = new FormControl('', Validators.required)

    this.loginEmail = new FormControl('', Validators.required),
    this.loginPassword = new FormControl('', Validators.required)
  }

  // Bind FormControls to FormGroup model as properties
  createForm() {
    // Login model
    this.userLogin = new FormGroup({
      email: this.loginEmail,
      password: this.loginPassword
    })
  }

  login() {
    console.log('Login at login-registration component pinging');
    if (this.userLogin.invalid) {
      console.log(this.userLogin.value);
      console.log(this.userLogin);
      console.log('Unsuccessful login- Invalid fields present');
    // IF above is good, proceed to login service.ts
    } else {
      let observable = this._loginService.loginUser(this.userLogin.value);
      observable.subscribe(data => {
        console.log('Observable data returned ', data);
        if (data['error'] && data['success'] === false) {
          this.errors = data['error'];
        } else if (data['profile'] && data['success'] === true) {
          console.log(data);
          this.router.navigate(['/home', data['profile']['alias']]);
        }
      })
    }
  }

}
