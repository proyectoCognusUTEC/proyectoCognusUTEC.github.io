import { Component, OnInit } from '@angular/core';
import { EdificiosService } from 'src/app/services/edificios.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edificio-abm',
  templateUrl: './edificio-abm.component.html',
  styleUrls: ['./edificio-abm.component.scss']
})
export class EdificioAbmComponent implements OnInit {

  form: any = {
    direccion: null,
    nombre: null,
    telefono: null
  };

  currentFile!: File;

  constructor(private edificiosService: EdificiosService) { }

  ngOnInit(): void {

  }

  onSubmit(): void {
    const { direccion, nombre, telefono } = this.form;
    this.edificiosService.crearEdificio(direccion, nombre, telefono, this.currentFile).subscribe( data =>{
      console.log(data);
      if(data.ok){
        this.showSuccessAlert();
      }
    },err=>{
      console.log(err);
      this.showErrorAlert();
    });
  }

  selectFile(event: any): void {
    this.currentFile = event.target.files[0];
    console.log(this.currentFile)
  }

  showSuccessAlert() {
    Swal.fire('OK', 'Edificio agregado con exito!', 'success');
  }

  showErrorAlert() {
    Swal.fire('Error!', 'Algo salió mal!', 'error');
  }

}
