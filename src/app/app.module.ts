import { HttpClient, HttpClientModule } from '@angular/common/http';
import { UsersService } from './users.service';
import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { RegisteredUsersComponent } from './registered-users/registered-users.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing/app-routing.module';

const routes: Routes = [
  { path: 'usuarios', component: RegisteredUsersComponent },
  { path: 'usuarios/novo', component: UserRegistrationComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    RegisteredUsersComponent,
    UserRegistrationComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    AppRoutingModule

  ],
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
