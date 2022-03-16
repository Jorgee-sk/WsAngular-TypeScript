import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-section',
  templateUrl: './profile-section.component.html',
  styleUrls: ['./profile-section.component.css']
})
export class ProfileSectionComponent implements OnInit {
  
  private _name:string;
  private _profesion:string;
  private _grado:string;

  constructor() { 
    this._name = "Jorge Galiano García"
    this._profesion = "Estudiante"
    this._grado = "diseño y desarrollo de videojuegos"
  }

  public get name(){
    return this._name;
  }

  public set name(value:string){
    this._name = value;
  }

  public get profesion(){
    return this._profesion;
  }

  public set profesion(value:string){
    this._profesion = value;
  }

  public get grado(){
    return this._grado;
  }

  public set grado(value:string){
    this._grado = value;
  }

  ngOnInit(): void {
  }

}
