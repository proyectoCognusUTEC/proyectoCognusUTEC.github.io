import { Component, OnInit } from '@angular/core';
import { AdministrativosService } from 'src/app/services/administrativos.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-administrativo-abm',
  templateUrl: './administrativo-abm.component.html',
  styleUrls: ['./administrativo-abm.component.scss']
})
export class AdministrativoAbmComponent implements OnInit {

  form: any = {
    email: null,
    nombre: null,
    apellido: null,
    telefono: null
  };

  constructor(private administrativosService: AdministrativosService) { }

  onSubmit(): void {
    const { email, nombre, apellido, telefono } = this.form;
    this.administrativosService.crearAdministrativo(email, nombre, apellido, telefono).subscribe( data =>{
      this.form={};
      console.log(data);
      this.showSuccessAlert();
    }, error => {
      const errores = error.error.errors;
      this.showErrors(errores);
    });
  }

  showErrors(errores: any): void{
    const messages: string[] = [];
    errores.forEach((err: { msg: any, param: any; })=>{
      messages.push(err.param +': ' + err.msg);
    });
    this.showErrorAlert(messages);
  }

  ngOnInit(): void {
  }

  showSuccessAlert() {
    Swal.fire('OK', 'Exito', 'success');
  }

  showErrorAlert(messages: string[]) {
    Swal.fire('Error!', messages.toString(), 'error');
  }
}
