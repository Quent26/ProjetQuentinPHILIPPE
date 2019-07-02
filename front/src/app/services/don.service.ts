import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import { Don } from '../models/don';

@Injectable({
  providedIn: 'root'
})
export class DonService {
  private donUrl: string = 'http://localhost:8080/api/don';

  constructor(private http:HttpClient) { }

  findAll(): Observable<Don[]>{
    return this.http.get<Don[]>(this.donUrl);
  }

  findById(id:number): Observable<Don>{
    return this.http.get<Don>(this.donUrl+ '/' +id);
  }

  save(don: Don): Observable<Don>{
    return this.http.post<Don>(this.donUrl, don);
  }

  delete(id:number): Observable<Don>{
    return this.http.get<Don>(`${this.donUrl}/${id}/delete`);
  }
}
