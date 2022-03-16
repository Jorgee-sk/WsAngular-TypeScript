import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-me-section',
  templateUrl: './about-me-section.component.html',
  styleUrls: ['./about-me-section.component.css']
})
export class AboutMeSectionComponent implements OnInit {

  private _aboutMe:string;
  
  constructor() {
    this._aboutMe = "Sobre mí"
  }

  public get aboutMe(){
    return this._aboutMe;
  }
  public set aboutMe(value:string){
    this._aboutMe = value;
  }

  ngOnInit(): void {
  }

}
