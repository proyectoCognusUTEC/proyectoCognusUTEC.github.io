import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiciosService } from 'src/app/services/servicios.service';

@Component({
  selector: 'app-perfil-servicio',
  templateUrl: './perfil-servicio.component.html',
  styleUrls: ['./perfil-servicio.component.scss']
})
export class PerfilServicioComponent implements OnInit {

  servicio: any;

  constructor(private servicioService: ServiciosService, public router: Router, private route: ActivatedRoute) { 
    this.route.queryParams.subscribe(params => {
      const id =params.id;
      this.servicioService.getServicio(id).subscribe(data=>{
        this.servicio = data;
        console.log(this.servicio);
      })
    });
  }

  ngOnInit(): void {

  }

}
