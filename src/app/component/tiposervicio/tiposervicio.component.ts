import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { TiposServicioService } from 'src/app/services/tiposervicio.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-tiposervicio',
  templateUrl: './tiposervicio.component.html',
  styleUrls: ['./tiposervicio.component.scss']
})
export class TiposervicioComponent implements OnInit {

  tipoServicios?: any[];
  tipo?: any;
  editable? = true;
  page = 1;
  pageSize = 4;
  collectionSize!: number;

  constructor(private tipoServicioService : TiposServicioService, public router: Router, private tokenStorage: TokenStorageService) { }

  ngOnInit(): void {
    this.tipo = this.tokenStorage.getRoleName()
    this.getTiposServicio();
  }

  refresh() {
    this.getTiposServicio();
  }

  getTiposServicio() : void{
    this.tipoServicioService.getTiposPaginacion(this.pageSize, this.page).subscribe(data=>{
      console.log(data)
      this.tipoServicios=data.rows;
      this.collectionSize=data.count;
    })
  }

  busqueda(event: any): void{
    console.log('Estoy buuscando', event.target.value);
    this.getTipoServicioBusqueda(event.target.value);
  }

  getTipoServicioBusqueda(filter: string): void{
    this.tipoServicioService.getTipoServicioBusqueda(filter, this.pageSize, this.page).subscribe(data=>{
      this.tipoServicios=data.rows;
      console.log(data);
      this.collectionSize=data.count;
    });
  }

  agregar(): void{
    console.log('AGREGANDO');
    this.router.navigate(['/especialidadesabm']);
  }

  eliminar(id: number): void{
    this.tipoServicioService.eliminarTipoServicio(id).subscribe(data=>{
      console.log(data);
      this.refresh();
    });
  }

  editar(esp : any): void{
    console.log('Salgo para el servicio ' + esp.id);
    this.tipoServicioService.actualizarTipoServicio(esp.id, esp.nombre).subscribe(data=>{
      this.getTiposServicio();
      this.showSuccessAlert();
    }, err=>{
      this.showErrorAlert();
    });
    esp.editable = false;
  }

  editOn(esp: any): void{
    esp.editable=!esp.editable;
  }

  onEnter(e: any): void{
    e.target.blur();
  }

  showSuccessAlert() {
    Swal.fire('OK', 'Tipo de servicio actualizado con exito!', 'success');
  }

  showErrorAlert() {
    Swal.fire('Error!', 'Algo salió mal!', 'error');
  }

}
