import { Component, OnInit } from '@angular/core';
import { Videojuego } from '../entidades/videojuego';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bienvenida',
  templateUrl: './bienvenida.component.html',
  styleUrls: ['./bienvenida.component.css']
})
export class BienvenidaComponent implements OnInit {

  listaVideojuegos: Videojuego[] = []
  videojuego: Videojuego | null = null
  user : string = ""
  message : string = ""


  id: number = 0
  titulo: string = ""
  company: string = ""
  vMedia: number = 0;
  ruta = ""

  constructor(route:ActivatedRoute, private router:Router) {

    let videojuego: Videojuego = new Videojuego(1,"League of legends", "Riot Games", 7.7,"assets/lol.webp")
    this.listaVideojuegos.push(videojuego);

    videojuego = new Videojuego(2,"Valorant", "Riot Games", 9.0,"assets/valorant.png")
    this.listaVideojuegos.push(videojuego)

    this.user = route.snapshot.params["username"]

    this.message = "Login succesfully!"

    if(this.user == null)
      this.message = "Login needed for access to videogames"

  }

  public seleccionar(videojuego: Videojuego): void {

    this.id = videojuego.id
    this.titulo = videojuego.titulo
    this.company = videojuego.company
    this.vMedia = videojuego.vMedia
    this.ruta = videojuego.ruta
    this.router.navigate([ '/listaVideojuegos', this.user, this.id , this.titulo, this.company, this.vMedia, this.ruta])
    
  }

  ngOnInit() {

  }
}
