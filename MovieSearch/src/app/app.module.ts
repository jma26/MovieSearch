import { BrowserModule } from '@angular/platform-browser';
import { NgModule, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule, FormsModule } from '@angular/forms';

// Services
import { ApiService } from './services/api.service';
import { LoginService } from './services/login.service';
import { RegisterService } from './services/register.service';
import { UserService } from './services/user.service';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { CommunityComponent } from './community/community.component';
import { ViewUserComponent } from './view-user/view-user.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';


const appRoutes: Routes = [
  { path: '', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'home/:alias', component: HomeComponent },
  { path: 'profile/:alias', component: ProfileComponent },
  { path: 'community/:alias', component: CommunityComponent },
  { path: 'community/:alias/:user', component: ViewUserComponent }
]


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProfileComponent,
    CommunityComponent,
    ViewUserComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ApiService, RegisterService, LoginService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
