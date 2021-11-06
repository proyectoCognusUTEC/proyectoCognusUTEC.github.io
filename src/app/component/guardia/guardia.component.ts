import { DecimalPipe } from '@angular/common';
import { Component, OnInit, PipeTransform } from '@angular/core';
import { FormControl } from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { GuardiasService } from 'src/app/services/guardias.service';
import { ServiciosService } from 'src/app/services/servicios.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-guardia',
  templateUrl: './guardia.component.html',
  styleUrls: ['./guardia.component.scss']
})
export class GuardiaComponent implements OnInit {

  guardias?: any[];

  idservicio?: number;

  servicio?: any;

  isLocal?: boolean;

  page = 1;
  pageSize = 4;
  collectionSize!: number;

  filter = new FormControl('');

  // tslint:disable:max-line-length
  constructor(private guardiasService: GuardiasService, private servicioService: ServiciosService,private pipe: DecimalPipe, private route: ActivatedRoute, public router: Router) {
    this.route.queryParams.subscribe(params => {
      this.idservicio=params.idservicio;
      if(this.idservicio){
        this.servicioService.getServicio(this.idservicio).subscribe(data=>{
          this.servicio=data;
          if(data.Local == null){
            this.isLocal = false
          }
          else{
            this.isLocal=true
          }
          console.log('Este es el servicio en guardia component'); 
          console.log(this.servicio);
        });
        this.getGuardiasServicio();
      }
    });
  }

  ngOnInit(): void {
    
  }
  //aca deberia saber que tipo de servicio es, para ver que guardias voy a buscar
  getGuardiasServicio() : void{
    if(this.idservicio){
      this.servicioService.getGuardiasServicioPaginacion(this.idservicio, this.pageSize, this.page).subscribe(data=>{
        console.log(data);
        this.guardias=data.guardias;
        //this.servicio=data.data.servicio;
        this.collectionSize = data.count;
      })
    }
  }

  refresh() {
    this.getGuardiasServicio();
  }

  // eslocal():void{
  //   //console.log('Este es el de guardia abm');
  //   //console.log(this.servicio);

  //   if(this.servicio.Domicilio){
  //     this.isLocal = false
  //   }
  //   else{
  //     this.isLocal = true
  //   }
  //   this.edificiosService.getEdificios().subscribe(data=>{
  //     this.edificios=data.data;
  //     console.log(this.edificios);
  //   });
  //   this.zonasService.getZonas().subscribe(data=>{
  //     console.log(data);
  //     this.zonas=data.zonas;
  //   });
  // }

  busqueda(event: any): void{
    console.log('Estoy buuscando', event.target.value);
    this.getGuardiasServicioBusqueda(event.target.value);
  }

  getGuardiasServicioBusqueda(filter: string): void{
    console.log('estoy en guardiasServicioBusqyeda ' + this.idservicio)
    this.servicioService.getGuardiasServicioBusqueda(this.idservicio,filter, this.pageSize, this.page).subscribe(data=>{
      this.guardias=data.guardias;
      //this.servicio=data.data.servicio;
      console.log(data);
      this.collectionSize=data.count;
    });
  }

  publicarGuardia(id: number): void{
    this.guardiasService.publicarGuardia(id).subscribe(data=>{
      console.log(data);
      this.showSuccessAlert();
      if(this.idservicio){
        this.servicioService.getGuardiasServicio(this.idservicio).subscribe(data=>{
          console.log(data);
          this.guardias=data.guardias;
        })
      }
    });
  }

  asignarMedicosGuardia(id: number): void{
    this.router.navigate(['/component/publicarguardia'], { queryParams: { id } });
  }

  eliminarGuardia(idguardia: any): void{
    console.log('llege a componente con el id' + idguardia);
    this.guardiasService.eliminarGuardia(idguardia).subscribe();
  }

  agregarGuardia(idservicio: any): void{
    console.log('llege a componente con el id ' + idservicio);
  }

  showSuccessAlert() {
    Swal.fire('OK', 'Exito', 'success');
  }

  showErrorAlert(messages: string[]) {
    Swal.fire('Error!', messages.toString(), 'error');
  }

}
