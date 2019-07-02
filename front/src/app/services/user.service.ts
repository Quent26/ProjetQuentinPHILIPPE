import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private utilisateurUrl: string = 'http://localhost:8080/api/utilisateur';


  private userUrl = 'http://localhost:8080/api/test/user';
  private pmUrl = 'http://localhost:8080/api/test/pm';
  private adminUrl = 'http://localhost:8080/api/test/admin';

  constructor(private http: HttpClient) { }

  getUserBoard(): Observable<string> {
    return this.http.get(this.userUrl, { responseType: 'text' });
  }

  getPMBoard(): Observable<string> {
    return this.http.get(this.pmUrl, { responseType: 'text' });
  }

  getAdminBoard(): Observable<string> {
    return this.http.get(this.adminUrl, { responseType: 'text' });
  }
  findAll(): Observable<User[]>{
    return this.http.get<User[]>(this.utilisateurUrl);
  }

  findById(id:number): Observable<User>{
    return this.http.get<User>(this.utilisateurUrl+ '/' +id);
  }

  save(util: User): Observable<User>{
    return this.http.post<User>(this.utilisateurUrl, util);
  }

  delete(id:number): Observable<User>{
    return this.http.get<User>(`${this.utilisateurUrl}/${id}/delete`);
  }

}
