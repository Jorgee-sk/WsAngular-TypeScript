import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../modelo/entidades/usuario';
import { GestorUsuario } from '../modelo/negocio/GestorUser';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username : string = '';
  password : string = '';
  gestorUser: GestorUsuario = new GestorUsuario()

  //Para hacer routas programáticas debemos de usar el objeto "router"
  //Le pedimos a Angular que nos lo inyecte cuando cree este componente
  constructor(private router:Router) {
      
  }

  async login(){
    if(this.username == "" || this.password == ""){
      this.router.navigate([ '/loginError'])
    }else {
      await fetch(`http://localhost:8080/Ejercicio_02_WebLogin/usuarios/login?usuario=${this.username}&password=${this.password}`,{mode: 'cors'})
      .then(v => v.json())
      .then(v => {  
        if(JSON.parse(v.validado)){
          this.router.navigate(["/bienvenida",this.username])
        }else {
          this.router.navigate(['/loginError'])
        }
      });
    }
  }
  registro(){
    this.router.navigate([ '/register'])
  }
  ngOnInit(): void {
    
  }

}
