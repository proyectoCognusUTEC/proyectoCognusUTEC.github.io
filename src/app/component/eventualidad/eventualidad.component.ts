import { Component, OnInit } from '@angular/core';
import { EventualidadesService } from 'src/app/services/eventualidades.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-eventualidad',
  templateUrl: './eventualidad.component.html',
  styleUrls: ['./eventualidad.component.scss']
})
export class EventualidadComponent implements OnInit {

  medicoid?: any;
  eventualidades?: any[];
  page = 1;
  pageSize = 4;
  collectionSize!: number;
  isError?: false;
  constructor(private eventualidadService: EventualidadesService, private tokenStorage: TokenStorageService) { }

  ngOnInit(): void {
    this.medicoid = this.tokenStorage.getUserName();
    this.getEventualidades();
  }

  getEventualidades():void{
    this.eventualidadService.obtenerEventualidades().subscribe(data=>{
      this.eventualidades=data;
      console.log(data)
    })
  }

  postularse(idev:number):void{
    console.log(idev);
    this.eventualidadService.postularse(idev).subscribe(data=>{
      console.log(data);
      this.showSuccessAlert();
    }, err=>{
      console.log(err)
      this.showErrorAlert();
    });
  }

  showSuccessAlert() {
    Swal.fire('OK', 'Postulacion acpetada!', 'success');
  }

  showErrorAlert() {
    Swal.fire('Error!', 'Algo salió mal!', 'error');
  }

}
