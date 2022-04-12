import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css']
})
export class CabeceraComponent implements OnInit {
  
  private _logoHeader: string;
  private _firstSection: string;
  private _secondSection: string;
  private _thirdSection: string;

  user : string = ""

  constructor(route:ActivatedRoute) {
    this._logoHeader = "Login";
    this._firstSection = "Bienvenida";
    this._secondSection = "Sobre mí";
    this._thirdSection = "Contacto";

    this.user = route.snapshot.params["username"]
    console.log(this.user)
    
   }

  public get logoHeader(){
    return this._logoHeader;
  }
  public set logoHeader(value:string){
    this._logoHeader = value;
  }
   public get firstSection(){
    return this._firstSection;
  }
  public set firstSection(value:string){
     this._firstSection = value;
  }
  public get secondSection(){
    return this._secondSection;
  }
  public set secondSection(value:string){
     this._secondSection = value;
  }
  public get thirdSection(){
    return this._thirdSection;
  }
  public set thirdSection(value:string){
     this._thirdSection = value;
  }

  ngOnInit(): void {
  }

}
