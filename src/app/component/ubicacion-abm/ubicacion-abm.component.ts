import { Component, OnInit } from '@angular/core';
import { EdificiosService } from 'src/app/services/edificios.service';
import { UbicacionesService } from 'src/app/services/ubicaciones.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-ubicacion-abm',
  templateUrl: './ubicacion-abm.component.html',
  styleUrls: ['./ubicacion-abm.component.scss']
})
export class UbicacionAbmComponent implements OnInit {

  form: any = {
    descripcion: null,
    idedificio: null
  };
  edificios?: any[];

  constructor(private ubicacionesService: UbicacionesService, private edificiosService: EdificiosService) { }

  onSubmit(): void {
    const { descripcion, idedificio } = this.form;
    console.log(this.form);
    this.ubicacionesService.agregarUbicacion(descripcion, idedificio).subscribe( data =>{
      console.log(data);
      this.showSuccessAlert();
    }, err=>{
      this.showErrorAlert();
    });
  }
  ngOnInit(): void {
    this.edificiosService.getEdificios().subscribe(data=>{
      this.edificios=data;
      console.log(this.edificios);
    });
  }

  showSuccessAlert() {
    Swal.fire('OK', 'Ubicacion agregada con exito!', 'success');
  }

  showErrorAlert() {
    Swal.fire('Error!', 'Algo salió mal!', 'error');
  }

}
