import { Component, OnInit } from '@angular/core';
import { ZonasService } from 'src/app/services/zonas.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-zona-abm',
  templateUrl: './zona-abm.component.html',
  styleUrls: ['./zona-abm.component.scss']
})
export class ZonaAbmComponent implements OnInit {

  constructor(private zonaService : ZonasService) { }

  form: any = {
    pais: null,
    departamento: null,
    localidad: null
  };

  tipos: any[] = [];

  ngOnInit(): void {
    /*this.tiposservicioService.getTipos().subscribe(data =>{
      this.tipos=data.data;
      console.log(data);
    });*/
  }

  onSubmit(): void {
    const { pais, departamento, localidad } = this.form;
    console.log(this.form);
    this.zonaService.agregarZona(pais, departamento, localidad).subscribe( data =>{
      console.log(data);
      this.showSuccessAlert();
    }, err=>{
      this.showErrorAlert();
    });
  }

  
  showSuccessAlert() {
    Swal.fire('OK', 'Zona agregada con exito!', 'success');
  }

  showErrorAlert() {
    Swal.fire('Error!', 'Algo salió mal!', 'error');
  }

}
