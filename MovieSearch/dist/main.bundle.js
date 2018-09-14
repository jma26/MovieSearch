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

module.exports = "<router-outlet></router-outlet>\r\n\r\n"

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
var user_service_1 = __webpack_require__("./src/app/services/user.service.ts");
var app_component_1 = __webpack_require__("./src/app/app.component.ts");
var home_component_1 = __webpack_require__("./src/app/home/home.component.ts");
var profile_component_1 = __webpack_require__("./src/app/profile/profile.component.ts");
var community_component_1 = __webpack_require__("./src/app/community/community.component.ts");
var view_user_component_1 = __webpack_require__("./src/app/view-user/view-user.component.ts");
var login_component_1 = __webpack_require__("./src/app/login/login.component.ts");
var register_component_1 = __webpack_require__("./src/app/register/register.component.ts");
var appRoutes = [
    { path: '', component: register_component_1.RegisterComponent },
    { path: 'login', component: login_component_1.LoginComponent },
    { path: 'home/:alias', component: home_component_1.HomeComponent },
    { path: 'profile/:alias', component: profile_component_1.ProfileComponent },
    { path: 'community/:alias', component: community_component_1.CommunityComponent },
    { path: 'community/:alias/:user', component: view_user_component_1.ViewUserComponent }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                home_component_1.HomeComponent,
                profile_component_1.ProfileComponent,
                community_component_1.CommunityComponent,
                view_user_component_1.ViewUserComponent,
                login_component_1.LoginComponent,
                register_component_1.RegisterComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                http_1.HttpClientModule,
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule,
                router_1.RouterModule.forRoot(appRoutes)
            ],
            providers: [api_service_1.ApiService, register_service_1.RegisterService, login_service_1.LoginService, user_service_1.UserService],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;


/***/ }),

/***/ "./src/app/community/community.component.css":
/***/ (function(module, exports) {

module.exports = "#homeLink:hover, #profileLink:hover {\r\n    cursor: pointer;\r\n    color: yellow;\r\n}\r\n\r\n#homeLink, #profileLink, th, td {\r\n    font-size: 24px;\r\n}\r\n\r\nth, td {\r\n    width: 150px;\r\n    border: 2px solid yellow;\r\n}"

/***/ }),

/***/ "./src/app/community/community.component.html":
/***/ (function(module, exports) {

module.exports = "<div class='container-fluid'>\r\n  <div class='row'>\r\n    <div class='col-12'>\r\n      <span id='homeLink' [routerLink]=\"['/home', userAlias]\"> Home </span>\r\n      <span id='profileLink' [routerLink]=\"['/profile', userAlias]\"> My Profile </span>\r\n    </div>\r\n  </div>\r\n  <div class='row'>\r\n    <div class='col-12'>\r\n      <table>\r\n        <tr>\r\n          <th id='aliasHeading'> Alias </th>\r\n          <th> Favorites </th>\r\n        </tr>\r\n        <tr *ngFor='let user of users'>\r\n          <td class='tableData'> {{ user.alias }} </td>\r\n          <td class='tableData'> {{ user.favorites.length }} </td>\r\n          <td class='tableData'> <a [routerLink]=\"['/community', userAlias, user.alias]\"> View User </a> </td>\r\n        </tr>\r\n      </table>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/community/community.component.ts":
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
var user_service_1 = __webpack_require__("./src/app/services/user.service.ts");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var CommunityComponent = /** @class */ (function () {
    function CommunityComponent(_userService, route) {
        this._userService = _userService;
        this.route = route;
    }
    CommunityComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.errorBoolean = false;
        this.profileBoolean = false;
        // Retrieve Signed in user's profile
        this.route.params.subscribe(function (params) {
            _this.userAlias = params['alias'];
        });
        this.getAllUsers();
    };
    CommunityComponent.prototype.getAllUsers = function () {
        var _this = this;
        var observable = this._userService.getUsers();
        observable.subscribe(function (data) {
            console.log(data);
            if (data['success'] === false) {
                _this.error = data['error'];
            }
            else if (data['success'] === true && data['users']) {
                _this.users = data['users'];
            }
        });
    };
    CommunityComponent = __decorate([
        core_1.Component({
            selector: 'app-community',
            template: __webpack_require__("./src/app/community/community.component.html"),
            styles: [__webpack_require__("./src/app/community/community.component.css")]
        }),
        __metadata("design:paramtypes", [user_service_1.UserService, router_1.ActivatedRoute])
    ], CommunityComponent);
    return CommunityComponent;
}());
exports.CommunityComponent = CommunityComponent;


/***/ }),

