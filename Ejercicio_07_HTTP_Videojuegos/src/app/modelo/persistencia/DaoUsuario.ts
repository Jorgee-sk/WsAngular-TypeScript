import { Usuario } from "../entidades/usuario"

export class DaoUsuario {

    private static listaUsuarios: Usuario[] = [] 

    static {
        this.listaUsuarios.push(new Usuario("usuario","1234"))
    }

    
    public getByUser(username: String): Usuario | undefined{
        let u: Usuario;
        for(u of DaoUsuario.listaUsuarios) {
            if(u.username === username){
                console.log("coincide")
                return u;
            }
        }
        return undefined;
    }

   
    public getById(id: number): Usuario | undefined {
        let u: Usuario;
        for(u of DaoUsuario.listaUsuarios) {
            if(u.id === id){
                return u;
            }
        }
        return undefined;
    }

    
    public anadirUsuario(usuario: Usuario) {
        DaoUsuario.listaUsuarios.push(usuario)
    }
}