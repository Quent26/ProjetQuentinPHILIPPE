import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import { PoseurDeProjet } from '../models/poseur-de-projet';

@Injectable({
  providedIn: 'root'
})
export class PoseurDeProjetService {
  private poseurUrl: string = 'http://localhost:8080/api/poseurDeProjet';

  constructor(private http:HttpClient) { }

  findAll(): Observable<PoseurDeProjet[]>{
    return this.http.get<PoseurDeProjet[]>(this.poseurUrl);
  }

  findById(id:number): Observable<PoseurDeProjet>{
    return this.http.get<PoseurDeProjet>(this.poseurUrl+ '/' +id);
  }

  save(poseur: PoseurDeProjet): Observable<PoseurDeProjet>{
    return this.http.post<PoseurDeProjet>(this.poseurUrl, poseur);
  }

  delete(id:number): Observable<PoseurDeProjet>{
    return this.http.get<PoseurDeProjet>(`${this.poseurUrl}/${id}/delete`);
  }
}
