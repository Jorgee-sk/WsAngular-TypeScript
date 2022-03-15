/* 1)Un alumno desea saber cual sera su calificacion final en la materia de
JS. Dicha calificacion se compone de los siguientes porcentajes:
    * 55% del promedio de sus tres calificaciones parciales.
    * 30% de la calificacion del examen final.
    * 15% de la calificacion de un trabajo final. */
let notasParciales = [5, 3, 9];
let notaFinal = 7;
let tFinal = 6.7;
let nFinal;
function cNotaFinal(a, b, c) {
    let notaP = 0;
    let notaEF = notaFinal * 0.3;
    let notaTF = notaFinal * 0.15;
    for (let n = 0; n < notasParciales.length; n++) {
        notaP += notasParciales[n];
        if (n == notasParciales.length - 1) {
            notaP = notaP / 3;
            notaP = notaP * 0.55;
        }
    }
    nFinal = notaP + notaEF + notaTF;
}
cNotaFinal(notasParciales, notaFinal, tFinal);
console.log(nFinal);
