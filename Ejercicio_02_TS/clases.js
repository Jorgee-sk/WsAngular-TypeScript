class Historial {
    constructor() {
        this._idHist = 0;
        this._nGoles = 0;
        this._nTarjetasA = 0;
        this._nTarjetasR = 0;
    }
    get idHist() {
        return this._idHist;
    }
    set idHist(value) {
        this._idHist = value;
    }
    get nGoles() {
        return this._nGoles;
    }
    set nGoles(value) {
        this._nGoles = value;
    }
    get nTarjetasA() {
        return this._nTarjetasA;
    }
    set nTarjetasA(value) {
        this._nTarjetasA = value;
    }
    get nTarjetasR() {
        return this._nTarjetasR;
    }
    set nTarjetasR(value) {
        this._nTarjetasR = value;
    }
    //Metodos historial
    marcarGol() {
        this._nGoles += 1;
    }
    marcarHatTrick() {
        this._nGoles += 3;
    }
    expulsarJugador() {
        this._nTarjetasR += 1;
    }
    amonestar() {
        this._nTarjetasA += 1;
    }
}
class Jugador {
    constructor() {
        this._idJugador = 0;
        this._nombreJugador = "";
        this._edad = 18;
        this._pais = "";
        this._historial = new Historial();
    }
    get idJugador() {
        return this._idJugador;
    }
    set idJugador(value) {
        this._idJugador = value;
    }
    get nombreJugador() {
        return this._nombreJugador;
    }
    set nombreJugador(value) {
        this._nombreJugador = value;
    }
    get edad() {
        return this._edad;
    }
    set edad(value) {
        this._edad = value;
    }
    get pais() {
        return this._pais;
    }
    set pais(value) {
        this._pais = value;
    }
    get historial() {
        return this._historial;
    }
    set historial(value) {
        this._historial = value;
    }
}
class Equipo {
    constructor() {
        this._id = 0;
        this._nombre = "";
        this._dFundacion = new Date();
        this._jugadores = [];
    }
    get id() {
        return this._id;
    }
    set id(value) {
        this._id = value;
    }
    get nombre() {
        return this._nombre;
    }
    set nombre(value) {
        this._nombre = value;
    }
    get dFundacion() {
        return this._dFundacion;
    }
    set dFundacion(value) {
        this._dFundacion = value;
    }
    get jugadores() {
        return this._jugadores;
    }
    set jugadores(value) {
        this._jugadores = value;
    }
    añadirJugador(value) {
        this._jugadores.push(value);
    }
    eliminarJugador() {
        this._jugadores.pop();
    }
}
let historialJ1 = new Historial();
historialJ1.idHist = 1;
historialJ1.nGoles = 3;
historialJ1.nTarjetasA = 5;
historialJ1.nTarjetasR = 1;
let jugador1 = new Jugador();
jugador1.idJugador = 1;
jugador1.edad = 18;
jugador1.nombreJugador = "Juan";
jugador1.pais = "Indonesia";
jugador1.historial = historialJ1;
let historialJ2 = new Historial();
historialJ2.idHist = 2;
historialJ2.nGoles = 24;
historialJ2.nTarjetasA = 3;
historialJ2.nTarjetasR = 4;
let jugador2 = new Jugador();
jugador2.idJugador = 2;
jugador2.edad = 27;
jugador2.nombreJugador = "Serresiete";
jugador2.pais = "Portugal";
jugador2.historial = historialJ2;
let equipo1 = new Equipo();
equipo1.id = 1;
equipo1.nombre = "Rayo murciano";
equipo1.dFundacion = new Date("16/03/2022");
equipo1.jugadores[0] = jugador1;
equipo1.jugadores[1] = jugador2;
console.log("Equipo 1");
console.log("Id: " + equipo1.id);
console.log("Nombre: " + equipo1.nombre);
console.log("Fecha de fundación: " + equipo1.dFundacion);
console.log("Jugadores del Equipo 1");
console.log("=====================");
console.log(equipo1.jugadores);
