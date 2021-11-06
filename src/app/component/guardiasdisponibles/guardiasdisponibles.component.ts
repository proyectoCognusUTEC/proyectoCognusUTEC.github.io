import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {DecimalPipe} from '@angular/common';
import {ActivatedRoute, Router} from '@angular/router';
import Swal from 'sweetalert2';
import { AccionesMedicoService } from 'src/app/services/acciones-medico.service';
import { ServiciosService } from 'src/app/services/servicios.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-guardiasdisponibles',
  templateUrl: './guardiasdisponibles.component.html',
  styleUrls: ['./guardiasdisponibles.component.scss']
})
export class GuardiasdisponiblesComponent implements OnInit {

  guardias?: any[];

  especialidades: any;

  guardiaseleccionada!: any;

  errorMessage: any;

  isError = false;

  selectedEsp: any;

  page = 1;
  pageSize = 4;
  collectionSize!: number;

  filter = new FormControl('');

  constructor(private accionesMedicoService: AccionesMedicoService, private servicioService: ServiciosService,private pipe: DecimalPipe, private route: ActivatedRoute, public router: Router, private spinner: NgxSpinnerService) {
    this.selectedEsp="IDK";
  }

  test(guardia: any):void {
    this.guardiaseleccionada= guardia;
    console.log(this.guardiaseleccionada);
    this.accionesMedicoService.getEspecialidadesGuardia(guardia.id).subscribe(data=>{
      this.especialidades=data;
    });
  }

  ngOnInit(): void {
    this.spinner.show();
    this.accionesMedicoService.obtenerGuardiasDisponibles().subscribe(data=>{
      console.log(data);
      this.guardias=data;
      this.spinner.hide();
    }, error =>{
      this.isError = true;
      this.errorMessage = error.error
      this.spinner.hide();
    });
  }

  postularse(): void{
    this.accionesMedicoService.postularseGuardia(this.guardiaseleccionada.id, this.selectedEsp).subscribe(data=>{
      console.log(data);
      this.showSuccessAlert();
    },err=>{
     this.showErrors(err.error);
    });
    console.log(this.selectedEsp);
  }

  showErrors(error: any): void{
    const messages: string[] = [];
    messages.push(error.message);
    this.showErrorAlert(messages);
  }

  showSuccessAlert() {
    Swal.fire('OK', 'Exito', 'success');
  }

  showErrorAlert(messages: string[]) {
    Swal.fire('Error!', messages.toString(), 'error');
  }

}
