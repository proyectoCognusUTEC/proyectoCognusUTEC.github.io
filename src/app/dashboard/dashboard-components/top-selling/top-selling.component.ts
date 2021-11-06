import { Component, OnInit } from '@angular/core';
import { EstadisticasService } from 'src/app/services/estadisticas.service';
import {MedStat,TopSelling} from './top-selling-data';

@Component({
  selector: 'app-top-selling',
  templateUrl: './top-selling.component.html',
  styleUrls: ['./top-selling.component.css']
})
export class TopSellingComponent implements OnInit {

  medicos?:any[];

  constructor(private service: EstadisticasService) { 

  }

  marco?: string;

  ngOnInit(): void {
   this.obtenerMedicos("TOTAL");
  }

  test(e:any){
    console.log("EL EVENTO ES: ",e);
    this.obtenerMedicos(e);
  }

  obtenerMedicos(marco: string): void{
    this.service.obtenerHorasMedicos(marco).subscribe(data=>{
      this.medicos=data;
      console.log(data);
    });
  }

}
