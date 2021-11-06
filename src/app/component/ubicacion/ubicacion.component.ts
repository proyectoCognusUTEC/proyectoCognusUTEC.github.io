import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EdificiosService } from 'src/app/services/edificios.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import { UbicacionesService } from 'src/app/services/ubicaciones.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-ubicacion',
  templateUrl: './ubicacion.component.html',
  styleUrls: ['./ubicacion.component.scss']
})
export class UbicacionComponent implements OnInit {

  ubicaciones?: any[];

  idedificio?: number;

  editable? = true;

  tipo: any;

  constructor(private ubicacionesService: UbicacionesService, private edificiosService: EdificiosService, private route: ActivatedRoute, private tokenStorage: TokenStorageService) {
    this.route.queryParams.subscribe(params => {
      this.idedificio=params.idedificio;
    });

  }

  ngOnInit(): void {
    this.tipo=this.tokenStorage.getRoleName();
    this.getUbicaciones();
  }

  refresh() {
    this.getUbicaciones();
  }

  getUbicaciones() :void{
    if(this.idedificio){
      this.edificiosService.obtenerUbicacionesEdificio(this.idedificio).subscribe(data=>{
        this.ubicaciones=data;
        console.log(this.ubicaciones);
      });
    }
    else{
      this.ubicacionesService.obtenerUbicaciones().subscribe(data=>{
        this.ubicaciones=data;
        console.log(this.ubicaciones);
      });
    }
  }

  actualizarDescripcion(sala: any, event: any): void{
    console.log(event);
    const descripcion = event.target.value;
    this.ubicacionesService.actualizarUbicacion(sala.id,descripcion,sala.Edificio.id).subscribe(data=>{
      console.log(data);
      this.showSuccessAlert();
    }, err=>{
      this.showErrorAlert();
    });
    this.editable=true;
  }

  editOn(): void{
    this.editable=!this.editable;
  }

  onEnter(e: any): void{
    e.target.blur();
  }

  showSuccessAlert() {
    Swal.fire('OK', 'Ubicacion actualizada con exito!', 'success');
  }

  showErrorAlert() {
    Swal.fire('Error!', 'Algo salió mal!', 'error');
  }

}
