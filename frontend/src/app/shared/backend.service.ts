import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Inhalt } from './inhalt';

@Injectable({
  providedIn: 'root'
})
export class BackendService {
  baseUrl = 'http://localhost:3000/inhalt';

  constructor(private http: HttpClient) { }

  getAllInhalt(): Observable<Inhalt[]>{
    return this.http
      .get<Inhalt[]>(this.baseUrl );
  }

  getInhaltById(inhaltId: number): Observable<Inhalt> {
    return this.http
      .get<Inhalt>(this.baseUrl + '/' + inhaltId);
  }

  deleteOneInhalt(inhaltId: number): void {
    this.http.delete<Inhalt>(this.baseUrl + '/' + inhaltId)
      .subscribe(
        response => {
          console.log(response);
          console.log(response.id);
        },
        error => {
          console.log(error);
        }
      );
  }

  createOneInhalt(inhalt: Inhalt): void {
    this.http.post<Inhalt>(this.baseUrl , inhalt)
      .subscribe(
        response => {
          console.log(response);
        },
        error => {
          console.log(error);
        }
      );
  }

  getOne(id: string): Observable<Inhalt>{
    return this.http.get<Inhalt>(this.baseUrl + '/' + id);
  }

  update(inhaltId: number, inhalt: Inhalt): void {
    this.http.put<Inhalt>(this.baseUrl + '/' + inhaltId, inhalt)
      .subscribe(
        response => {
          console.log(response);
          console.log(response.id);
        },
        error => {
          console.log(error);
        }
      );
  }

}