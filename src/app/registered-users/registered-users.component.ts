import { UsersService } from './../users.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-registered-users',
  templateUrl: './registered-users.component.html',
  styleUrls: ['./registered-users.component.css']
})
export class RegisteredUsersComponent implements OnInit {

  users = [];

  constructor(private usersService: UsersService) { }



  ngOnInit() {
    //this.pesquisar();
    this.usersService.allList()
      .then(users => this.users = users);
  }

  pesquisar() {
    this.usersService.allList()
      .then(users => this.users = users);
  }



}
