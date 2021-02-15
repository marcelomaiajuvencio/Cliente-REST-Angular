import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//import 'node_modules/rxjs/operator/toPromise';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

 // usersUrl = 'http://localhost:8080/users';
  usersUrl = 'http://localhost:3000/cidades';

  //constructor(private http: Http) { }

  constructor(private http: HttpClient) { }

  allList(): Promise<any> {

   return this.http.get(this.usersUrl)
      .toPromise()
      .then(response => response)
  }


}
