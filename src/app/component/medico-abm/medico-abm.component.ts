import { Component, OnInit } from '@angular/core';
import { MedicosService } from '../../services/medicos.service';
import Swal from 'sweetalert2';
import { EspecialidadesService } from 'src/app/services/especialidades.service';
import { ZonasService } from 'src/app/services/zonas.service';
@Component({
  selector: 'app-medico-abm',
  templateUrl: './medico-abm.component.html',
  styleUrls: ['./medico-abm.component.scss']
})
export class MedicoAbmComponent implements OnInit {

  form: any = {
    direccion: null,
    fecha_nac: null,
    email: null,
    nombre: null,
    apellido: null,
    telefono: null,
    especialidades: null,
    zona:null
  };

  currentFile!: File;

  especialidades?: any[];
  zonas?: any[];

  constructor(private medicoService: MedicosService, private especialidadService: EspecialidadesService,private zonaService : ZonasService) { }

  onSubmit(): void {
    const { telefono, direccion, fecha_nac, email, nombre, apellido, especialidades, zona } = this.form;
    console.log(this.form.especialidades);
    const fechaNacimiento2 = new Date(fecha_nac).toJSON() ;
    this.medicoService.crearMedico(direccion, fechaNacimiento2, email, nombre, apellido, telefono, especialidades, this.currentFile, zona).subscribe( data =>{
      console.log("Esta es la data", data);
      if(data.ok){
        this.showSuccessAlert();
      }
    }, error => {
      const errores = error.error.errors;
      this.showErrors(errores);
    });
  }

  ngOnInit(): void {
    this.especialidadService.getEspecialidades().subscribe(data => {
      this.especialidades = data;
    });
    this.zonaService.getZonas().subscribe(data=>{
      this.zonas = data;
      console.log(data);
    })
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

  selectFile(event: any): void {
    this.currentFile = event.target.files[0];
    console.log(this.currentFile)
  }
}
