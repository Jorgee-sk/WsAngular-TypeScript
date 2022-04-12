import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GestorUsuario } from '../modelo/negocio/GestorUser';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  username: string = ""
  password: string = ""
  pCheck: string = ""

  gestorUser: GestorUsuario = new GestorUsuario()

  constructor(private router:Router) { }

  register(){
    if(this.gestorUser.registrar(this.username, this.password, this.pCheck) == 0){
      this.router.navigate([ '/register'])
    }else if(this.gestorUser.registrar(this.username, this.password, this.pCheck) == 1){
      this.router.navigate([ '/register'])
    }else{
      this.router.navigate([ '/login'])
    }
  }



  ngOnInit(): void {
  }

}