/***/ "./src/app/home/home.component.css":
/***/ (function(module, exports) {

module.exports = ".emptyImage {\r\n    width: 300px;\r\n    height: 300px;\r\n    background-color: gray;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n}\r\n\r\nimg {\r\n    width: 300px;\r\n    height: 300px;\r\n}\r\n\r\n.resultTitle, .emptyImage, form {\r\n    font-size: 21px;\r\n}\r\n\r\n/* Page Numbers */\r\n\r\n.pageNumbers {\r\n    width: 20px;\r\n    border: 1px solid gray;\r\n    display: inline-block;\r\n    color: yellow;\r\n}\r\n\r\n.pageNumbers:hover {\r\n    cursor: pointer;\r\n    color: green;\r\n}\r\n\r\n#pageNumbers_container {\r\n    margin-top: 15px;\r\n    text-align: center;\r\n}\r\n\r\n.pageNumbers {\r\n    margin-left: 5px;\r\n    margin-right: 5px;\r\n}\r\n\r\n.pageButtons {\r\n    margin-left: 10px;\r\n    margin-right: 10px;\r\n    padding: 4px;\r\n}\r\n\r\n/* End */\r\n\r\n/* Profile Link & Community Link */\r\n\r\n#profileLink:hover, #communityLink:hover {\r\n    cursor: pointer;\r\n    color: yellow;\r\n}\r\n\r\n#profileLink, #communityLink {\r\n    font-size: 24px;\r\n}\r\n\r\n/* End */\r\n\r\n/* Favorite Icon */\r\n\r\n.fa-star:hover {\r\n    color: red;\r\n}\r\n\r\n#year {\r\n    width: 50px;\r\n}\r\n\r\n/* Form */\r\n\r\nform {\r\n    margin-top: 16px;\r\n}\r\n\r\nlabel {\r\n    font-size: 24px;\r\n}\r\n\r\ninput[type=\"text\"] {\r\n    min-width: 60px;\r\n}\r\n\r\nbutton, input[type=\"text\"] {\r\n    padding: 4px;\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class='container-fluid'>\r\n  <div class='row'>\r\n    <div class='col-12'>\r\n      <span id='profileLink' [routerLink]=\"['/profile', userAlias]\"> My Profile </span>\r\n      <span id='communityLink' [routerLink]=\"['/community', userAlias]\"> My Community </span>\r\n    </div>\r\n  </div>\r\n  <div class='row'>\r\n    <div class='col-12'>\r\n      <form (ngSubmit)='search()'>\r\n        <label for='movie'> Movie Name: </label>\r\n        <input type='text' id='movie' name='movie' [(ngModel)]='movie.name'>\r\n        <label for='year'> Year: </label>\r\n        <input type='text' id='year' name='year' [(ngModel)]='movie.year'>\r\n        <button> Search </button>\r\n      </form>\r\n    </div>\r\n  </div>\r\n  <div class='row justify-content-start' *ngIf='!error'>\r\n    <div class='col-md-5'>\r\n      <h1 id='totalResults'> Search results: {{ totalResults }}</h1>\r\n    </div>\r\n    <div class='col-md-6'>\r\n      <h1 id='currentPageNumber'> Page {{ currentPage }} / {{ pageNumbers }} </h1>\r\n    </div>\r\n  </div>\r\n  <div class='row' *ngIf='error'>\r\n    <div class='col-12'>\r\n      <h1> {{ results }} </h1>\r\n    </div>\r\n  </div>\r\n  <div class='row' *ngIf='!error'>\r\n    <div class='col-md-3' *ngFor='let result of results'>\r\n      <p class='resultTitle'> \r\n        <span (click)='favorite(result)'><i class=\"fas fa-star\"></i></span>\r\n        {{ result.Title }} - {{ result.Year }} \r\n      </p>\r\n      <p *ngIf='result.Poster === \"N/A\" else poster' class='emptyImage'> Image not available </p>\r\n      <ng-template #poster>\r\n        <img src='{{ result.Poster }}'>\r\n      </ng-template>\r\n    </div>\r\n  </div>\r\n  <div class='row' *ngIf='!error'>\r\n    <div class='col-12' id='pageNumbers_container'>\r\n      <button class='pageButtons' [disabled]= 'currentPage == 1' (click)='getPageNumbers(currentPage - 1)'> PREV </button>\r\n      <p *ngFor='let number of pageNumberArr' (click)='self[getPageNumbers(number)]' class='pageNumbers'> {{ number }} </p>\r\n      <button class='pageButtons' [disabled]= 'currentPage == pageNumbers' (click)='getPageNumbers(currentPage + 1)'> NEXT </button>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

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
var api_service_1 = __webpack_require__("./src/app/services/api.service.ts");
var user_service_1 = __webpack_require__("./src/app/services/user.service.ts");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var HomeComponent = /** @class */ (function () {
    function HomeComponent(_userService, _service, route) {
        this._userService = _userService;
        this._service = _service;
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
            _this.userAlias = params['alias'];
        });
    };
    // Movie search
    HomeComponent.prototype.search = function () {
        var _this = this;
        this.currentPage = 1;
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
    HomeComponent.prototype.favorite = function (movie) {
        var _this = this;
        console.log(movie);
        var observable = this._userService.addFavorite(movie, this.userAlias);
        observable.subscribe(function (data) {
            // Dispaly error message
            if (data['success'] === false) {
                _this.error = true;
                alert(data['error']);
            }
            else if (data['success'] === true) {
                _this.error = false;
                alert('Movie added to favorites');
            }
        });
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: 'app-home',
            template: __webpack_require__("./src/app/home/home.component.html"),
            styles: [__webpack_require__("./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [user_service_1.UserService, api_service_1.ApiService, router_1.ActivatedRoute])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;


/***/ }),

/***/ "./src/app/login/login.component.css":
/***/ (function(module, exports) {

module.exports = "#headline {\r\n  text-align: center;\r\n  margin-left: 110px;\r\n  font-size: 50px;\r\n  color: gray;\r\n}\r\n\r\n.form-group label {\r\n  width: 150px;\r\n  margin-right: 5px;\r\n}\r\n\r\n.error {\r\n  color: red;\r\n}\r\n\r\nbutton {\r\n  display: block;\r\n  width: 150px;\r\n}\r\n\r\n.col-3 {\r\n  border: 2px solid green;\r\n}\r\n"

/***/ }),

/***/ "./src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class='container'>\r\n  <div class='row justify-content-center'>\r\n    <div class='col'>\r\n      <h1 id='headline'> Login &amp; Registration </h1>\r\n    </div>\r\n  </div>\r\n  <div class='row justify-content-around'>\r\n    <div class='col-4'>\r\n      <!-- Login Form -->\r\n      <form (ngSubmit)='login()' id='loginForm' [formGroup]='userLogin'>\r\n        <div class='form-group'>\r\n          <label for='loginEmail'> Email Address </label>\r\n          <input type='text' id='loginEmail' formControlName='email' name='loginEmail'>\r\n        </div>\r\n        <div class='form-group'>\r\n          <label for='loginPassword'> Password </label>\r\n          <input type='password' id='loginPassword' formControlName='password' name='loginPassword'>\r\n          <!-- Form validation errors for password -->\r\n          <p class='error' *ngIf='userLogin.invalid'> Invalid fields present </p>\r\n          <!-- Display error if any from db -->\r\n          <p class='error' *ngIf='errors'> {{ errors }} </p>\r\n          <!-- End -->\r\n        </div>\r\n        <button> Login </button>\r\n      </form>\r\n      <!-- End of Login Form -->\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
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
var forms_1 = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var login_service_1 = __webpack_require__("./src/app/services/login.service.ts");
var LoginComponent = /** @class */ (function () {
    function LoginComponent(_loginService, router) {
        this._loginService = _loginService;
        this.router = router;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.createFormControls();
        this.createForm();
    };
    // Create FormControls as part of component properties
    LoginComponent.prototype.createFormControls = function () {
        this.fullName = new forms_1.FormControl('', forms_1.Validators.required),
            this.email = new forms_1.FormControl('', forms_1.Validators.required),
            this.alias = new forms_1.FormControl('', forms_1.Validators.required),
            this.password = new forms_1.FormControl('', [forms_1.Validators.required, forms_1.Validators.minLength(5)]),
            this.confirmPassword = new forms_1.FormControl('', forms_1.Validators.required);
        this.loginEmail = new forms_1.FormControl('', forms_1.Validators.required),
            this.loginPassword = new forms_1.FormControl('', forms_1.Validators.required);
    };
    // Bind FormControls to FormGroup model as properties
    LoginComponent.prototype.createForm = function () {
        // Login model
        this.userLogin = new forms_1.FormGroup({
            email: this.loginEmail,
            password: this.loginPassword
        });
    };
    LoginComponent.prototype.login = function () {
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
                console.log('Observable data returned ', data);
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
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'app-login',
            template: __webpack_require__("./src/app/login/login.component.html"),
            styles: [__webpack_require__("./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [login_service_1.LoginService, router_1.Router])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;


/***/ }),

/***/ "./src/app/profile/profile.component.css":
/***/ (function(module, exports) {

module.exports = "#homeLink:hover, #communityLink:hover {\r\n    cursor: pointer;\r\n    color: yellow;\r\n}\r\n\r\n#homeLink, #communityLink {\r\n    font-size: 24px;\r\n}\r\n\r\n.emptyImage {\r\n    width: 300px;\r\n    height: 300px;\r\n    background-color: gray;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n}\r\n\r\nimg {\r\n    width: 300px;\r\n    height: 300px;\r\n}\r\n\r\n.resultTitle, .emptyImage, form {\r\n    font-size: 21px;\r\n}\r\n\r\n.fa-trash-alt:hover {\r\n    cursor: pointer;\r\n    color: red;\r\n}"

/***/ }),

/***/ "./src/app/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<div class='container-fluid'>\r\n  <div class='row'>\r\n    <div class='col-md-12'>\r\n      <span id='homeLink' [routerLink]=\"['/home', user.alias]\"> Home </span>\r\n      <span id='communityLink' [routerLink]=\"['/community', user.alias]\"> My Community </span>\r\n    </div>\r\n  </div>\r\n  <div class='row'>\r\n    <div class='col-md-12' *ngIf='profileBoolean'>\r\n      <h1> Hello {{ user.fullName }}! </h1> \r\n      <h1> Your Email: {{ user.email }} </h1>\r\n      <h1> Your Alias: {{ user.alias }} </h1>\r\n      <h1 *ngIf='favorites.length == 0'> Favorites: Empty!! </h1>\r\n      <h1 *ngIf='favorites.length > 0'> Favorites: </h1>\r\n    </div>\r\n  </div>\r\n  <div class='row'>\r\n    <div class='col-md-3' *ngFor='let favorite of favorites'>\r\n      <p class='resultTitle'> <span (click)='removeFavorite(favorite)'> <i class=\"fas fa-trash-alt\"></i></span> {{ favorite.Title }} - {{ favorite.Year }} </p>\r\n      <p *ngIf='favorite.Poster === \"N/A\" else poster' class='emptyImage'> Image not available </p>\r\n      <ng-template #poster>\r\n        <img src='{{ favorite.Poster }}'>\r\n      </ng-template>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/profile/profile.component.ts":
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
var user_service_1 = __webpack_require__("./src/app/services/user.service.ts");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var router_2 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(_userService, route, router) {
        this._userService = _userService;
        this.route = route;
        this.router = router;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.errorBoolean = false;
        this.profileBoolean = false;
        // Retrieve Signed in user's profile
        this.route.params.subscribe(function (params) {
            _this.userAlias = params['alias'];
        });
        this.getUser(this.userAlias);
    };
    Object.defineProperty(ProfileComponent.prototype, "self", {
        // Bind the dynamically generated pageNumbers with self
        get: function () {
            return this;
        },
        enumerable: true,
        configurable: true
    });
    ProfileComponent.prototype.getUser = function (userAlias) {
        var _this = this;
        var observable = this._userService.getUser({ alias: userAlias });
        observable.subscribe(function (data) {
            if (data['success'] === false) {
                _this.error = data['error'];
                _this.errorBoolean = true;
            }
            else if (data['success'] === true && data['profile']) {
                _this.user = data['profile'];
                _this.profileBoolean = true;
                _this.favorites = data['profile']['favorites'];
            }
        });
    };
    ProfileComponent.prototype.removeFavorite = function (movie) {
        var _this = this;
        console.log(movie);
        console.log('removeFavorite is clicked');
        var observable = this._userService.removeFavorite({ alias: this.userAlias, movie: movie });
        observable.subscribe(function (data) {
            if (data['success'] === false) {
                _this.error = data['error'];
                _this.errorBoolean = true;
            }
            else if (data['success'] === true && data['profile']) {
                _this.profileBoolean = true;
                _this.user = data['profile'];
                _this.favorites = data['profile']['favorites'];
            }
        });
    };
    ProfileComponent = __decorate([
        core_1.Component({
            selector: 'app-profile',
            template: __webpack_require__("./src/app/profile/profile.component.html"),
            styles: [__webpack_require__("./src/app/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [user_service_1.UserService, router_2.ActivatedRoute, router_1.Router])
    ], ProfileComponent);
    return ProfileComponent;
}());
exports.ProfileComponent = ProfileComponent;


/***/ }),

/***/ "./src/app/register/register.component.css":
/***/ (function(module, exports) {

module.exports = "#headline {\r\n  text-align: center;\r\n  margin-left: 110px;\r\n  font-size: 50px;\r\n  color: gray;\r\n}\r\n\r\n.form-group label {\r\n  width: 150px;\r\n  margin-right: 5px;\r\n}\r\n\r\n.error {\r\n  color: red;\r\n}\r\n\r\nbutton {\r\n  display: block;\r\n  width: 150px;\r\n}\r\n\r\n.col-3 {\r\n  border: 2px solid green;\r\n}\r\n"

/***/ }),

/***/ "./src/app/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class='col-4'>\r\n    <!-- Registration Form -->\r\n    <form (ngSubmit)='register()' id='registrationForm' [formGroup]='registration'>\r\n      <div class='form-group'>\r\n        <label for='alias'> Alias: </label>\r\n        <input type='text' formControlName='alias' name='alias' id='alias' placeholder='Your username'>\r\n        <!-- Form validation errors for username/alias -->\r\n        <p class='error' *ngIf='alias.invalid && alias.dirty'> Alias is required </p>\r\n        <!-- End -->\r\n      </div>\r\n      <div class='form-group'>\r\n        <label for='fullName'> Full Name: </label>\r\n        <input type='text' id='fullName' formControlName='fullName' name='fullName' placeholder='Your full name'>\r\n        <!-- Form validation errors for full name -->\r\n        <p class='error' *ngIf='fullName.invalid && fullName.dirty'> Full name is required </p>\r\n        <!-- End -->\r\n      </div>\r\n      <div class='form-group'>\r\n        <label for='email'> Email Address: </label>\r\n        <input type='text' id='email' formControlName='email' name='email' placeholder='Your email'>\r\n        <!-- Form validation errors for email -->\r\n        <p class='error' *ngIf='email.invalid && email.dirty'> Email is required </p>\r\n        <!-- End -->\r\n      </div>\r\n      <div class='form-group'>\r\n        <label for='password'> Password: </label>\r\n        <input type='password' id='password' formControlName='password' name='password' placeholder='Your password'>\r\n        <!-- Form validation errors for password -->\r\n        <div class='form-control-feedback' *ngIf='password.errors && (password.dirty || password.touched)'>\r\n          <p class='error' *ngIf='password.errors.required'> Password is required </p>\r\n          <p class='error' *ngIf='password.errors.minlength'> Password must be at least 5 characteres minimum </p>\r\n        </div>\r\n        <!-- End -->\r\n      </div>\r\n      <div class='form-group'>\r\n        <label for='confirmPassword'> Confirm Password: </label>\r\n        <input type='password' id='confirmPassword' formControlName='confirmPassword' name='confirmPassword' placeholder='Confirm password'>\r\n        <!-- Form validation errors for confirming password -->\r\n        <div class='form-control-feedback' *ngIf='confirmPassword.errors && (confirmPassword.dirty || confirmPassword.touched)'>\r\n          <p class='error' *ngIf='confirmPassword.errors.required'> Password confirmation required </p>\r\n        </div>\r\n        <p class='error' *ngIf='password.value !== confirmPassword.value'> Password does not match </p>\r\n        <!-- End -->\r\n      </div>\r\n      <button type='submit'> Register </button>\r\n      <!-- Display invalid fields present  -->\r\n      <p class='error' *ngIf='registration.invalid || password.value !== confirmPassword.value'> Invalid fields present </p>\r\n    </form>\r\n    <!-- End of Registration Form -->\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/register/register.component.ts":
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
var forms_1 = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var register_service_1 = __webpack_require__("./src/app/services/register.service.ts");
var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(_registerService, router) {
        this._registerService = _registerService;
        this.router = router;
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.createFormControls();
        this.createForm();
    };
    // Create FormControls as part of component properties
    RegisterComponent.prototype.createFormControls = function () {
        this.fullName = new forms_1.FormControl('', forms_1.Validators.required),
            this.email = new forms_1.FormControl('', forms_1.Validators.required),
            this.alias = new forms_1.FormControl('', forms_1.Validators.required),
            this.password = new forms_1.FormControl('', [forms_1.Validators.required, forms_1.Validators.minLength(5)]),
            this.confirmPassword = new forms_1.FormControl('', forms_1.Validators.required);
    };
    // Bind FormControls to FormGroup model as properties
    RegisterComponent.prototype.createForm = function () {
        // Registration model
        this.registration = new forms_1.FormGroup({
            fullName: this.fullName,
            email: this.email,
            alias: this.alias,
            password: this.password,
            confirmPassword: this.confirmPassword
        });
    };
    RegisterComponent.prototype.register = function () {
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
                    _this.router.navigate(['/home', data['alias']]);
                    console.log('Successful creation');
                }
            });
        }
    };
    RegisterComponent = __decorate([
        core_1.Component({
            selector: 'app-register',
            template: __webpack_require__("./src/app/register/register.component.html"),
            styles: [__webpack_require__("./src/app/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [register_service_1.RegisterService, router_1.Router])
    ], RegisterComponent);
    return RegisterComponent;
}());
exports.RegisterComponent = RegisterComponent;


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

/***/ "./src/app/services/user.service.ts":
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
var UserService = /** @class */ (function () {
    function UserService(_http) {
        this._http = _http;
    }
    // Retrieve one user
    UserService.prototype.getUser = function (alias) {
        console.log('user.service hit--> getUser()', alias);
        return this._http.get('/user/' + alias.alias);
    };
    // Retrieve all users
    UserService.prototype.getUsers = function () {
        console.log('user.service hit--> getUsers()');
        return this._http.get('/users');
    };
    // Add Favorite
    UserService.prototype.addFavorite = function (movie, alias) {
        console.log('user.service hit--> addFavorite()');
        return this._http.patch("/user/" + alias, movie);
    };
    // Remove Favorite
    UserService.prototype.removeFavorite = function (movie) {
        console.log(movie);
        console.log('user.service hit--> removeFavorite()');
        return this._http.put("/user/" + movie.alias, movie);
    };
    UserService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], UserService);
    return UserService;
}());
exports.UserService = UserService;


/***/ }),

/***/ "./src/app/view-user/view-user.component.css":
/***/ (function(module, exports) {

module.exports = "#homeLink:hover, #communityLink:hover {\r\n    color: yellow;\r\n    cursor: pointer;\r\n}\r\n\r\n#homeLink, #communityLink {\r\n    font-size: 24px;\r\n}\r\n\r\n.emptyImage {\r\n    width: 300px;\r\n    height: 300px;\r\n    background-color: gray;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n}\r\n\r\nimg {\r\n    width: 300px;\r\n    height: 300px;\r\n}\r\n\r\n.resultTitle, .emptyImage {\r\n    font-size: 21px;\r\n}"

/***/ }),

/***/ "./src/app/view-user/view-user.component.html":
/***/ (function(module, exports) {

module.exports = "<div class='container-fluid'>\r\n  <div class='row'>\r\n    <div class='col-md-12'>\r\n      <span id='homeLink' [routerLink]=\"['/home', user.alias]\"> Home </span>\r\n      <span id='communityLink' [routerLink]=\"['/community', user.alias]\"> My Community </span>\r\n    </div>\r\n  </div>\r\n  <div class='row'>\r\n    <div class='col-md-12'>\r\n      <h1 *ngIf='profileBoolean'> Viewing {{ user.alias }}'s profile </h1>\r\n      <h1 *ngIf='errorBoolean'> {{ error }} </h1>\r\n      <h1 *ngIf='favorites.length == 0'> {{ user.alias }}'s favorites: Empty!! </h1>\r\n    </div>\r\n  </div>\r\n  <div class='row' *ngIf='profileBoolean'>\r\n    <div class='col-md-3' *ngFor='let favorite of favorites'>\r\n      <p class='resultTitle'> {{ favorite.Title }} - {{ favorite.Year }} </p>\r\n      <p *ngIf='favorite.Poster === \"N/A\" else poster' class='emptyImage'> Image not available </p>\r\n      <ng-template #poster>\r\n        <img src='{{ favorite.Poster }}'>\r\n      </ng-template>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/view-user/view-user.component.ts":
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
var user_service_1 = __webpack_require__("./src/app/services/user.service.ts");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var ViewUserComponent = /** @class */ (function () {
    function ViewUserComponent(_userService, route) {
        this._userService = _userService;
        this.route = route;
    }
    ViewUserComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.errorBoolean = false;
        this.profileBoolean = false;
        // Retrieve Signed in user's alias
        this.route.params.subscribe(function (params) {
            _this.userAlias = params['alias'];
        });
        // Retrieve favorites of user
        this.route.params.subscribe(function (params) {
            _this.user = params['user'];
            _this.getUser(_this.user);
        });
    };
    ViewUserComponent.prototype.getUser = function (user) {
        var _this = this;
        console.log(user);
        var observable = this._userService.getUser({ alias: user });
        observable.subscribe(function (data) {
            if (data['success'] === false) {
                _this.error = data['error'];
                _this.errorBoolean = true;
            }
            else if (data['success'] === true && data['profile']) {
                _this.user = data['profile'];
                _this.favorites = data['profile']['favorites'];
                _this.profileBoolean = true;
                console.log(_this.user);
                console.log(_this.user.favorites.length);
            }
        });
    };
    ViewUserComponent = __decorate([
        core_1.Component({
            selector: 'app-view-user',
            template: __webpack_require__("./src/app/view-user/view-user.component.html"),
            styles: [__webpack_require__("./src/app/view-user/view-user.component.css")]
        }),
        __metadata("design:paramtypes", [user_service_1.UserService, router_1.ActivatedRoute])
    ], ViewUserComponent);
    return ViewUserComponent;
}());
exports.ViewUserComponent = ViewUserComponent;


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