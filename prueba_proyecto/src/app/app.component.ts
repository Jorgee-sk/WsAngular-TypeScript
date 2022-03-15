import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //Definiremos atributos en este documento que podrán ser accedidos por su nombre 
  // dentro del html serán accedidos con {{atributo}}
  title = 'prueba_proyecto';

  nombre : string = 'nombre de ejemplo';
  edad : number = 5;

}
