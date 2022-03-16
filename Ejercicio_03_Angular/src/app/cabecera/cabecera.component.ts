import { Component, OnInit } from '@angular/core';

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

  constructor() {
    this._logoHeader = "Currículum";
    this._firstSection = "Sobre mí";
    this._secondSection = "Mis proyectos";
    this._thirdSection = "Contacto";
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
