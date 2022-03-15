/*3)Crea una aplicacion que dado un número, calcule su factorial

Podeis hacer los tres ejercicios sobre el mismo fichero.ts

Crearos el fichero tsconfig.json y hacer que se compile automáticamente.

Compilarlo con la version es6 */
let n : number = 8

function factorial (n:number) {
	let total:number = 1; 
	
    for (let i:number=1; i<=n; i++) {
		total = total * i; 
	
    }
	
    return total; 
}

console.log(factorial(n));