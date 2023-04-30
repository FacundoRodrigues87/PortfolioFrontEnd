import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Experiencia } from '../model/experiencia';

@Injectable({
  providedIn: 'root'
})
export class SExperienciaService {

  expURL = 'http://localhost:8080/explaboral/';

  constructor(private HttpClient:HttpClient) { }

  public lista(): Observable<Experiencia[]>{
    return this.HttpClient.get<Experiencia[]>(this.expURL+'listexp')
  }

  public detail(id: number): Observable<Experiencia>{
    return this.HttpClient.get<Experiencia>(this.expURL+`detail/${id}`)
  }

  public save(experiencia:Experiencia): Observable<any>{
    return this.HttpClient.post<any>(this.expURL+'createexp', experiencia)
  }

  public update(id: number, experiencia:Experiencia): Observable<any>{
    return this.HttpClient.put<any>(this.expURL+`updateexp/${id}`, experiencia)
  }

  public delete(id: number): Observable<any>{
    return this.HttpClient.delete<any>(this.expURL+`delete/${id}`)
  }

  public editarEmpresa(id: number, nuevaEmpresa: string) {
    return this.HttpClient.put(
      `${this.expURL}editempresa/${id}?empresa=${nuevaEmpresa}`,
      {}
    );
  }

  public editarDescripcion(id: number, nuevaDescripcion: string) {
    return this.HttpClient.put(
      `${this.expURL}editdesc/${id}?descripcion=${nuevaDescripcion}`,
      {}
    );
  }
} 
