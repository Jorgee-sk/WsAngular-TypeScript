import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login-error',
  templateUrl: './login-error.component.html',
  styleUrls: ['./login-error.component.css']
})
export class LoginErrorComponent implements OnInit {

  passwordError : string;
  userError : string;
  message : string = ""

  constructor(private router:Router, route:ActivatedRoute) {

   
    this.userError = route.snapshot.params["errorUser"]
    this.passwordError = route.snapshot.params["errorPass"]
    
   

    if(this.passwordError=="true" && this.userError=="false")
      this.message = "INVALID PASSWORD";
    else
      this.message = "USERNAME AND PASSWORD ARE INVALID";
  }

  public routingProgramatico(){
   
          this.router.navigate([ '/login'])
  }

  ngOnInit(): void {
  }

}
