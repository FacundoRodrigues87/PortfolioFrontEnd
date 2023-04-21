import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { usuario } from '../model/Usuario.model';



@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  URL = 'http://localhost:8080';

  constructor(private http: HttpClient) {}

  public editarAcercaDe(id: number, nuevoAcercade: string) {
    return this.http.put(
      `${this.URL}/user/edit/${id}/acercade?acercade=${nuevoAcercade}`,
      {}
    );
  }

  public getUser(): Observable<usuario> {
    return this.http.get<usuario>(this.URL + '/user/profile');
  }

  getUsers() {
    return this.http.get(this.URL + '/users/list');
  }
}
