import { DecimalPipe } from '@angular/common';
import { Component, OnInit, PipeTransform } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { Router } from '@angular/router';
import { ServiciosService } from 'src/app/services/servicios.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';

@Component({
  selector: 'app-servicio',
  templateUrl: './servicio.component.html',
  styleUrls: ['./servicio.component.scss']
})

export class ServicioComponent implements OnInit {

  servicios?: any[];
  tipo?: any;
  page = 1;
  pageSize = 4;
  collectionSize!: number;

  filter = new FormControl('');

  constructor(private serviciosService: ServiciosService, private tokenStorage: TokenStorageService, public router: Router) {
  }

  ngOnInit(): void {
    this.tipo = this.tokenStorage.getRoleName()
    this.getServicios();
  }

  getServicios(): void{
    this.serviciosService.getServiciosLocalesPaginacion(this.pageSize, this.page).subscribe(data=>{
      console.log('esta es la data de la paginacion')
      console.log(data)
      this.servicios=data.rows;
      this.collectionSize=data.count;
      console.log(this.servicios);
    });
  }

  refresh() {
    this.getServicios();
  }

  busqueda(event: any): void{
    console.log('Estoy buuscando', event.target.value);
    this.getServiciosBusqueda(event.target.value);
  }

  getServiciosBusqueda(filter: string): void{
    this.serviciosService.getServicioBusqueda(filter, this.pageSize, this.page).subscribe(data=>{
      this.servicios=data.rows;
      console.log('esta es la data de la busqueda')
      console.log(data);
      this.collectionSize=data.count;
    });
  }


  verGuardias(idservicio: any){
    this.router.navigate(['/component/guardias'], { queryParams: { idservicio } });
  }

}