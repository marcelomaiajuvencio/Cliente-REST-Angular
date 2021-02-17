import { HttpClient, HttpClientModule } from '@angular/common/http';
import { UsersService } from './users.service';
import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { RegisteredUsersComponent } from './registered-users/registered-users.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisteredUsersComponent,
    UserRegistrationComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule

  ],
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
