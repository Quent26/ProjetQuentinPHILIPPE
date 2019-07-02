import { Injectable } from '@angular/core';
import { Categorie } from '../models/categorie';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategorieService {
  private categorieUrl: string = 'http://localhost:8080/api/categorie';

  constructor(private http:HttpClient) { }

  findAll(): Observable<Categorie[]>{
    return this.http.get<Categorie[]>(this.categorieUrl);
  }

  findById(id:number): Observable<Categorie>{
    return this.http.get<Categorie>(this.categorieUrl+ '/' +id);
  }

  save(categorie: Categorie): Observable<Categorie>{
    return this.http.post<Categorie>(this.categorieUrl, categorie);
  }

  delete(id:number): Observable<Categorie>{
    return this.http.get<Categorie>(`${this.categorieUrl}/${id}/delete`);
  }

}
