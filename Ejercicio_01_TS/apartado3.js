/*3)Crea una aplicacion que dado un número, calcule su factorial

Podeis hacer los tres ejercicios sobre el mismo fichero.ts

Crearos el fichero tsconfig.json y hacer que se compile automáticamente.

Compilarlo con la version es6 */
let n = 8;
function factorial(n) {
    let total = 1;
    for (let i = 1; i <= n; i++) {
        total = total * i;
    }
    return total;
}
console.log(factorial(n));
