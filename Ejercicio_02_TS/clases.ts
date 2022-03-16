class Historial{
    
    private _idHist: number;
    private _nGoles: number;
    private _nTarjetasA: number;
    private _nTarjetasR: number;

    constructor(){
        this._idHist = 0
        this._nGoles = 0
        this._nTarjetasA = 0
        this._nTarjetasR = 0
    }

    public get idHist(): number {
        return this._idHist;
    }
    public set idHist(value: number) {
        this._idHist = value;
    }
    public get nGoles(): number {
        return this._nGoles;
    }
    public set nGoles(value: number) {
        this._nGoles = value;
    }
    public get nTarjetasA(): number {
        return this._nTarjetasA;
    }
    public set nTarjetasA(value: number) {
        this._nTarjetasA = value;
    }
    public get nTarjetasR(): number {
        return this._nTarjetasR;
    }
    public set nTarjetasR(value: number) {
        this._nTarjetasR = value;
    }

    //Metodos historial
    public marcarGol(){
        this._nGoles += 1;
    }

    public marcarHatTrick(){
        this._nGoles += 3;
    }

    public expulsarJugador(){
        this._nTarjetasR += 1;
    }

    public amonestar(){
        this._nTarjetasA += 1;
    }

}

class Jugador{
    
    private _idJugador: number;
    private _nombreJugador: string;
    private _edad: number;
    private _pais: string;
    private _historial: Historial;

    constructor(){
        this._idJugador = 0
        this._nombreJugador = ""
        this._edad = 18
        this._pais = ""
        this._historial = new Historial();
    }

    public get idJugador(): number {
        return this._idJugador;
    }
    public set idJugador(value: number) {
        this._idJugador = value;
    }
    public get nombreJugador(): string {
        return this._nombreJugador;
    }
    public set nombreJugador(value: string) {
        this._nombreJugador = value;
    }
    public get edad(): number {
        return this._edad;
    }
    public set edad(value: number) {
        this._edad = value;
    }
    public get pais(): string {
        return this._pais;
    }
    public set pais(value: string) {
        this._pais = value;
    }

    public get historial(){
        return this._historial;
    }
    public set historial(value: Historial){
        this._historial = value;
    }
    
}

class Equipo {
    
    private _id: number;
    private _nombre: string;
    private _dFundacion: Date;
    private _jugadores: Jugador[];

    constructor(){
        this._id = 0
        this._nombre = ""
        this._dFundacion = new Date();
        this._jugadores = []
    }

    public get id(): number {
        return this._id;
    }
    public set id(value: number) {
        this._id = value;
    }
    public get nombre(): string {
        return this._nombre;
    }
    public set nombre(value: string) {
        this._nombre = value;
    }
    public get dFundacion(): Date {
        return this._dFundacion;
    }
    public set dFundacion(value: Date) {
        this._dFundacion = value;
    }

    public get jugadores(): Jugador[] {
        return this._jugadores;
    }
    public set jugadores(value: Jugador[]) {
        this._jugadores = value;
    }

    public añadirJugador(value: Jugador){
        this._jugadores.push(value)
    }

    public eliminarJugador(){
        this._jugadores.pop();
    }

}

let historialJ1: Historial = new Historial()
    historialJ1.idHist = 1
    historialJ1.nGoles = 3
    historialJ1.nTarjetasA = 5
    historialJ1.nTarjetasR = 1

let jugador1: Jugador = new Jugador()
    jugador1.idJugador = 1
    jugador1.edad = 18
    jugador1.nombreJugador = "Juan"
    jugador1.pais = "Indonesia"
    jugador1.historial = historialJ1;

let equipo1: Equipo = new Equipo()
    equipo1.id = 1;
    equipo1.nombre = "Rayo murciano";
    equipo1.dFundacion = new Date("16-03-2022");
    equipo1.jugadores[0] = jugador1;




    


