import { Component, Input, OnInit } from '@angular/core';
import { EspecialidadesService } from 'src/app/services/especialidades.service';
import { MedicosService } from 'src/app/services/medicos.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-especialidad-medico',
  templateUrl: './especialidad-medico.component.html',
  styleUrls: ['./especialidad-medico.component.scss']
})
export class EspecialidadMedicoComponent implements OnInit {

  form: any = {
    especialidades: null,
  };
  especialidades?: any[];

  @Input()
    medicoId: any;

  constructor(private especialidadService: EspecialidadesService, private medicoService: MedicosService) {}

  ngOnInit(): void {
    console.log('el id del medico es: ' + this.medicoId);
    this.especialidadService.getEspecialidades().subscribe(data => {
      this.especialidades = data.data;
    });
  }

  onSubmit(): void {
    const {especialidades} = this.form;
    console.log(this.form.especialidades);
    this.medicoService.agregarEspecialidadesMedico(this.medicoId, especialidades).subscribe( data =>{
      this.showSuccessAlert();
    }, err=>{
      console.log(err);
      this.showErrorAlert();
    });
  }

  showSuccessAlert() {
    Swal.fire('OK', 'Especialidad/es agregada/s con exito!', 'success');
  }

  showErrorAlert() {
    Swal.fire('Error!', 'Algo salió mal!', 'error');
  }

}
