import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


const AUTH_API = '/api/medico/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})

export class AccionesMedicoService {

  constructor(private http: HttpClient) { }

  obtenerDatos(): Observable<any> {
    return this.http.get(AUTH_API+'datos');
  }

  obtenerGuardias(): Observable<any> {
    return this.http.get(AUTH_API+'guardias');
  }

  obtenerGuardiasDisponibles(): Observable<any> {
    return this.http.get(AUTH_API+'guardiasdisponibles');
  }

  obtenerPostulaciones(): Observable<any> {
    return this.http.get(AUTH_API+'guardiaspostuladas');
  }

  postularseGuardia(idguardia: number, idesp: number): Observable<any> {
    return this.http.post(AUTH_API + 'postularse/'+idguardia,{
      idesp
    },httpOptions);
  }

  cancelarPostulacion(idguardia: number): Observable<any> {
    return this.http.post(AUTH_API + 'cancelarpostulacion/'+idguardia,httpOptions);
  }

  getEspecialidadesGuardia(idguardia: number): Observable<any> {
    return this.http.get(AUTH_API  + 'especialidades/' + idguardia, httpOptions);
  }

  ofrecerliberar(idguardia: number):Observable<any>{
    return this.http.post(AUTH_API + 'liberar/'+ idguardia,httpOptions);
  }

}
