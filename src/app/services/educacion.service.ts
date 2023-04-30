import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Educacion } from '../model/educacion';

@Injectable({
  providedIn: 'root'
})
export class SEducacionService {

  expURL = 'http://localhost:8080/educacion/';

  constructor(private HttpClient:HttpClient) { }

  public lista(): Observable<Educacion[]>{
    return this.HttpClient.get<Educacion[]>(this.expURL+'list')
  }

  public detail(id: number): Observable<Educacion>{
    return this.HttpClient.get<Educacion>(this.expURL+`detail/${id}`)
  }

  public save(educacion:Educacion): Observable<any>{
    return this.HttpClient.post<any>(this.expURL+'create', educacion)
  }

  public update(id: number, educacion:Educacion): Observable<any>{
    return this.HttpClient.put<any>(this.expURL+`updateexp/${id}`, educacion)
  }

  public delete(id: number): Observable<any>{
    return this.HttpClient.delete<any>(this.expURL+`delete/${id}`)
  }

  public editarInstituto(id: number, nuevoInstituto: string) {
    return this.HttpClient.put(
      `${this.expURL}editinstituto/${id}?instituto=${nuevoInstituto}`,
      {}
    );
  }

  public editarDesc(id: number, nuevaDescripcion: string) {
    return this.HttpClient.put(
      `${this.expURL}editdesc/${id}?descripcion=${nuevaDescripcion}`,
      {}
    );
  }
}
