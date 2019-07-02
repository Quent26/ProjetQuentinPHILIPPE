import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import { Utilisateur } from '../models/utilisateur';

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {
  private utilisateurUrl: string = 'http://localhost:8080/api/utilisateur';

  constructor(private http:HttpClient) { }

  findAll(): Observable<Utilisateur[]>{
    return this.http.get<Utilisateur[]>(this.utilisateurUrl);
  }

  findById(id:number): Observable<Utilisateur>{
    return this.http.get<Utilisateur>(this.utilisateurUrl+ '/' +id);
  }

  save(util: Utilisateur): Observable<Utilisateur>{
    return this.http.post<Utilisateur>(this.utilisateurUrl, util);
  }

  delete(id:number): Observable<Utilisateur>{
    return this.http.get<Utilisateur>(`${this.utilisateurUrl}/${id}/delete`);
  }
}
