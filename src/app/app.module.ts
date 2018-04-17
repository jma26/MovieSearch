import { BrowserModule } from '@angular/platform-browser';
import { NgModule, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule, FormsModule } from '@angular/forms';

// Services
import { ApiService } from './services/api.service';
import { LoginService } from './services/login.service';
import { RegisterService } from './services/register.service';


import { AppComponent } from './app.component';
import { LoginRegistrationComponent } from './login-registration/login-registration.component';
import { HomeComponent } from './home/home.component';


const appRoutes: Routes = [
  { path: '', component: LoginRegistrationComponent },
  { path: 'home', component: HomeComponent }
]


@NgModule({
  declarations: [
    AppComponent,
    LoginRegistrationComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ApiService, RegisterService, LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
