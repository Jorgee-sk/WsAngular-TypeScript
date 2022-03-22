
// Clase que guarda los atributos de un Heroe
export class Usuario{

    private _username : string = "";
    private _password : string = "";

    //Se crean automáticamente los atributos nombre y universo como publicos
    constructor(usuario : string, password : string){
        this._username = usuario
        this._password = password
    }

    public get username() : string{
        return this._username;
    }

    public set username(username:string){
        this._username = username;
    }

    public get password() : string{
        return this._password;
    }

    public set password(password:string){
        this._password = password;
    }


}