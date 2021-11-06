import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MedicosService } from 'src/app/services/medicos.service';

@Component({
  selector: 'app-perfil-medico',
  templateUrl: './perfil-medico.component.html',
  styleUrls: ['./perfil-medico.component.scss']
})
export class PerfilMedicoComponent implements OnInit {

  medico?: any;

  especialidades?: any;

  constructor(private route: ActivatedRoute, private medicoService: MedicosService, public router: Router) {
    this.route.queryParams.subscribe(params => {
      //console.log('El medico es: ' + params.id );
      const id =params.id;
      this.obtenerMedico(id);
    });
   }

   obtenerMedico(id: number): void{
    this.medicoService.obtenerMedico(id).subscribe(data=>{
      this.medico=data;
      this.especialidades=this.medico.Especialidads.length;
      console.log(this.especialidades)
    });
   }

  ngOnInit(): void {
  }

  editar(id: any, nombre: any, apellido: any, telefono: any, direccion: any, fecha_nac: any): void{
    this.router.navigate(['/editarMedico'], { queryParams: { id, nombre, apellido, direccion, telefono, fecha_nac } });
  }

}
