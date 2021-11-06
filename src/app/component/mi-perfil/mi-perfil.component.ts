import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AccionesMedicoService } from 'src/app/services/acciones-medico.service';
import { MedicosService } from 'src/app/services/medicos.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-mi-perfil',
  templateUrl: './mi-perfil.component.html',
  styleUrls: ['./mi-perfil.component.scss']
})
export class MiPerfilComponent implements OnInit {

  medico?: any;
  editable? = false;
  currentFile!: File;
  Especialidads?: any;

  form: any = {
    id:null,
    direccion: null,
    fecha_nac: null,
    nombre: null,
    apellido: null,
    telefono: null,
    rutaFoto:null,
  };

  constructor(private accionesMedicoService : AccionesMedicoService,private medicosService: MedicosService,private datePipe: DatePipe) { }

  ngOnInit(): void {
    this.getdatos();
  }

  getdatos():void{
    this.accionesMedicoService.obtenerDatos().subscribe(data=>{
      console.log(data)
      this.form.id = data.id;
      this.form.nombre = data.Usuario.nombre;
      this.form.apellido = data.Usuario.apellido;
      this.form.direccion = data.direccion;
      this.form.telefono = data.Usuario.telefono;
      this.form.fecha_nac = this.datePipe.transform(new Date(data.fecha_nac),'yyyy-MM-dd');
      this.form.rutaFoto = data.rutaFoto;
      this.Especialidads = data.Especialidads;
    });
  }

  editOn(): void{
    this.editable=!this.editable;
    //console.log(medico)
  }

  onEnter(e: any): void{
    e.target.blur();
  }

  actualizarMedico(): void{
    this.medicosService.editarMedico(this.form.id,this.form.direccion,this.form.fecha_nac,this.form.nombre,this.form.apellido,this.form.telefono, this.currentFile).subscribe(data=>{
      if(data.ok){
        this.showSuccessAlert();
        this.getdatos();
      }
    }, err=>{
      this.showErrorAlert();
    });
    this.editable=false;
  }

  selectFile(event: any): void {
   this.currentFile = event.target.files[0];
  }

  showSuccessAlert() {
    Swal.fire('OK', 'Medico actualizado con exito!', 'success');
  }

  showErrorAlert() {
    Swal.fire('Error!', 'Algo salió mal!', 'error');
  }

}
