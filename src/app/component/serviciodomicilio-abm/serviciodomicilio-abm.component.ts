import { Component, OnInit } from '@angular/core';
import { EspecialidadesService } from 'src/app/services/especialidades.service';
import { ServiciosService } from 'src/app/services/servicios.service';
import { ZonasService } from 'src/app/services/zonas.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-serviciodomicilio-abm',
  templateUrl: './serviciodomicilio-abm.component.html',
  styleUrls: ['./serviciodomicilio-abm.component.scss']
})
export class ServiciodomicilioAbmComponent implements OnInit {


  zonas?: any[];

  especialidades?: any[];

  form: any = {
    duracion: null,
    idzona: null,
    duracion_guardia: null,
    frecuencia: null,
    met_asignacion: null
  };


  constructor(private serviciosService: ServiciosService, private zonasService: ZonasService, private especialidadService: EspecialidadesService) {

  }

  ngOnInit(): void {
    this.zonasService.getZonas().subscribe(data=>{
      console.log(data);
      this.zonas=data;
    });
    this.especialidadService.getEspecialidades().subscribe(data=>{
      this.especialidades=data;
    });
  }

  onSubmit(): void {
    const { duracion, idzona, duracion_guardia, frecuencia, met_asignacion } = this.form;
    var medicos:any[]=[];
    for(const esp of this.especialidades!){
      if(esp.seleccionada){
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
    this.serviciosService.agregarServicioDomicilio(medicos, duracion, idzona, frecuencia).subscribe( data =>{
      console.log(data);
      this.showSuccessAlert();
    }, err =>{
      this.showErrorAlert();
    });
  }

  showSuccessAlert() {
    Swal.fire('OK', 'Servicio agregado con exito!', 'success');
  }

  showErrorAlert() {
    Swal.fire('Error!', 'Algo salió mal!', 'error');
  }

}
