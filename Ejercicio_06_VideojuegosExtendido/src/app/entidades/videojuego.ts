export class Videojuego{

    private _id : number = 0;

    constructor(public id : number ,public titulo : string, public company : string, public vMedia : number, public ruta : string){
        this._id = id;
        this.titulo = titulo;
        this.company = company;
        this.vMedia = vMedia;
        this.ruta = ruta;
    }


    public toString() : string {
        return `ID: ${this._id}, Título: ${this.titulo}, Compañía: ${this.company}, Valoracion media: ${this.vMedia}`
    }
}