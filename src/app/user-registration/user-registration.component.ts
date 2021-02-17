import { UsersService } from './../users.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent implements OnInit {

  constructor(private userService: UsersService) { }

  ngOnInit(): void {
  }

  adicionar(login: string, senha: string, nome: string, email: string, permmissao: string) {
    //alert(`${login}-${senha}-${nome}-${email}-${permmissao}`);
    this.userService.create({
      username: login,
      name: nome,
      email: email,
      password: senha,
      permissionLevel: permmissao
     }).subscribe(sucesso=>alert('Usuário cadastrado com sucesso!!'),
      erro=>console.error(erro),
      ()=>console.log('OK')

     );
  }

}
