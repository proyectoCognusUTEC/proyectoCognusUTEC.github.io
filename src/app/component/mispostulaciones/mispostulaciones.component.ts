import { Component, OnInit } from '@angular/core';
import { AccionesMedicoService } from 'src/app/services/acciones-medico.service';

@Component({
  selector: 'app-mispostulaciones',
  templateUrl: './mispostulaciones.component.html',
  styleUrls: ['./mispostulaciones.component.scss']
})
export class MispostulacionesComponent implements OnInit {

  guardias?: any[];

  constructor(private accionesMedicoService: AccionesMedicoService) { }

  ngOnInit(): void {
    this.accionesMedicoService.obtenerPostulaciones().subscribe(data=>{
      this.guardias = data;
      console.log(data);
    });
  }

  cancelarPostulacion(idguardia: number): void{
    this.accionesMedicoService.cancelarPostulacion(idguardia).subscribe(data=>{
      console.log(data);
      this.ngOnInit();
    });
  }

}
