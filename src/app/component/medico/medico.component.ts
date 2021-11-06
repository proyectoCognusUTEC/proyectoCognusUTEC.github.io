import {Component, OnInit, PipeTransform} from '@angular/core';
import { MedicosService } from '../../services/medicos.service';
import {Observable} from 'rxjs';
import {FormControl} from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { TokenStorageService } from 'src/app/services/token-storage.service';

@Component({
  selector: 'app-medico',
  templateUrl: './medico.component.html',
  styleUrls: ['./medico.component.css']
})

export class MedicoComponent implements OnInit {
  // tslint:disable:max-line-length
  /* --- > Este componente representa un caso de paginacion y busqueda en una tabla. Existen dos colecciones(medicos y medicosFiltrados) que trabajan con un formato distinto.
  'medicos' es un arreglo que almacena los datos obtenidos del backend, y medicosFiltrados es la coleccion que se usa para el filtrado y paginacion de elementos en la pagina html.
  En la funcion ngOnInit() se cargan las colecciones(la coleccion 'medicosFiltrados' se llena sin aplicar ningun filtro).
  Cuando desde la pagina html se usa el campo de busqueda, se actualiza el valor de los filtros, que estan asignados en la propiedad filter: FormControl(), se filtra la coleccion 'medicos' asignando los resultados a la coleccion 'medicosFiltrados'
  En el caso de la paginacion, al momento de cambiar ya sea la cantidad de items o la pagina a visualizar, se ejecuta la funcion 'refresh()' que solicita al backend los datos necesarios basandose en el numero de pagina y cantidad de elementos.
  < --- */

  medicos?: any[];

  page = 1;
  pageSize = 4;
  collectionSize!: number;
  editable? = true;
  tipo: any;

  form: any = {
    email: null,
    telefono: null
  }

  currentFile!: File

  filter = new FormControl('');

  constructor(private medicosService: MedicosService, public router: Router,private tokenStorage: TokenStorageService) {
  }

  ngOnInit(): void{
    this.tipo=this.tokenStorage.getRoleName();
    this.getMedicos();
  }

  // tslint:disable:typedef
  refresh() {
    this.getMedicos();
  }

  busqueda(event: any): void{
    console.log('Estoy buuscando', event.target.value);
    this.getMedicosBusqueda(event.target.value);
  }

  getMedicos(): void{
    this.medicosService.getMedicosPaginacion(this.pageSize, this.page).subscribe(data=>{
      this.medicos=data.rows;
      this.collectionSize=data.count;
    });
  }
  getMedicosBusqueda(filter: string): void{
    this.medicosService.getMedicosBusqueda(filter, this.pageSize, this.page).subscribe(data=>{
      this.medicos=data.rows;
      console.log(data);
      this.collectionSize=data.count;
    });
  }

  perfil(id:any): void{
    this.router.navigate(['/component/perfilmedico'], { queryParams: { id } });
  }

  editOn(medico: any): void{
    medico.editable=!medico.editable;
  }

  onEnter(e: any): void{
    e.target.blur();
  }

  actualizarMedico(medico: any): void{
    console.log("El medico es: ", medico);
    this.medicosService.editarMedico(medico.id,medico.direccion,medico.fecha_nac,medico.Usuario.nombre,medico.Usuario.apellido,medico.Usuario.telefono, this.currentFile).subscribe(data=>{
      if(data.ok){
      this.getMedicos();
      this.showSuccessAlert();
     }
    }, err=>{
      this.showErrorAlert();
    });
    medico.editable=false;
  }

  showSuccessAlert() {
    Swal.fire('OK', 'Medico actualizado con exito!', 'success');
  }

  showErrorAlert() {
    Swal.fire('Error!', 'Algo salió mal!', 'error');
  }

}
