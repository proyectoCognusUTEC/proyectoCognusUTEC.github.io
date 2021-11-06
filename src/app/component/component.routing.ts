import { Routes } from '@angular/router';

import { NgbdCarouselBasicComponent } from './carousel/carousel.component';
import { NgbdDatepickerBasicComponent } from './datepicker/datepicker.component';
import { NgbdtimepickerBasicComponent } from './timepicker/timepicker.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { CardsComponent } from './card/card.component';
import { ToastComponent } from './toast/toast.component';
import { MedicoComponent } from './medico/medico.component';
import { AdministrativoComponent } from './administrativo/administrativo.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EdificioComponent } from './edificio/edificio.component';
import { EspecialidadComponent } from './especialidad/especialidad.component';
import { GuardiaComponent } from './guardia/guardia.component';
import { LoginComponent } from './login/login.component';
import { MisguardiasComponent } from './misguardias/misguardias.component';
import { PagoComponent } from './pago/pago.component';
import { PerfilEdificioComponent } from './perfil-edificio/perfil-edificio.component';
import { PerfilMedicoComponent } from './perfil-medico/perfil-medico.component';
import { PublicarguardiaComponent } from './publicarguardia/publicarguardia.component';
import { ServicioComponent } from './servicio/servicio.component';
import { ServiciodomicilioComponent } from './serviciodomicilio/serviciodomicilio.component';
import { TiposervicioAbmComponent } from './tiposervicio-abm/tiposervicio-abm.component';
import { UbicacionComponent } from './ubicacion/ubicacion.component';
import { GuardiasdisponiblesComponent } from './guardiasdisponibles/guardiasdisponibles.component';
import { PerfilServicioComponent } from './perfil-servicio/perfil-servicio.component';
import { TiposervicioComponent } from './tiposervicio/tiposervicio.component';
import { ZonaComponent } from './zona/zona.component';
import { MiPerfilComponent } from './mi-perfil/mi-perfil.component';
import { MispostulacionesComponent } from './mispostulaciones/mispostulaciones.component';
import { EventualidadComponent } from './eventualidad/eventualidad.component';
import { SuccessSuscriptionComponent } from './success-suscription/success-suscription.component';
import { PerfilAdministrativoComponent } from './perfil-administrativo/perfil-administrativo.component';
import { AdminGuard } from '../guards/admin.guard';
import { MedicoGuard } from '../guards/medico.guard';
import { AdministrativoGuard } from '../guards/administrativo.guard';
import { VisitanteGuard } from '../guards/visitante.guard';
import { AdminAdministrativoGuard } from '../guards/admin-administrativo.guard';

export const ComponentsRoutes: Routes = [
	{
		path: '',
		children: [
			{
				path: 'card',
				component: CardsComponent,
				data: {
					title: 'Cards',
					urls: [
						{ title: 'ngComponent' },
						{ title: 'Cards' }
					]
				}
			},
			{
				path: 'carousel',
				component: NgbdCarouselBasicComponent,
				data: {
					title: 'Carousel',
					urls: [
						{ title: 'ngComponent' },
						{ title: 'Carousel' }
					]
				}
			},
			{
				path: 'datepicker',
				component: NgbdDatepickerBasicComponent,
				data: {
					title: 'Datepicker',
					urls: [
						{ title: 'ngComponent' },
						{ title: 'Datepicker' }
					]
				}
			},
			{
				path: 'timepicker',
				component: NgbdtimepickerBasicComponent,
				data: {
					title: 'Timepicker',
					urls: [
						{ title: 'ngComponent' },
						{ title: 'Timepicker' }
					]
				}
			},
			{
				path: 'buttons',
				component: ButtonsComponent,
				data: {
					title: 'Button',
					urls: [
						{ title: 'ngComponent' },
						{ title: 'Button' }
					]
				}
			},
			{
				path: 'toast',
				component: ToastComponent,
				data: {
					title: 'Toast',
				}
			},
			{
				path: 'medicos',
				component: MedicoComponent,
				canActivate: [AdminAdministrativoGuard]

			},
			{
				path: 'administrativos',
				component: AdministrativoComponent,
				canActivate: [AdminAdministrativoGuard]

			},
			{
				path: 'panel',
				component: DashboardComponent,
				canActivate: [AdminAdministrativoGuard]
			},
			{
				path: 'edificios',
				component: EdificioComponent,
				canActivate: [AdminGuard]
			},
			{
				path: 'especialidades',
				component: EspecialidadComponent,
				canActivate: [AdminGuard]
			},
			{
				path: 'guardias',
				component: GuardiaComponent,
				canActivate: [AdminAdministrativoGuard]

			},
			{
				path: 'login',
				component: LoginComponent,
				canActivate: [VisitanteGuard]
			},
			{
				path: 'misguardias',
				component: MisguardiasComponent,
				canActivate: [MedicoGuard]
			},
			{
				path: 'pago',
				component: PagoComponent,
				canActivate: [VisitanteGuard]
			},
			{
				path: 'perfiledificio',
				component: PerfilEdificioComponent
			},
			{
				path: 'perfilmedico',
				component: PerfilMedicoComponent,
				canActivate: [AdminAdministrativoGuard]

			},
			{
				path: 'perfiladministrativo',
				component: PerfilAdministrativoComponent,
				canActivate: [AdminAdministrativoGuard]

			},
			{
				path: 'publicarguardia',
				component: PublicarguardiaComponent,
				canActivate: [AdminAdministrativoGuard]
			},
			{
				path: 'servicios',
				component: ServicioComponent,
				canActivate: [AdminAdministrativoGuard]


			},
			{
				path: 'serviciosdomicilio',
				component: ServiciodomicilioComponent,
				canActivate: [AdminAdministrativoGuard]

			},
			{
				path: 'tiposervicioabm',
				component: TiposervicioAbmComponent,
				canActivate: [AdminGuard]
			},
			{
				path: 'tiposervicio',
				component: TiposervicioComponent,
				canActivate: [AdminGuard]
			},
			{
				path: 'ubicaciones',
				component: UbicacionComponent,
				canActivate: [AdminGuard]
			},
			{
				path: 'guardiasdisponibles',
				component: GuardiasdisponiblesComponent,
				canActivate: [MedicoGuard]
			},
			{
				path: 'misguardias',
				component: MisguardiasComponent,
				canActivate: [MedicoGuard]
			},
			{
				path: 'eventualidades',
				component: EventualidadComponent,
				canActivate: [MedicoGuard]
			},
			{
				path: 'servicio',
				component: PerfilServicioComponent,
				canActivate: [AdminAdministrativoGuard]

			},
			{
				path: 'zonas',
				component: ZonaComponent,
				canActivate: [AdminGuard]
			},
			{
				path: 'miperfil',
				component: MiPerfilComponent,
				canActivate: [MedicoGuard]
			},
			{
				path: 'mispostulaciones',
				component: MispostulacionesComponent,
				canActivate: [MedicoGuard]
			},
			{
				path: 'success',
				component: SuccessSuscriptionComponent
			}
		]
	}
];
