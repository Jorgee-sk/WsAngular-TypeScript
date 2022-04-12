import { Component, OnInit } from '@angular/core';
import { Videojuego } from '../modelo/entidades/videojuego';
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
  ruta : string = "";
  user : string = "";

  constructor(route:ActivatedRoute,private router:Router) {

    this.user = route.snapshot.params["user"];
    this.id =  route.snapshot.params["id"];
    this.titulo =  route.snapshot.params["titulo"];
    this.company =  route.snapshot.params["company"];
    this.vMedia =  route.snapshot.params["vMedia"];
    this.ruta =  route.snapshot.params["ruta"];
  }

  public routingProgramatico(){
  
          this.router.navigate([ '/bienvenida', this.user])
    
  }

  ngOnInit() {

  }

}
