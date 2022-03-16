import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects-section',
  templateUrl: './projects-section.component.html',
  styleUrls: ['./projects-section.component.css']
})
export class ProjectsSectionComponent implements OnInit {
  
  private _p1:string;
  private _p2:string;
  private _p3:string;
  
  constructor() { 
    this._p1 = "Frozen fury"
    this._p2 = "Last nightfall"
    this._p3 = "Aplicaciones de móvil"

  }

  public get proyecto1(){
    return this._p1;
  }
  public set proyecto1(value:string){
    this._p1 = value;
  }

  public get proyecto2(){
    return this._p2;
  }
  public set proyecto2(value:string){
    this._p2 = value;
  }
  public get proyecto3(){
    return this._p3;
  }
  public set proyecto3(value:string){
    this._p3 = value;
  }
  ngOnInit(): void {
  }

}
