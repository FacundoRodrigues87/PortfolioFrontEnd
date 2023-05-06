import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Educacion } from '../model/educacion';
import { Proyecto } from '../model/Proyecto';

@Injectable({
  providedIn: 'root'
})
export class SProyectosService {

  proURL = 'https://backend-portfolio-9sgt.onrender.com/proyectos/';

  constructor(private HttpClient:HttpClient) { }

  public lista(): Observable<Proyecto[]>{
    return this.HttpClient.get<Proyecto[]>(this.proURL+'list')
  }

  public detail(id: number): Observable<Proyecto>{
    return this.HttpClient.get<Proyecto>(this.proURL+`detail/${id}`)
  }

  public save(proyecto:Proyecto): Observable<any>{
    return this.HttpClient.post<any>(this.proURL+'create', proyecto)
  }

  public update(id: number, proyecto:Proyecto): Observable<any>{
    return this.HttpClient.put<any>(this.proURL+`update/${id}`, proyecto)
  }

  public delete(id: number): Observable<any>{
    return this.HttpClient.delete<any>(this.proURL+`delete/${id}`)
  }

  public editarTitle(id: number, nuevoInstituto: string) {
    return this.HttpClient.put(
      `${this.proURL}edittitle/${id}?title=${nuevoInstituto}`,
      {}
    );
  }

  public editarDesc(id: number, nuevaDescripcion: string) {
    return this.HttpClient.put(
      `${this.proURL}editdesc/${id}?descripcion=${nuevaDescripcion}`,
      {}
    );
  }
}
