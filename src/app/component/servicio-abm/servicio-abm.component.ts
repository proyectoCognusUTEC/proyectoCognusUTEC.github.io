import { Component, OnInit } from '@angular/core';
import { EdificiosService } from 'src/app/services/edificios.service';
import { EspecialidadesService } from 'src/app/services/especialidades.service';
import { ServiciosService } from 'src/app/services/servicios.service';
import { TiposServicioService } from 'src/app/services/tiposervicio.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-servicio-abm',
  templateUrl: './servicio-abm.component.html',
  styleUrls: ['./servicio-abm.component.scss']
})
export class ServicioAbmComponent implements OnInit {

  edificios?: any[];

  especialidades?: any[];

  tipos?: any[];

  ubicaciones?: any[];

  form: any = {
    idtipo: null,
    duracion: null,
    idedificio: null,
    idubicacion: null,
    frecuencia: null
  };

  // tslint:disable-next-line:max-line-length
  constructor(private edificiosService: EdificiosService, private serviciosService: ServiciosService, private tiposservicioService: TiposServicioService, private especialidadService: EspecialidadesService) {
    
  }

  ngOnInit(): void {
    this.edificiosService.getEdificios().subscribe(data=>{
      this.edificios=data;
    });
    this.tiposservicioService.getTipos().subscribe(data =>{
      this.tipos=data;
      console.log("LOS TIPOS SON: ", data);
    });
    this.especialidadService.getEspecialidades().subscribe(data=>{
      this.especialidades=data;
    });
  }

  onSubmit(): void {
    var medicos:any[]=[];
    for(const esp of this.especialidades!){
      if(esp.seleccionada){
        console.log("HA SIDO SELECCIONADA", esp.nombre)
        const idespecialidad = esp.id;
        const cantidad = esp.cantidad;
        medicos=[
          ...medicos,
          {
            idespecialidad,
            cantidad
          }
        ]
      }
    }
    console.log(medicos)
    const { idtipo, duracion, idedificio, idubicacion, met_asignacion, duracion_guardia, frecuencia } = this.form;
    this.serviciosService.agregarServicio(idtipo, medicos, duracion, Number(idedificio), Number(idubicacion), frecuencia).subscribe( data =>{
      console.log(data);
      this.showSuccessAlert();
    } );
  }

  onClick(): void{
    console.log(this.form.idedificio);
    this.edificiosService.obtenerUbicacionesDisponibleEdificio(this.form.idedificio).subscribe(data=>{
      this.ubicaciones=data;
      console.log(this.ubicaciones);
    }, err=>{
      console.log(err);
    });
  }

  showSuccessAlert() {
    Swal.fire('OK', 'Servicio agregado con exito!', 'success');
  }

  showErrorAlert() {
    Swal.fire('Error!', 'Algo salió mal!', 'error');
  }

}
