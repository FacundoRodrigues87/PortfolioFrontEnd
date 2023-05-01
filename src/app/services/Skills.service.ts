import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Skill } from '../model/Skill';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {
expURL = 'http://localhost:8080/skills/';

constructor(private HttpClient:HttpClient) { }

public lista(): Observable<Skill[]>{
  return this.HttpClient.get<Skill[]>(this.expURL+'list')
}

public detail(id: number): Observable<Skill>{
  return this.HttpClient.get<Skill>(this.expURL+`detail/${id}`)
}

public save(skill:Skill): Observable<any>{
  return this.HttpClient.post<any>(this.expURL+'create', skill)
}

public update(id: number, skill:Skill): Observable<any>{
  return this.HttpClient.put<any>(this.expURL+`updateexp/${id}`, skill)
}

public delete(id: number): Observable<any>{
  return this.HttpClient.delete<any>(this.expURL+`delete/${id}`)
}

public editarName(id: number, nuevoName: string) {
  return this.HttpClient.put(
    `${this.expURL}editname/${id}?name=${nuevoName}`,
    {}
  );
}

public editarAmount(id: number, nuevoAmount: string) {
  return this.HttpClient.put(
    `${this.expURL}editamount/${id}?amount=${nuevoAmount}`,
    {}
  );
}
}
