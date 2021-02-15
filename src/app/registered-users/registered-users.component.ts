import { UsersService } from './../users.service';
import { Component, OnInit } from '@angular/core';
import { User } from './user';


@Component({
  selector: 'app-registered-users',
  templateUrl: './registered-users.component.html',
  styleUrls: ['./registered-users.component.css']
})
export class RegisteredUsersComponent implements OnInit {

  users: User[] | undefined;

  constructor(private usersService: UsersService) { }



  ngOnInit() {
    this.usersService.list().subscribe(dados => this.users = dados);
  }

}
