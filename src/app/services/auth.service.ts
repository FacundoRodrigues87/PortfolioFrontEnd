import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NuevoUser } from '../model/nuevo-user';
import { Observable } from 'rxjs';
import { LoginUser } from '../model/login-user';
import { JwtDto } from '../model/jwt-dto';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  authURL = 'http://localhost:8080/auth/';

  constructor(private httpClient: HttpClient) {}

  public new(nuevoUser: NuevoUser): Observable<any> {
    return this.httpClient.post<any>(this.authURL + 'new', nuevoUser);
  }

  public login(LoginUser: LoginUser): Observable<JwtDto> {
    return this.httpClient.post<JwtDto>(this.authURL + 'login', LoginUser);
  }
}
