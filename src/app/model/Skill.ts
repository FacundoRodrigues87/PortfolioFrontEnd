import { usuario } from "./Usuario.model";

export class Skill {
  idSkill? :number;
  name:string;
  amount:number;
  idUsuario?:usuario

  constructor(name:string, amount:number, idUsuario:usuario){
    this.name = name;
    this.amount = amount;
    this.idUsuario = idUsuario;
  }
}
