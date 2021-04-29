import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pregunta } from '../models/pregunta';

@Injectable({
  providedIn: 'root'
})
export class PreguntaService {

  constructor(private http: HttpClient) { }

  private url: string = 'api/pregunta/';

  getAll(): Observable<Pregunta[]> {
    return this.http.get<Pregunta[]>(this.url);
  }

  saveQuestion(pregunta: Pregunta): Observable<Pregunta> {
    return;
  };
}
