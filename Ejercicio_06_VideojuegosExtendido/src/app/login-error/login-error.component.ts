import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login-error',
  templateUrl: './login-error.component.html',
  styleUrls: ['./login-error.component.css']
})
export class LoginErrorComponent implements OnInit {

  passwordError : boolean = true;
  userError : boolean = true
  message : string = ""

  constructor(private router:Router, route:ActivatedRoute) {

   
    this.userError = route.snapshot.params["errorUser"]
    this.passwordError = route.snapshot.params["errorPass"]
    
    console.log(route.snapshot.params["errorUser"])
    console.log(route.snapshot.params["errorPass"])
    console.log(this.userError)
    console.log(this.passwordError)

    if(route.snapshot.params["errorPass"] && route.snapshot.params["errorUser"]){
      this.message = "USERNAME AND PASSWORD INVALIDS"
    }
    else {
      this.message = "INVALID PASSWORD"
    }

  }

  public routingProgramatico(){
   
          this.router.navigate([ '/login'])
   
    
  }
  ngOnInit(): void {
  }

}
