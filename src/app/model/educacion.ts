import { usuario } from "./Usuario.model";

export class Educacion {
    idEducacion?: number;
    instituto: string;
    descripcion: string;
    url_foto: string;
    idUsuario?: usuario;

    constructor(instituto: string, descripcion: string, url_foto: string, idUsuario: usuario) {
        this.instituto = instituto;
        this.descripcion = descripcion;
        this.url_foto = url_foto;
        this.idUsuario = idUsuario;
    }

}
