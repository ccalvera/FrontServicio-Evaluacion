import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Prueba } from '../models/prueba';

@Injectable({
  providedIn: 'root'
})
export class PruebaService {

  constructor(private http: HttpClient) { }

  private url: string = 'api/prueba/';

  //obtener pruebas
  getAll(): Observable<Prueba[]> {
    return this.http.get<Prueba[]>(this.url);
  }

  //crear pruebas
  saveTest(prueba: Prueba): Observable<Prueba> {
    let headers = new HttpHeaders();
    return this.http.post<Prueba>(this.url, prueba);
  }

  deleteTest(id: number): Observable<Prueba> {
    return this.http.delete<Prueba>(this.url + "/" + id);
  }
}
