import { Usuario } from "../entidades/usuario";
import { DaoUsuario } from "../persistencia/DaoUsuario";

export class GestorUsuario {

    private du: DaoUsuario = new DaoUsuario();

    public registrar(username: string, password: string, pCheck: string): number {
            if(!username ||  !password  || !pCheck){
                return 0
            }
            else if(!(password == pCheck)){
                return 1;
            } else {
                this.du.anadirUsuario(new Usuario(username,password))
                return 2;
            }
    }

    public login (username:string, password: string): number{    
        if(!username ||  !password){
            return 0
        }else if(!this.du.getByUser(username) || this.du.getByUser(username)?.password !== password){
            return 1
        }else {
            return 2
        }
    }

    /**
    *@param id del Usuario
    *@return usuario si lo encuentra undefined si no lo encuentra
    */
    public getById(id: number): Usuario | undefined {
        return this.du.getById(id)
    }

    /**
    *@param username del Usuario
    * @return el usuario, en caso contrario devuelve null
    */
    public getByUser(username: string): Usuario | undefined {
        return this.du.getByUser(username)
    }
}