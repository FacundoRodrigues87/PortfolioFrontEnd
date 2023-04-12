export class usuario {
    id_usuario?: number;
    nombre: string;
    apellido: string;
    acercade: string;
    url_foto: string;

    constructor(nombre: string, apellido: string, acercade: string, url_foto: string) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.acercade = acercade;
        this.url_foto = url_foto;
    }
}
