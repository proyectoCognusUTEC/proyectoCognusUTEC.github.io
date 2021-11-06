import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { EspecialidadesService } from 'src/app/services/especialidades.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-especialidad',
  templateUrl: './especialidad.component.html',
  styleUrls: ['./especialidad.component.scss']
})
export class EspecialidadComponent implements OnInit {

  especialidades?: any[];
  tipo?: any;
  editable? = true;
  page = 1;
  pageSize = 4;
  collectionSize!: number;

  constructor(private especialidadService: EspecialidadesService, public router: Router, private tokenStorage: TokenStorageService) { }

  ngOnInit(): void {
    this.tipo = this.tokenStorage.getRoleName()
    this.getespecialidades();
  }

  getespecialidades(): void{
    this.especialidadService.getEspecialidadesPaginacion(this.pageSize, this.page).subscribe(data=>{
      this.especialidades=data.rows;
      this.collectionSize=data.count;
    })
  }

  refresh() {
    this.getespecialidades();
  }

  busqueda(event: any): void{
    console.log('Estoy buuscando', event.target.value);
    this.getEspecialidadesBusqueda(event.target.value);
  }

  getEspecialidadesBusqueda(filter: string): void{
    this.especialidadService.getEspecialidadesBusqueda(filter, this.pageSize, this.page).subscribe(data=>{
      this.especialidades=data.rows;
      this.collectionSize=data.count;
    });
  }

  agregar(): void{
    console.log('AGREGANDO');
    this.router.navigate(['/especialidadesabm']);
  }

  eliminar(idespecialidad: number): void{
    this.especialidadService.eliminarEspecialidad(idespecialidad).subscribe(data=>{
      console.log(data);
    });
  }

  editar(esp : any): void{
    console.log('Salgo para el servicio');
    this.especialidadService.actualizarEspecialidad(esp.id, esp.nombre, esp.certificacion).subscribe(data=>{
      this.getespecialidades();
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
    Swal.fire('OK', 'Especialidad actualizada con exito!', 'success');
  }

  showErrorAlert() {
    Swal.fire('Error!', 'Algo salió mal!', 'error');
  }

}

