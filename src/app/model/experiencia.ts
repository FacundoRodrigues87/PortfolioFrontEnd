
export class Experiencia {
    idExperiencialaboral?: number;
    empresa: string;
    descripcion: string;
    url_foto: string;
    idUsuario?: number;

    constructor(empresa: string, descripcion: string, url_foto: string){
        this.empresa = empresa;
        this.descripcion = descripcion;
        this.url_foto = url_foto;
    }

}
