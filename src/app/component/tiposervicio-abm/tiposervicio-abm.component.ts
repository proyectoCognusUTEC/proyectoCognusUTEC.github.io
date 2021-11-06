import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import {TiposServicioService} from '../../services/tiposervicio.service';

@Component({
  selector: 'app-tiposervicio-abm',
  templateUrl: './tiposervicio-abm.component.html',
  styleUrls: ['./tiposervicio-abm.component.scss']
})
export class TiposervicioAbmComponent implements OnInit {

  constructor(private tiposservicioService: TiposServicioService) { }

  form: any = {
    nombre: null
  };

  tipos: any[] = [];

  ngOnInit(): void {
    /*this.tiposservicioService.getTipos().subscribe(data =>{
      this.tipos=data.data;
      console.log(data);
    });*/
  }

  onSubmit(): void {
    const { nombre } = this.form;
    console.log(this.form);
    this.tiposservicioService.agregarTipo(nombre).subscribe( data =>{
      console.log(data);
      this.showSuccessAlert();
    }, err=>{
      this.showErrorAlert();
    });
  }

  
  showSuccessAlert() {
    Swal.fire('OK', 'Tipo de servicio agregado con exito!', 'success');
  }

  showErrorAlert() {
    Swal.fire('Error!', 'Algo salió mal!', 'error');
  }
}
