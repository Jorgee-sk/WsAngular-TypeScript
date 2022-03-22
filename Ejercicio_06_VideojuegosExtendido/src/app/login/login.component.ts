import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../entidades/usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username : string = '';
  password : string = '';
  errorUser : boolean = false;
  errorPass : boolean = false;
  listaUser : Usuario[] = []
  us1 : Usuario 
  us2 : Usuario 
  us3 : Usuario 


  //Para hacer routas programáticas debemos de usar el objeto "router"
  //Le pedimos a Angular que nos lo inyecte cuando cree este componente
  constructor(private router:Router) {
      this.us1 = new Usuario("Usuario","superSecreta");
      this.us2 = new Usuario("Usuario2","fechademicumple1234");
      this.us3 = new Usuario("xX_Usuario3_Xx","1234");

      this.listaUser.push(this.us1)
      this.listaUser.push(this.us2)
      this.listaUser.push(this.us3)
  }

  
  public routingProgramatico(){
    var userEncontrado = false;
    var passwordEncontrada = false;
    
    console.log(this.listaUser)
    console.log(this.username)
    console.log(this.password)

    for(let i=0;i<this.listaUser.length;i++){
      if(this.username == this.listaUser[i].username && !userEncontrado){
        userEncontrado = true;
        if(this.password == this.listaUser[i].password && !passwordEncontrada){
          passwordEncontrada = true;
          this.router.navigate([ '/bienvenida', this.listaUser[i].username])
        }
      }
    }


    if(userEncontrado==false && passwordEncontrada==false){
   
      this.errorPass = true;
      this.errorUser = true;

      this.router.navigate([ '/loginError', this.errorUser,  this.errorPass])

    }else if(passwordEncontrada==false && userEncontrado==true){

      this.errorPass = true;
      this.errorUser = false;
      this.router.navigate([ '/loginError',  this.errorUser, this.errorPass])

    }
    
  }

  ngOnInit(): void {
    
  }

}
