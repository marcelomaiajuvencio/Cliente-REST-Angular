import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './registered-users/user';
import { pipe } from 'rxjs';
//import 'node_modules/rxjs/operator/toPromise';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  usersUrl = 'http://localhost:8080/users';

  constructor(private http: HttpClient) { }

  list(){
    return this.http.get<User[]>(this.usersUrl);
  }

  create(user: any) {
    return this.http.post(this.usersUrl, user);
  }




}
