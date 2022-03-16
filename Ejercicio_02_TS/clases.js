class Equipo {
    constructor() {
        this._id = 0;
        this._nombre = "";
        this._dFundacion = "";
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
}
class Jugador extends Equipo {
    constructor() {
        super();
        this._idJugador = 0;
        this._nombreJugador = "";
        this._edad = 18;
        this._pais = "";
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
}
class Historial extends Jugador {
    constructor() {
        super();
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
