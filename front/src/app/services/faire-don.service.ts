import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import { FaireDon } from '../models/faire-don';

@Injectable({
  providedIn: 'root'
})
export class FaireDonService {
  private faireDonUrl: string = 'http://localhost:8080/api/faireDon';

  constructor(private http:HttpClient) { }

  findAll(): Observable<FaireDon[]>{
    return this.http.get<FaireDon[]>(this.faireDonUrl);
  }

  findById(id:number): Observable<FaireDon>{
    return this.http.get<FaireDon>(this.faireDonUrl+ '/' +id);
  }

  save(don: FaireDon): Observable<FaireDon>{
    return this.http.post<FaireDon>(this.faireDonUrl, don);
  }

}
