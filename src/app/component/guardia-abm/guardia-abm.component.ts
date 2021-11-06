import {Component, Input, OnInit} from '@angular/core';
import { EdificiosService } from 'src/app/services/edificios.service';
import { GuardiasService } from 'src/app/services/guardias.service';
import { ServiciosService } from 'src/app/services/servicios.service';
import { ZonasService } from 'src/app/services/zonas.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-guardia-abm',
  templateUrl: './guardia-abm.component.html',
  styleUrls: ['./guardia-abm.component.scss']
})


export class GuardiaAbmComponent implements OnInit {

  @Input() servicio: any;

  edificios?: any[];


  local? = false;

  zonas?: any[];

  date : Date = new Date();

  servicios?: any[];

  form: any = {
    descripcion: null,
    fechainicio: null,
    idservicio: null,
    duracion: null,
    met_asignacon: null
  };

  constructor(private edificiosService: EdificiosService, private guardiasService: GuardiasService, private zonasService: ZonasService,  private serviciosService: ServiciosService) {
    this.date = new Date();
  }



  ngOnInit(): void {
    // console.log('Este es el de guardia abm');

    if(this.servicio.Domicilio){
      this.local = false
    }
    else{
      this.local = true
    }
    /*this.edificiosService.getEdificios().subscribe(data=>{
      this.edificios=data.data;
      console.log(this.edificios);
    });
    this.zonasService.getZonas().subscribe(data=>{
      console.log(data);
      this.zonas=data.zonas;
    });*/
  }

  onClickZona(id: any): void{
    const idzona = id.form.idzona;
    this.serviciosService.getServiciosZona(idzona).subscribe(data=>{
      this.servicios=data.servicios;
      console.log(this.servicios);
      this.local = false;
    });
  }

  onSubmit(): void {
    const { descripcion, fechainicio, duracion, met_asignacion } = this.form;
    if(new Date(fechainicio)<this.date){
      this.showErrorAlert(['Ingrese una fecha mayor a la de hoy']);
      return;
    }
    if(this.servicio){
      this.guardiasService.agregarGuardia(descripcion, fechainicio, this.servicio.id, duracion, met_asignacion).subscribe( data =>{
        this.showSuccessAlert();
        console.log(data);
      }, err=>{
        console.log(err);
        this.showErrorAlert(err.error.message);
      });
    }
  }

  
  showErrors(errores: any): void{
    const messages: string[] = [];
    errores.forEach((err: { msg: any, param: any; })=>{
      messages.push(err.param +': ' + err.msg);
    });
    this.showErrorAlert(messages);
  }

  showSuccessAlert() {
    Swal.fire('OK', 'Exito', 'success');
  }

  showErrorAlert(messages: string[]) {
    Swal.fire('Error!', messages.toString(), 'error');
  }

}
