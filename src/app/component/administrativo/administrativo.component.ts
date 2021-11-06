import { DecimalPipe } from '@angular/common';
import { Component, OnInit, PipeTransform } from '@angular/core';
import { FormControl } from '@angular/forms';
import {map, startWith} from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AdministrativosService } from 'src/app/services/administrativos.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';

@Component({
  selector: 'app-administrativo',
  templateUrl: './administrativo.component.html',
  styleUrls: ['./administrativo.component.scss']
})
export class AdministrativoComponent implements OnInit {

  usuarios?: any[];
  usuariosFiltrados$!: Observable<any[]>;

  page = 1;
  pageSize = 4;
  collectionSize!: number;
  tipo: any;


  filter = new FormControl('');

  constructor(private administrativosService: AdministrativosService, private pipe: DecimalPipe, public router: Router, private tokenStorage: TokenStorageService) {
   }

  ngOnInit(): void{
    // this.administrativosService.getAdministrativos().subscribe(data=>{
    //   this.usuarios=data.data;
    //   console.log(this.usuarios);
    // });
    this.tipo=this.tokenStorage.getRoleName();
    this.getAdministrativos();
  }

  refresh(): void {
    this.getAdministrativos();
  }

  search(text: string, pipe: PipeTransform): any[] {
    if(this.usuarios!==undefined){
      return this.usuarios.filter(country => {
        const term = text.toLowerCase();
        return country.Usuario.nombre.toLowerCase().includes(term)
          || country.Usuario.apellido.includes(term)
          || country.Usuario.email.toLowerCase().includes(term);
      });
    }
    else{
      return [];
    }
  }

  busqueda(event: any): void{
    // console.log('Estoy buuscando', event.target.value);
    this.getAdministrativosBusqueda(event.target.value);
  }

  getAdministrativos(): void{
    this.administrativosService.getAdministrativosPaginacion(this.pageSize, this.page).subscribe(data=>{
      this.usuarios=data.rows;
      this.collectionSize=data.count;
      this.usuariosFiltrados$ = this.filter.valueChanges.pipe(
        startWith(''),
        map(text => this.search(text, this.pipe))
      );
    });
  }

  getAdministrativosBusqueda(filter: string): void{
    this.administrativosService.getAdministrativosBusqueda(filter, this.pageSize, this.page).subscribe(data=>{
      this.usuarios=data.rows;
      this.collectionSize=data.count;
      this.usuariosFiltrados$ = this.filter.valueChanges.pipe(
        startWith(''),
        map(text => this.search(text, this.pipe))
      );
    });
  }

  editar(id:any, nombre:any, apellido:any, telefono:any): void{
    this.router.navigate(['/editarAdministrativo'], { queryParams: { id, nombre, apellido, telefono } });
  }

  editOn(admin: any): void{
    admin.editable=!admin.editable;
  }

  onEnter(e: any): void{
    e.target.blur();
  }

  actualizarAdmin(admin: any): void{
    console.log("El admin es: ", admin);
    this.administrativosService.editarAdministrativo(admin.id,admin.Usuario.apellido,admin.Usuario.nombre,admin.Usuario.telefono).subscribe(data=>{
      this.getAdministrativos();
      this.showSuccessAlert();
    }, err=>{
      this.showErrorAlert();
    });
    admin.editable=false;
  }

  perfil(id:any): void{
    this.router.navigate(['/component/perfiladministrativo'], { queryParams: { id } });
  }

  showSuccessAlert() {
    Swal.fire('OK', 'Administrativo actualizado con exito!', 'success');
  }

  showErrorAlert() {
    Swal.fire('Error!', 'Algo salió mal!', 'error');
  }


}
