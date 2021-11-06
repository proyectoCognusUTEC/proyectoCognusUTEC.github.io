import { Component, OnInit } from '@angular/core';
import { EspecialidadesService } from 'src/app/services/especialidades.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-especialidad-abm',
  templateUrl: './especialidad-abm.component.html',
  styleUrls: ['./especialidad-abm.component.scss']
})
export class EspecialidadAbmComponent implements OnInit {

  form: any = {
    nombre: null,
    certificacion: null
  };

  constructor(private especialidadServicio: EspecialidadesService) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    const { nombre, certificacion } = this.form;
    console.log(this.form);
    this.especialidadServicio.agregarEspecialidad(nombre, certificacion).subscribe( data =>{
      console.log(data);
      this.showSuccessAlert();
    }, err=>{
      this.showErrorAlert();
    });
  }

  showSuccessAlert() {
    Swal.fire('OK', 'Especialidad registrada con exito!', 'success');
  }

  showErrorAlert() {
    Swal.fire('Error!', 'Algo salió mal!', 'error');
  }

}
