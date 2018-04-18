webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent.prototype.ngOnInit = function () { };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;


/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_1 = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var forms_1 = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
// Services
var api_service_1 = __webpack_require__("./src/app/services/api.service.ts");
var login_service_1 = __webpack_require__("./src/app/services/login.service.ts");
var register_service_1 = __webpack_require__("./src/app/services/register.service.ts");
var app_component_1 = __webpack_require__("./src/app/app.component.ts");
var login_registration_component_1 = __webpack_require__("./src/app/login-registration/login-registration.component.ts");
var home_component_1 = __webpack_require__("./src/app/home/home.component.ts");
var appRoutes = [
    { path: '', component: login_registration_component_1.LoginRegistrationComponent },
    { path: 'home/:alias', component: home_component_1.HomeComponent }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                login_registration_component_1.LoginRegistrationComponent,
                home_component_1.HomeComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                http_1.HttpClientModule,
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule,
                router_1.RouterModule.forRoot(appRoutes)
            ],
            providers: [api_service_1.ApiService, register_service_1.RegisterService, login_service_1.LoginService],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;


/***/ }),

/***/ "./src/app/home/home.component.css":
/***/ (function(module, exports) {

module.exports = ".emptyImage {\r\n    width: 300px;\r\n    height: 300px;\r\n    background-color: gray;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n}\r\n\r\nimg {\r\n    width: 300px;\r\n    height: 300px;\r\n}\r\n\r\n.resultTitle, .emptyImage, form {\r\n    font-size: 21px;\r\n}\r\n\r\n/* Page Numbers */\r\n\r\n.pageNumbers {\r\n    width: 20px;\r\n    border: 1px solid gray;\r\n    display: inline-block;\r\n    color: yellow;\r\n}\r\n\r\n.pageNumbers:hover {\r\n    cursor: pointer;\r\n    color: green;\r\n}\r\n\r\n#pageNumbers_container {\r\n    margin-top: 15px;\r\n    text-align: center;\r\n}\r\n\r\n.pageNumbers {\r\n    margin-left: 5px;\r\n    margin-right: 5px;\r\n}\r\n\r\n.pageButtons {\r\n    margin-left: 10px;\r\n    margin-right: 10px;\r\n}\r\n\r\n/* End */\r\n\r\n#year {\r\n    width: 50px;\r\n}\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Display Results -->\n<div class='container-fluid'>\n  <div class='row'>\n    <div class='col-12'>\n      <form (ngSubmit)='search()'>\n        <label for='movie'> Movie Name: </label>\n        <input type='text' id='movie' name='movie' [(ngModel)]='movie.name'>\n        <label for='year'> Year: </label>\n        <input type='text' id='year' name='year' [(ngModel)]='movie.year'>\n        <button> Search </button>\n      </form>\n    </div>\n  </div>\n  <div class='row justify-content-start' *ngIf='!error'>\n    <div class='col-md-5'>\n      <h1 id='totalResults'> Search results: {{ totalResults }}</h1>\n    </div>\n    <div class='col-md-6'>\n      <h1 id='currentPageNumber'> Page {{ currentPage }} / {{ pageNumbers }} </h1>\n    </div>\n  </div>\n  <div class='row' *ngIf='error'>\n    <div class='col-12'>\n      <h1> {{ results }} </h1>\n    </div>\n  </div>\n  <div class='row' *ngIf='!error'>\n    <div class='col-md-3' *ngFor='let result of results'>\n      <p class='resultTitle'> \n        <i class=\"fas fa-star\" (click)='favorite()'></i> \n        {{ result.Title }} - {{ result.Year }} \n      </p>\n      <p *ngIf='result.Poster === \"N/A\" else poster' class='emptyImage'> Image not available </p>\n      <ng-template #poster>\n        <img src='{{ result.Poster }}'>\n      </ng-template>\n    </div>\n  </div>\n  <div class='row' *ngIf='!error'>\n    <div class='col-12' id='pageNumbers_container'>\n      <button class='pageButtons' [disabled]= 'currentPage == 1' (click)='getPageNumbers(currentPage - 1)'> PREV </button>\n      <p *ngFor='let number of pageNumberArr' (click)='self[getPageNumbers(number)]' class='pageNumbers'> {{ number }} </p>\n      <button class='pageButtons' [disabled]= 'currentPage == pageNumbers' (click)='getPageNumbers(currentPage + 1)'> NEXT </button>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var router_2 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var HomeComponent = /** @class */ (function () {
    function HomeComponent(_loginService, ApiService, _router, route) {
        if (_loginService === void 0) { _loginService = _service; }
        this._loginService = _loginService;
        this._router = _router;
        this.route = route;
        this.pageNumberArr = [];
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.currentPage = 1;
        this.error = true;
        this.movie = {
            name: '',
            year: ''
        };
        // Retrieve Signed in user's profile
        this.route.params.subscribe(function (params) {
            _this.userEmail = params['alias'];
        });
    };
    // Movie search
    HomeComponent.prototype.search = function () {
        var _this = this;
        var observable = this._service.getMovies(this.movie);
        observable.subscribe(function (data) {
            // Display error Messages
            if (data['Response'] === "False" || data['Error']) {
                _this.error = true;
                _this.results = data['Error'];
                console.log(data);
                // Display successful response
            }
            else if (data['Response'] === "True") {
                _this.error = false;
                _this.results = data['Search'];
                // Number of results
                _this.totalResults = data['totalResults'];
                // Page numbers in bottom
                _this.pageNumbers = Math.ceil(data['totalResults'] / 10);
                // Clear pageNumberArr, initialize as empty Array
                _this.pageNumberArr = [];
                for (var i = 1; i <= _this.pageNumbers; i++) {
                    _this.pageNumberArr.push(i);
                }
                console.log(data);
            }
        });
    };
    Object.defineProperty(HomeComponent.prototype, "self", {
        // Bind the dynamically generated pageNumbers with self
        get: function () {
            return this;
        },
        enumerable: true,
        configurable: true
    });
    HomeComponent.prototype.getPageNumbers = function (pageNumber) {
        var _this = this;
        console.log(pageNumber);
        this.currentPage = pageNumber;
        var observable = this._service.getMoreMovies(this.movie, pageNumber);
        observable.subscribe(function (data) {
            // Display error messages
            if (data['Response'] === 'False' || data['Error']) {
                _this.error = true;
                _this.results = data['Error'];
                // Display successful response
            }
            else if (data['Response'] === 'True') {
                _this.error = false;
                _this.results = data['Search'];
            }
        });
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: 'app-home',
            template: __webpack_require__("./src/app/home/home.component.html"),
            styles: [__webpack_require__("./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [Object, Object, router_1.Router, router_2.ActivatedRoute])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;


/***/ }),

/***/ "./src/app/login-registration/login-registration.component.css":
/***/ (function(module, exports) {

module.exports = "#headline {\r\n    text-align: center;\r\n    margin-left: 110px;\r\n    font-size: 50px;\r\n    color: gray;\r\n}\r\n\r\n.form-group label {\r\n    width: 150px;\r\n    margin-right: 5px;\r\n}\r\n\r\n.error {\r\n    color: red;\r\n}\r\n\r\nbutton {\r\n    display: block;\r\n    width: 150px;\r\n}\r\n\r\n.col-3 {\r\n    border: 2px solid green;\r\n}\r\n"

/***/ }),

/***/ "./src/app/login-registration/login-registration.component.html":
/***/ (function(module, exports) {

module.exports = "<div class='container'>\n  <div class='row justify-content-center'>\n    <div class='col'>\n      <h1 id='headline'> Login &amp; Registration </h1>\n    </div>\n  </div>\n  <div class='row justify-content-around'>\n    <div class='col-4'>\n      <!-- Login Form -->\n      <form (ngSubmit)='login()' id='loginForm' [formGroup]='userLogin'>\n        <div class='form-group'>\n          <label for='loginEmail'> Email Address </label>\n          <input type='text' id='loginEmail' formControlName='email' name='loginEmail'>\n        </div>\n        <div class='form-group'>\n          <label for='loginPassword'> Password </label> \n          <input type='password' id='loginPassword' formControlName='password' name='loginPassword'>\n         <!-- Form validation errors for password -->\n         <p class='error' *ngIf='userLogin.invalid'> Invalid fields present </p>\n         <!-- Display error if any from db -->\n         <p class='error' *ngIf='errors'> {{ errors }} </p>\n         <!-- End -->\n        </div>\n        <button> Login </button>\n      </form>\n      <!-- End of Login Form -->\n    </div>\n\n\n\n    <div class='col-4'>\n      <!-- Registration Form -->\n      <form (ngSubmit)='register()' id='registrationForm' [formGroup]='registration'>\n        <div class='form-group'>\n          <label for='alias'> Alias: </label>\n          <input type='text' formControlName='alias' name='alias' id='alias' placeholder='Your username'>\n          <!-- Form validation errors for username/alias -->\n          <p class='error' *ngIf='alias.invalid && alias.dirty'> Alias is required </p>\n          <!-- End -->\n        </div>\n        <div class='form-group'>\n          <label for='fullName'> Full Name: </label>\n          <input type='text' id='fullName' formControlName='fullName' name='fullName' placeholder='Your full name'>\n          <!-- Form validation errors for full name -->\n          <p class='error' *ngIf='fullName.invalid && fullName.dirty'> Full name is required </p>\n          <!-- End -->\n        </div>\n        <div class='form-group'>\n          <label for='email'> Email Address: </label>\n          <input type='text' id='email' formControlName='email' name='email' placeholder='Your email'>\n          <!-- Form validation errors for email -->\n          <p class='error' *ngIf='email.invalid && email.dirty'> Email is required </p>\n          <!-- End -->\n        </div>\n        <div class='form-group'>\n          <label for='password'> Password: </label>\n          <input type='password' id='password' formControlName='password' name='password' placeholder='Your password'>\n          <!-- Form validation errors for password -->\n          <div class='form-control-feedback' *ngIf='password.errors && (password.dirty || password.touched)'>\n            <p class='error' *ngIf='password.errors.required'> Password is required </p>\n            <p class='error' *ngIf='password.errors.minlength'> Password must be at least 5 characteres minimum </p>\n          </div>\n          <!-- End -->\n        </div>\n        <div class='form-group'>\n          <label for='confirmPassword'> Confirm Password: </label>\n          <input type='password' id='confirmPassword' formControlName='confirmPassword' name='confirmPassword' placeholder='Confirm password'>\n          <!-- Form validation errors for confirming password -->\n          <div class='form-control-feedback' *ngIf='confirmPassword.errors && (confirmPassword.dirty || confirmPassword.touched)'>\n            <p class='error' *ngIf='confirmPassword.errors.required'> Password confirmation required </p>\n          </div>\n          <p class='error' *ngIf='password.value !== confirmPassword.value'> Password does not match </p>\n          <!-- End -->\n        </div>\n        <button type='submit'> Register </button>\n        <!-- Display invalid fields present  -->\n        <p class='error' *ngIf='registration.invalid || password.value !== confirmPassword.value'> Invalid fields present </p>\n      </form>\n      <!-- End of Registration Form -->\n    </div>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/login-registration/login-registration.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var login_service_1 = __webpack_require__("./src/app/services/login.service.ts");
var register_service_1 = __webpack_require__("./src/app/services/register.service.ts");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var forms_1 = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var LoginRegistrationComponent = /** @class */ (function () {
    function LoginRegistrationComponent(_registerService, _loginService, router) {
        this._registerService = _registerService;
        this._loginService = _loginService;
        this.router = router;
    }
    LoginRegistrationComponent.prototype.ngOnInit = function () {
        this.createFormControls();
        this.createForm();
    };
    // Create FormControls as part of component properties
    LoginRegistrationComponent.prototype.createFormControls = function () {
        this.fullName = new forms_1.FormControl('', forms_1.Validators.required),
            this.email = new forms_1.FormControl('', forms_1.Validators.required),
            this.alias = new forms_1.FormControl('', forms_1.Validators.required),
            this.password = new forms_1.FormControl('', [forms_1.Validators.required, forms_1.Validators.minLength(5)]),
            this.confirmPassword = new forms_1.FormControl('', forms_1.Validators.required);
        this.loginEmail = new forms_1.FormControl('', forms_1.Validators.required),
            this.loginPassword = new forms_1.FormControl('', forms_1.Validators.required);
    };
    // Bind FormControls to FormGroup model as properties
    LoginRegistrationComponent.prototype.createForm = function () {
        // Login model
        this.userLogin = new forms_1.FormGroup({
            email: this.loginEmail,
            password: this.loginPassword
        });
        // Registration model
        this.registration = new forms_1.FormGroup({
            fullName: this.fullName,
            email: this.email,
            alias: this.alias,
            password: this.password,
            confirmPassword: this.confirmPassword
        });
    };
    LoginRegistrationComponent.prototype.register = function () {
        var _this = this;
        console.log('Registration at login-registration component pinging');
        if (this.registration.invalid) {
            console.log(this.registration.value);
            console.log('Form unsuccessfully submitted- Invalid fields present');
            // IF above is good, proceed to create register new user
        }
        else {
            console.log('Form successfully submitted- Valid fields present');
            var observable = this._registerService.registerUser(this.registration.value);
            observable.subscribe(function (data) {
                console.log(data);
                if (data['errors']) {
                    console.log(data['errors']);
                }
                else {
                    // Return registered user's information & navigate to home component
                    console.log(data);
                    _this.router.navigate(['/home']);
                    console.log('Successful creation');
                }
            });
        }
    };
    LoginRegistrationComponent.prototype.login = function () {
        var _this = this;
        console.log('Login at login-registration component pinging');
        if (this.userLogin.invalid) {
            console.log(this.userLogin.value);
            console.log(this.userLogin);
            console.log('Unsuccessful login- Invalid fields present');
            // IF above is good, proceed to login service.ts
        }
        else {
            var observable = this._loginService.loginUser(this.userLogin.value);
            observable.subscribe(function (data) {
                console.log('Observable data he re ', data);
                if (data['error'] && data['success'] === false) {
                    _this.errors = data['error'];
                }
                else if (data['profile'] && data['success'] === true) {
                    console.log(data);
                    _this.router.navigate(['/home', data['profile']['alias']]);
                }
            });
        }
    };
    LoginRegistrationComponent = __decorate([
        core_1.Component({
            selector: 'app-login-registration',
            template: __webpack_require__("./src/app/login-registration/login-registration.component.html"),
            styles: [__webpack_require__("./src/app/login-registration/login-registration.component.css")]
        }),
        __metadata("design:paramtypes", [register_service_1.RegisterService, login_service_1.LoginService, router_1.Router])
    ], LoginRegistrationComponent);
    return LoginRegistrationComponent;
}());
exports.LoginRegistrationComponent = LoginRegistrationComponent;


/***/ }),

/***/ "./src/app/services/api.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_1 = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var ApiService = /** @class */ (function () {
    function ApiService(_http) {
        this._http = _http;
    }
    ApiService.prototype.getMovies = function (movie) {
        console.log(movie);
        return this._http.get("http://www.omdbapi.com/?s=" + movie.name + "&page=1&y=" + movie.year + "&apikey=68d0156");
    };
    ApiService.prototype.getMoreMovies = function (movie, pageNumber) {
        return this._http.get("http://www.omdbapi.com/?s=" + movie.name + "&page=" + pageNumber + "&y=" + movie.year + "&apikey=68d0156");
    };
    ApiService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], ApiService);
    return ApiService;
}());
exports.ApiService = ApiService;


/***/ }),

/***/ "./src/app/services/login.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_1 = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var LoginService = /** @class */ (function () {
    function LoginService(_http) {
        this._http = _http;
    }
    LoginService.prototype.loginUser = function (user) {
        console.log('Login.service.ts pinging ' + user);
        return this._http.post('/login', user);
    };
    LoginService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], LoginService);
    return LoginService;
}());
exports.LoginService = LoginService;


/***/ }),

/***/ "./src/app/services/register.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_1 = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var RegisterService = /** @class */ (function () {
    function RegisterService(_http) {
        this._http = _http;
    }
    RegisterService.prototype.registerUser = function (newUser) {
        console.log('Register.service.ts pinging ' + newUser);
        return this._http.post('/registration', newUser);
    };
    RegisterService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], RegisterService);
    return RegisterService;
}());
exports.RegisterService = RegisterService;


/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var platform_browser_dynamic_1 = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
var app_module_1 = __webpack_require__("./src/app/app.module.ts");
var environment_1 = __webpack_require__("./src/environments/environment.ts");
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule)
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map