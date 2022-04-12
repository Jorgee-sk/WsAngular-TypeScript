import { Videojuego } from "../entidades/videojuego" 

export class DaoVideojuego {

    private static listaVideojuegos: Videojuego[] = []

    static {
        this.listaVideojuegos.push(new Videojuego(1,"League of legends","Riot Games",6.8,"/assets/lol.webp"))
        this.listaVideojuegos.push(new Videojuego(2,"Valorant","Nintendo",8,"/assets/valorant.png"))
     
    }

    public getById(id: number): Videojuego | undefined {
        let u: Videojuego;
        for(u of DaoVideojuego.listaVideojuegos) {
            if(u.id === id){
                return u;
            }
        }
        return undefined;
    }

    public getAllVideojuegos(): Videojuego [] | undefined {
        return DaoVideojuego.listaVideojuegos
    }
}