import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { RegisterService } from '../services/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  errors: any;
  registration: FormGroup;

  fullName: FormControl;
  email: FormControl;
  password: FormControl;
  confirmPassword: FormControl;
  alias: FormControl;

  constructor(private _registerService: RegisterService, private router: Router) { }

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
  }

  // Bind FormControls to FormGroup model as properties
  createForm() {
    // Registration model
    this.registration = new FormGroup({
      fullName: this.fullName,
      email: this.email,
      alias: this.alias,
      password: this.password,
      confirmPassword: this.confirmPassword
    })
  }

  register() {
    console.log('Registration at login-registration component pinging');
    if (this.registration.invalid) {
      console.log(this.registration.value);
      console.log('Form unsuccessfully submitted- Invalid fields present');
    // IF above is good, proceed to create register new user
    } else {
      console.log('Form successfully submitted- Valid fields present');
      let observable = this._registerService.registerUser(this.registration.value);
      observable.subscribe(data => {
        console.log(data);
        if (data['errors']) {
          console.log(data['errors']);
        } else {
          // Return registered user's information & navigate to home component
          console.log(data);
          this.router.navigate(['/home', data['alias']]);
          console.log('Successful creation');
        }
      })
    }
  }

}
