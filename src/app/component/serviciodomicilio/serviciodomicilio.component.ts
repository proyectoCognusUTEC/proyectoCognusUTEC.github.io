import { DecimalPipe } from '@angular/common';
import { Component, OnInit, PipeTransform } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { ServiciosService } from 'src/app/services/servicios.service';

@Component({
  selector: 'app-serviciodomicilio',
  templateUrl: './serviciodomicilio.component.html',
  styleUrls: ['./serviciodomicilio.component.scss']
})
export class ServiciodomicilioComponent implements OnInit {

  servicios?: any[];
  serviciosFiltrados$!: Observable<any[]>;

  page = 1;
  pageSize = 4;
  collectionSize!: number;

  filter = new FormControl('');

  constructor(private serviciosService: ServiciosService,private pipe: DecimalPipe,public router: Router) { }

  ngOnInit(): void {
    this.serviciosService.getServiciosDomicilioPaginacion(this.pageSize, this.page).subscribe(data=>{
      this.servicios=data.rows;
      console.log(this.servicios);
      this.collectionSize=data.count;
      this.serviciosFiltrados$ = this.filter.valueChanges.pipe(
        startWith(''),
        map(text => this.search(text, this.pipe))
      );
      console.log(this.serviciosFiltrados$);
    });
  }
 
 // tslint:disable:typedef
  refresh() {
    this.serviciosService.getServiciosDomicilioPaginacion(this.pageSize, this.page).subscribe(data=>{
      this.servicios=data.rows;
      this.collectionSize=data.count;
      this.serviciosFiltrados$ = this.filter.valueChanges.pipe(
        startWith(''),
        map(text => this.search(text, this.pipe))
      );
    });
  }

  search(text: string, pipe: PipeTransform): any[] {
    console.log(text);
    if(this.servicios!==undefined){
      return this.servicios.filter(country => {
        const term = text.toLowerCase();
        console.log(country);
        return country.Zona.pais.toLowerCase().includes(term)
            || pipe.transform(country.Servicio.cant_medicos).includes(term)
            || pipe.transform(country.Servicio.duracion).includes(term)
            || country.Zona.ciudad.toLowerCase().includes(term)
            || country.Zona.barrio.toLowerCase().includes(term);
      });
    }
    else{
      return [];
    }
  } 

  verGuardias(idservicio: any){
    this.router.navigate(['/component/guardias'], { queryParams: { idservicio } });
  }
}
