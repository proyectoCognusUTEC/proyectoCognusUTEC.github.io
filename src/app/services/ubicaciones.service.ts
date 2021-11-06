import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


const AUTH_API = '/api/ubicaciones/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})

export class UbicacionesService {

  constructor(private http: HttpClient) { }

  obtenerUbicaciones(): Observable<any> {
    return this.http.get(AUTH_API);
  }

 agregarUbicacion(descripcion: string, idedificio: number): Observable<any> {
    return this.http.post(AUTH_API, {
      descripcion,
      idedificio
      },httpOptions);
  }

  actualizarUbicacion(id: number, descripcion: string, idedificio: number): Observable<any> {
    return this.http.put(AUTH_API + id, {
      descripcion,
      idedificio
    },httpOptions);
  }

}
