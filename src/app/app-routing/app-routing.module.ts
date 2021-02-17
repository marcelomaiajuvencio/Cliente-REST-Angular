import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { RegisteredUsersComponent } from '../registered-users/registered-users.component';
import { UserRegistrationComponent } from '../user-registration/user-registration.component';
import { HomeComponent } from '../home/home.component';

const routes: Routes = [
  /* { path: '', component: RegisteredUsersComponent }, */
  { path: 'home', component: HomeComponent },
  { path: 'usuarios', component: RegisteredUsersComponent },
  { path: 'usuarios/novo', component: UserRegistrationComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }

];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
]
})
export class AppRoutingModule { }
