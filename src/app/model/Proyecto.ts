import { usuario } from "./Usuario.model";

export class Proyecto {
    idProyecto?: number;
    title: string;
    descripcion: string;
    urlProyecto: string;
    urlImagen: string;
    idUsuario?: usuario;

    constructor(title: string, descripcion: string, urlProyecto: string, urlImagen:string, idUsuario: usuario) {
        this.title = title;
        this.descripcion = descripcion;
        this.urlProyecto = urlProyecto;
        this.urlImagen = urlImagen;
        this.idUsuario = idUsuario;
    }

}
