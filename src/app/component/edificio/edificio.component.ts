import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EdificiosService } from 'src/app/services/edificios.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edificio',
  templateUrl: './edificio.component.html',
  styleUrls: ['./edificio.component.scss']
})
export class EdificioComponent implements OnInit {

  tipo: any;
  edificios?: any[];
  collectionSize!: number;
  page = 1;
  pageSize = 4;

  constructor(private edificiosService: EdificiosService, public router: Router,private tokenStorage: TokenStorageService) { }

  ngOnInit(): void {
    this.tipo=this.tokenStorage.getRoleName();
    this.getEdificios();
  }

  getEdificios(): void{
    this.edificiosService.obtenerEdificiosPaginacion(this.pageSize, this.page).subscribe(data=>{
      this.edificios=data.rows;
      this.collectionSize=data.count;
    });
  }

  // tslint:disable:typedef
  verSalas(idedificio: any){
    this.router.navigate(['/component/ubicaciones'], { queryParams: { idedificio } });
  }

  verDetalles(idedificio: any){
    this.router.navigate(['/component/perfiledificio'], { queryParams: { idedificio } });
  }


  editOn(medico: any): void{
    medico.editable=!medico.editable;
  }

  onEnter(e: any): void{
    e.target.blur();
  }

  actualizarEdificio(edificio: any): void{
    console.log("El Edificio es: ", edificio);
    this.edificiosService.editarEdificio(edificio.id, edificio.direccion, edificio.nombre, edificio.telefono).subscribe(data=>{
      this.showSuccessAlert();
    }, err=>{
      this.showErrorAlert();
    });
    edificio.editable=false;
  }

  borrarEdificio(id: number){
    this.edificiosService.eliminarEdificio(id).subscribe(data=>{
      console.log(data);
    },err=>{
      console.log(err);
    });
  }

  showSuccessAlert() {
    Swal.fire('OK', 'Edificio actualizado con exito!', 'success');
  }

  showErrorAlert() {
    Swal.fire('Error!', 'Algo salió mal!', 'error');
  }

  busqueda(event: any): void{
    console.log('Estoy buuscando', event.target.value);
    this.getEdificiosBusqueda(event.target.value);
  }
  getEdificiosBusqueda(filter: string): void{
    this.edificiosService.obtenerEdificiosBusqueda(filter, this.pageSize, this.page).subscribe(data=>{
      this.edificios=data.rows;
      console.log(data);
      this.collectionSize=data.count;
    });
  }

  refresh() {
    this.getEdificios();
  }

}
