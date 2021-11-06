import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ComponentsRoutes } from './component.routing';
import { NgbdCarouselBasicComponent } from './carousel/carousel.component';
import { NgbdDatepickerBasicComponent } from './datepicker/datepicker.component';
import { NgbdtimepickerBasicComponent } from './timepicker/timepicker.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { CardsComponent } from './card/card.component';
import { ToastComponent } from './toast/toast.component';
import { ToastsContainer } from './toast/toast-container';
import { MedicoComponent } from './medico/medico.component';
import { AdministrativoComponent } from './administrativo/administrativo.component';
import { AdministrativoAbmComponent } from './administrativo-abm/administrativo-abm.component';
import { MedicoAbmComponent } from './medico-abm/medico-abm.component';
import { SpinnerComponent } from '../shared/spinner.component';
import { AdministrativoAltaMasivaComponent } from './administrativo-alta-masiva/administrativo-alta-masiva.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { FlatpickrModule } from 'angularx-flatpickr';
import { EdificioComponent } from './edificio/edificio.component';
import { EdificioAbmComponent } from './edificio-abm/edificio-abm.component';
import { EspecialidadComponent } from './especialidad/especialidad.component';
import { EspecialidadAbmComponent } from './especialidad-abm/especialidad-abm.component';
import { GuardiaComponent } from './guardia/guardia.component';
import { GuardiaAbmComponent } from './guardia-abm/guardia-abm.component';
import { GuardiasdisponiblesComponent } from './guardiasdisponibles/guardiasdisponibles.component';
import { LoginComponent } from './login/login.component';
import { MisguardiasComponent } from './misguardias/misguardias.component';
import { PagoComponent } from './pago/pago.component';
import { NgxPayPalModule } from 'ngx-paypal';
import { PerfilEdificioComponent } from './perfil-edificio/perfil-edificio.component';
import { PerfilMedicoComponent } from './perfil-medico/perfil-medico.component';
import { PublicarguardiaComponent } from './publicarguardia/publicarguardia.component';
import { ServicioComponent } from './servicio/servicio.component';
import { ServicioAbmComponent } from './servicio-abm/servicio-abm.component';
import { ServiciodomicilioComponent } from './serviciodomicilio/serviciodomicilio.component';
import { ServiciodomicilioAbmComponent } from './serviciodomicilio-abm/serviciodomicilio-abm.component';
import { TiposervicioAbmComponent } from './tiposervicio-abm/tiposervicio-abm.component';
import { UbicacionComponent } from './ubicacion/ubicacion.component';
import { UbicacionAbmComponent } from './ubicacion-abm/ubicacion-abm.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { PerfilServicioComponent } from './perfil-servicio/perfil-servicio.component';
import { TiposervicioComponent } from './tiposervicio/tiposervicio.component';
import { ZonaComponent } from './zona/zona.component';
import { ZonaAbmComponent } from './zona-abm/zona-abm.component';
import { ZonaAltaMasivaComponent } from './zona-alta-masiva/zona-alta-masiva.component';
import { MedicoAltaMasivaComponent } from './medico-alta-masiva/medico-alta-masiva.component';
import { EspecialidadMedicoComponent } from './especialidad-medico/especialidad-medico.component';
import { EspecialidadAltaMasivaComponent } from './especialidad-alta-masiva/especialidad-alta-masiva.component';
import { EdificioAltaMasivaComponent } from './edificio-alta-masiva/edificio-alta-masiva.component';
import { TipoServicioAltaMasivaComponent } from './tipo-servicio-alta-masiva/tipo-servicio-alta-masiva.component';
import { MiPerfilComponent } from './mi-perfil/mi-perfil.component';
import { MispostulacionesComponent } from './mispostulaciones/mispostulaciones.component';
import { EventualidadComponent } from './eventualidad/eventualidad.component';
import { PaypalButtonComponent } from './paypal-button/paypal-button.component';
import { SuccessSuscriptionComponent } from './success-suscription/success-suscription.component';
import { PerfilAdministrativoComponent } from './perfil-administrativo/perfil-administrativo.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ComponentsRoutes),
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    CalendarModule.forRoot({ provide: DateAdapter, useFactory: adapterFactory }),
    FlatpickrModule.forRoot(),
    NgxPayPalModule,
    NgxSpinnerModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [
    NgbdCarouselBasicComponent,
    NgbdDatepickerBasicComponent,
    NgbdtimepickerBasicComponent,
    ButtonsComponent,
    CardsComponent,
    ToastComponent,
    ToastsContainer,
    MedicoComponent,
    MedicoAbmComponent,
    AdministrativoComponent,
    AdministrativoAbmComponent,
    SpinnerComponent,
    AdministrativoAltaMasivaComponent,
    DashboardComponent,
    EdificioComponent,
    EdificioAbmComponent,
    EspecialidadComponent,
    EspecialidadAbmComponent,
    GuardiaComponent,
    GuardiaAbmComponent,
    GuardiasdisponiblesComponent,
    LoginComponent,
    MisguardiasComponent,
    PagoComponent,
    PerfilEdificioComponent,
    PerfilMedicoComponent,
    PublicarguardiaComponent,
    ServicioComponent,
    ServicioAbmComponent,
    ServiciodomicilioComponent,
    ServiciodomicilioAbmComponent,
    TiposervicioAbmComponent,
    UbicacionComponent,
    UbicacionAbmComponent,
    PerfilServicioComponent,
    TiposervicioComponent,
    ZonaComponent,
    ZonaAbmComponent,
    ZonaAltaMasivaComponent,
    MedicoAltaMasivaComponent,
    EspecialidadMedicoComponent,
    EspecialidadAltaMasivaComponent,
    EdificioAltaMasivaComponent,
    TipoServicioAltaMasivaComponent,
    MiPerfilComponent,
    MispostulacionesComponent,
    EventualidadComponent,
    PaypalButtonComponent,
    SuccessSuscriptionComponent,
    PerfilAdministrativoComponent
  ],
  providers: [
    FlatpickrModule,
  ],
})
export class ComponentsModule {}
