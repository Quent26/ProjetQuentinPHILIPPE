import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import { Projet } from '../models/projet';


@Injectable({
  providedIn: 'root'
})
export class ProjetService {
  private projetUrl: string = 'http://localhost:8080/api/projet';

  constructor(private http:HttpClient) { }

  findAll(): Observable<Projet[]>{
    return this.http.get<Projet[]>(this.projetUrl);
  }

  findById(id:number): Observable<Projet>{
    return this.http.get<Projet>(this.projetUrl+ '/' +id);
  }

  save(projet: Projet): Observable<Projet>{
    return this.http.post<Projet>(this.projetUrl, projet);
  }

  delete(id:number): Observable<Projet>{
    return this.http.get<Projet>(`${this.projetUrl}/${id}/delete`);
  }
}
