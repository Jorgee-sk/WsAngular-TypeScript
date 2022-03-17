import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator-component',
  templateUrl: './calculator-component.component.html',
  styleUrls: ['./calculator-component.component.css']
})
export class CalculatorComponentComponent implements OnInit {
  
  //Los valores que vamos a recoger como si fuese formulario 
  pValor : string = "";
  sValor : string = "";
  //Resultado
  private _resultado:number;


  constructor() { 

    this._resultado = 0;

  }

  public get resultado(){
      return this._resultado;
  }
  public set resultado(value:number){
      this._resultado = value;
  }
  ngOnInit(): void {
  }

    public sumar(){
        let num1 = parseInt(this.pValor);
        let num2 = parseInt(this.sValor);
        this._resultado = num1 + num2;

    }

    public resta(){
        let num1 = parseInt(this.pValor);
        let num2 = parseInt(this.sValor);
        this._resultado = num1 - num2;
    }

    public multiplicar(){
        let num1 = parseInt(this.pValor);
        let num2 = parseInt(this.sValor);
        this._resultado = num1 * num2;
    }

    public division(){
        let num1 = parseInt(this.pValor);
        let num2 = parseInt(this.sValor);
        this._resultado = num1/num2;
    }   

}
