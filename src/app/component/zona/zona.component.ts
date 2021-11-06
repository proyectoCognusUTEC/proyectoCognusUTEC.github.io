import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import { ZonasService } from 'src/app/services/zonas.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-zona',
  templateUrl: './zona.component.html',
  styleUrls: ['./zona.component.scss']
})
export class ZonaComponent implements OnInit {

  zonas?: any[];
  tipo?: any;
  editable? = true;
  page = 1;
  pageSize = 4;
  collectionSize!: number;

  constructor(private zonaService : ZonasService, public router: Router, private tokenStorage: TokenStorageService) { }

  ngOnInit(): void {
    this.tipo = this.tokenStorage.getRoleName()
    this.getZonas();
  }

  refresh() {
    this.getZonas();
  }

  getZonas() : void{
    this.zonaService.getZonasPaginacion(this.pageSize, this.page).subscribe(data=>{
      console.log(data)
      this.zonas=data.rows;
      this.collectionSize=data.count;
    })
  }

  busqueda(event: any): void{
    console.log('Estoy buuscando', event.target.value);
    this.getZonasBusqueda(event.target.value);
  }

  getZonasBusqueda(filter: string): void{
    this.zonaService.getZonasBusqueda(filter, this.pageSize, this.page).subscribe(data=>{
      this.zonas=data.rows;
      this.collectionSize=data.count;
    });
  }

  // agregar(): void{
  //   console.log('AGREGANDO');
  //   this.router.navigate(['/especialidadesabm']);
  // }

  eliminar(id: number): void{
    this.zonaService.eliminarZona(id).subscribe(data=>{
      console.log(data);
      this.refresh();
    });
  }

  
  editar(esp : any): void{
    console.log('Salgo para el servicio ' + esp.id);
    this.zonaService.actualizarZona(esp.id, esp.pais, esp.departamento, esp.localidad).subscribe(data=>{
      this.getZonas();
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
    Swal.fire('OK', 'Zona actualizada con exito!', 'success');
  }

  showErrorAlert() {
    Swal.fire('Error!', 'Algo salió mal!', 'error');
  }

}
