import {Component, OnInit, PipeTransform} from '@angular/core';
import {FormControl} from '@angular/forms';
import {ServiciosService} from '../../services/servicios.service';
import {DecimalPipe} from '@angular/common';
import {ActivatedRoute, Router} from '@angular/router';
import {AccionesMedicoService} from '../../services/acciones-medico.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-misguardias',
  templateUrl: './misguardias.component.html',
  styleUrls: ['./misguardias.component.scss']
})
export class MisguardiasComponent implements OnInit {


  guardias?: any[] =[];



  page = 1;
  pageSize = 4;
  //collectionSize!: number;

  filter = new FormControl('');

  // tslint:disable:max-line-length
  constructor(private accionesMedicoService: AccionesMedicoService, private servicioService: ServiciosService,private pipe: DecimalPipe, private route: ActivatedRoute, public router: Router) {

  }

  ngOnInit(): void {
    this.accionesMedicoService.obtenerGuardias().subscribe(data=>{
      console.log(data);
      if(data){
        this.guardias=data;
      }
    });
  }

  ofrecerliberar(idguardia:number):void{
    Swal.fire({
      title: 'Esta seguro?',
      text: "Quedara pendiente a que se encuentre sustituto",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Entendido'
    }).then((result) => {
      if (result.isConfirmed) {
        this.accionesMedicoService.ofrecerliberar(idguardia).subscribe(data=>{
          console.log(data);
        })
        Swal.fire(
          'Ofrecida a liberacion',
          'Su postulacion a pasado a estado de liberacion',
          'success'
        )
      }
    })
  }

  

}
