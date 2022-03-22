import { Component, OnInit } from '@angular/core';
import { Videojuego } from '../entidades/videojuego';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-videojuegos-especificos',
  templateUrl: './videojuegos-especificos.component.html',
  styleUrls: ['./videojuegos-especificos.component.css']
})
export class VideojuegosEspecificosComponent implements OnInit {

  id: number = 0
  titulo: string = ""
  company: string = ""
  vMedia: number = 0;

  constructor(route:ActivatedRoute) {

    this.id =  route.snapshot.params["id"];
    this.titulo =  route.snapshot.params["titulo"];
    this.company =  route.snapshot.params["company"];
    this.vMedia =  route.snapshot.params["vMedia"];

  }

  ngOnInit() {

  }

}
