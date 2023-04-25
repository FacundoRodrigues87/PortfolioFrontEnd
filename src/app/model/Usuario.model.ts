import { Experiencia } from "./experiencia";

export class usuario {
  idUsuario?: number;
  nombre: string;
  apellido: string;
  acercade: string;
  url_foto: string;
  experiencias: Experiencia[];

  constructor(
    nombre: string,
    apellido: string,
    acercade: string,
    url_foto: string,
    experiencias: Experiencia[]
  ) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.acercade = acercade;
    this.url_foto = url_foto;
    this.experiencias = experiencias;
  }
}
