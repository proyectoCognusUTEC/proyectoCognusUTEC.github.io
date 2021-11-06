import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


const AUTH_API = '/api/servicios/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})

export class ServiciosService {

  constructor(private http: HttpClient) { }

  getServiciosLocal(): Observable<any> {
    return this.http.get(AUTH_API  + '/local');
  }

  getServiciosDomicilio(): Observable<any> {
    return this.http.get(AUTH_API + '/domicilio');
  }

  // tslint:disable:variable-name max-line-length
  agregarServicio(idtipo: number, especialidades: any[], duracion: number, idedificio: number, idubicacion: number, frecuencia: string): Observable<any> {
    return this.http.post(AUTH_API, {
      idtipo,
      especialidades,
      duracion,
      idedificio,
      idubicacion,
      frecuencia
      },httpOptions);
  }

  agregarServicioDomicilio(especialidades: any[], duracion: number, idzona: number,  frecuencia: number): Observable<any> {
    return this.http.post(AUTH_API + '/domicilio', {
      especialidades,
      duracion,
      idzona,
      frecuencia
      },httpOptions);
  }

  getServiciosZona(idzona: number): Observable<any> {
    return this.http.get(AUTH_API + '/zona/' + idzona);
  }

  getServicio(idservicio: number): Observable<any> {
    return this.http.get(AUTH_API + idservicio);
  }

  getServiciosLocalesPaginacion(size: number, page: number): Observable<any>{
    return this.http.get(AUTH_API + '/local/paginacion?size='+size+'&page='+page, httpOptions);
  }

  getServiciosDomicilioPaginacion(size: number, page: number): Observable<any>{
    return this.http.get(AUTH_API + '/domicilio/paginacion?size='+size+'&page='+page, httpOptions);
  }

  getGuardiasServicio(id: number): Observable<any> {
    return this.http.get(AUTH_API + '/guardias/' + id);
  }

  actualizarServicioLocal(id:number, idtipo: number, cant_medicos: string, duracion: number, idedificio: number, idubicacion: number): Observable<any> {
    return this.http.put(AUTH_API + '/local/' + id, {
      idtipo,
      cant_medicos,
      duracion,
      idedificio,
      idubicacion,
      },httpOptions);
  }
  
  getServicioBusqueda(filter: string, size: number, page: number): Observable<any>{
    return this.http.get(AUTH_API + 'local/busqueda?filter='+ filter + '&size='+ size +'&page='+page, httpOptions);
  }

  getGuardiasServicioBusqueda(idservicio: any, filter: string, size: number, page: number): Observable<any>{
    return this.http.get(AUTH_API + 'local/guardias/busqueda?id=' + idservicio + '&filter='+ filter + '&size='+ size +'&page='+page, httpOptions);
  }

  getGuardiasServicioPaginacion(id: number, size: number, page: number): Observable<any> {
    return this.http.get(AUTH_API + 'local/guardias/paginacion?id=' + id + '&size='+ size +'&page='+page, httpOptions);
  }

}
