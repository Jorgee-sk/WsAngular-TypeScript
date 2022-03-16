import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  private _contact:string;
  private _name:string;
  private _email:string;
  private _message:string;

  constructor() { 
    this._contact = "Contáctame";
    this._name = "Nombre completo";
    this._email = "Tu email";
    this._message = "Mensaje";
  }

  public get contact(){
    return this._contact;
  }

  public set contact(value:string){
    this._contact = value;
  }

  public get name(){
    return this._name;
  }

  public set name(value:string){
    this._name = value;
  }

  public get email(){
    return this._email;
  }

  public set email(value:string){
    this._email = value;
  }

  public get message(){
    return this._message;
  }

  public set message(value:string){
    this._message = value;
  }



  ngOnInit(): void {
  }

}
