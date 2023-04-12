import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { usuario } from '../model/Usuario.model';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  URL = 'http://localhost:8080';

  constructor(private http:HttpClient) { }

  public getUser(): Observable<usuario> {
    return this.http.get<usuario>(this.URL+'/user/profile');
  }
}
