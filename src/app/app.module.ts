import { HttpClient, HttpClientModule } from '@angular/common/http';
import { UsersService } from './users.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { RegisteredUsersComponent } from './registered-users/registered-users.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisteredUsersComponent,
    UserRegistrationComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule

  ],
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
