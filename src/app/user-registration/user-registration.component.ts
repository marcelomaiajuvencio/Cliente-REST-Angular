/* import { User } from './../registered-users/user'; */
import { UsersService } from './../users.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormsModule }   from '@angular/forms';

class User {
  username: string | undefined ;
  name: string | undefined;
  email: string | undefined;
  password: string | undefined;
  permissionLevel: string = '';
}


@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent implements OnInit {

  user = new User();

  constructor(private userService: UsersService) { }

  ngOnInit(): void {
  }

  add(form: NgForm) {
    this.userService
    .create(this.user).subscribe(sucesso=>alert('Usuário cadastrado com sucesso!!'),
      erro=>console.error(erro),
      ()=>console.log('OK'));

     form.reset({permissionLevel: ''});

  }

}
