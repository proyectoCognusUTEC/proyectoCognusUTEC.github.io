import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const AUTH_API = '/api/estadisticas/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})
export class EstadisticasService {

  constructor(private http: HttpClient) { }

  obtenerHorasMedicos(marco: string): Observable<any> {
    return this.http.get(AUTH_API + `horas?marco=${marco}`);
  }

  obtenerHorariosFavoritos(): Observable<any> {
    return this.http.get(AUTH_API + 'horariosfavoritos');
  }


}
