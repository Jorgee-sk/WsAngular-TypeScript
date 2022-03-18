export class Videojuego{

    private _id : number = 0;
    private static _contadorID : number = 1;

    constructor(public titulo : string, public company : string, public vMedia : number){
        this._id = Videojuego._contadorID++;
        this.titulo = titulo;
        this.company = company;
        this.vMedia = vMedia;
    }

    public get id() : number{
        return this._id;
    }

    public toString() : string {
        return `ID: ${this._id}, Título: ${this.titulo}, Compañía: ${this.company}, Valoracion media: ${this.vMedia}`
    }
}