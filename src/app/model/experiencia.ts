import { usuario } from "./Usuario.model";

export class Experiencia {
    idExperiencialaboral?: number;
    empresa: string;
    descripcion: string;
    url_foto: string;
    idUsuario?: usuario;

    constructor(empresa: string, descripcion: string, url_foto: string, idUsuario: usuario) {
        this.empresa = empresa;
        this.descripcion = descripcion;
        this.url_foto = url_foto;
        this.idUsuario = idUsuario;
    }

}
