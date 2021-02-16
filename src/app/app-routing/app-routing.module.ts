import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { RegisteredUsersComponent } from '../registered-users/registered-users.component';
import { UserRegistrationComponent } from '../user-registration/user-registration.component';

const routes: Routes = [
  /* { path: '', component: RegisteredUsersComponent }, */
  { path: 'usuarios', component: RegisteredUsersComponent },
  { path: 'usuarios/novo', component: UserRegistrationComponent }
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
