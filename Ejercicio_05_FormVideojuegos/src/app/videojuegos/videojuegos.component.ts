import { Component, OnInit } from '@angular/core';
import { Videojuego } from '../entidades/videojuego';

@Component({
  selector: 'app-videojuegos',
  templateUrl: './videojuegos.component.html',
  styleUrls: ['./videojuegos.component.css']
})
export class VideojuegosComponent implements OnInit {

  listaVideojuegos: Videojuego[] = []
  videojuego: Videojuego | null = null


  id: number = 0
  titulo: string = ""
  company: string = ""
  vMedia: number = 0;

  //buttonsss
  insertarDeshabilitado = false
  modificarBorrarDeshabilitado = true
  //Para saber si hemos rellenado o no el input
  tituloObligatorioOculto = true
  companyObligatoriaOculta = true
  vMediaObligatoriaOculta = true



  constructor() {
    let videojuego: Videojuego = new Videojuego("League of legends", "Riot Games", 7.7)
    this.listaVideojuegos.push(videojuego);
    videojuego = new Videojuego("Valorant", "Riot Games", 9.0)
    this.listaVideojuegos.push(videojuego)
  }


  public insertar() {
    if (!this.isError()) {

      this.videojuego = new Videojuego(this.titulo, this.company, this.vMedia)
      this.listaVideojuegos.push(this.videojuego)

    }
  }


  public isError(): boolean {
    let error: boolean = false
    this.tituloObligatorioOculto = true
    this.companyObligatoriaOculta = true
    this.vMediaObligatoriaOculta = true

    if (this.titulo.trim().length == 0) {
      this.tituloObligatorioOculto = false
      error = true
    }

    if (this.company.trim().length == 0) {
      this.companyObligatoriaOculta = false
      error = true
    }

    if (this.vMedia == null) {
      this.vMediaObligatoriaOculta = false
      error = true
    }

    return error
  }


  public modificar() {
    if (!this.isError()) {
      for (let i = 0; i < this.listaVideojuegos.length; i++) {

        let aux: Videojuego = this.listaVideojuegos[i]

        if (aux.id == this.id) {

          this.listaVideojuegos[i].titulo = this.titulo;
          this.listaVideojuegos[i].company = this.company;
          this.listaVideojuegos[i].vMedia = this.vMedia;

          break;
        }
      }

      this.reset()
    }
  }


  public borrar() {
    for (let i = 0; i < this.listaVideojuegos.length; i++) {
      if (this.listaVideojuegos[i].id == this.id) {

        this.listaVideojuegos.splice(i, 1)
        break;

      }
    }
    this.reset()
  }


  public reset() {

    this.id = 0;
    this.titulo = "";
    this.company = "";
    this.vMedia = 0;

    this.insertarDeshabilitado = false
    this.modificarBorrarDeshabilitado = true

    this.hideError()
  }

  public seleccionar(videojuego: Videojuego): void {

    this.hideError()

    this.id = videojuego.id
    this.titulo = videojuego.titulo
    this.company = videojuego.company
    this.vMedia = videojuego.vMedia

    this.insertarDeshabilitado = true
    this.modificarBorrarDeshabilitado = false

  }

  public hideError() {
    this.tituloObligatorioOculto = true
    this.companyObligatoriaOculta = true
    this.vMediaObligatoriaOculta = true
  }

  ngOnInit() {

  }

}
