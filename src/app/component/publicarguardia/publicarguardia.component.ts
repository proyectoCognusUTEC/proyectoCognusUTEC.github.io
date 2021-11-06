import {Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {CalendarEvent, CalendarEventAction, CalendarEventTimesChangedEvent, CalendarView} from 'angular-calendar';
import {MedicosService} from '../../services/medicos.service';
import {Subject} from 'rxjs';
import {endOfDay, isSameDay, isSameMonth, startOfDay} from 'date-fns';
import {ModalDismissReasons, NgbModal, NgbModalOptions} from '@ng-bootstrap/ng-bootstrap';
import {GuardiasService} from '../../services/guardias.service';
import {ActivatedRoute} from '@angular/router';
import Swal from 'sweetalert2';
import { ThrowStmt } from '@angular/compiler';
import { ServiciosService } from 'src/app/services/servicios.service';

const colors: any = {
  red: {
    primary: '#ad2121',
    secondary: '#FAE3E3',
  },
  blue: {
    primary: '#1e90ff',
    secondary: '#D1E8FF',
  },
  black:{
    primary: '#000000',
    secondary: '#000000',
  },
  yellow: {
    primary: '#e3bc08',
    secondary: '#FDF1BA',
  },
};

@Component({
  selector: 'app-publicarguardia',
  templateUrl: './publicarguardia.component.html',
  styleUrls: ['./publicarguardia.component.scss']
})
export class PublicarguardiaComponent implements OnInit {

  @ViewChild('modalContent', { static: true })
  modalContent!: TemplateRef<any>;

  view: CalendarView = CalendarView.Month;

  viewDate: Date = new Date();

  CalendarView = CalendarView;

  especialidades?: any[];

  refresh: Subject<any> = new Subject();

  events: CalendarEvent[] = [

  ];

  cuposFaltantes?: any[];

  activeDayIsOpen = true;

  modalData!: {
    action: string;
    event: CalendarEvent;
  };


  actions: CalendarEventAction[] = [
    {
      label: '<i class="fas fa-fw fa-pencil-alt"></i>',
      a11yLabel: 'Edit',
      onClick: ({ event }: { event: CalendarEvent }): void => {
        this.handleEvent('Edited', event);
      },
    },
    {
      label: '<i class="fas fa-fw fa-trash-alt"></i>',
      a11yLabel: 'Delete',
      onClick: ({ event }: { event: CalendarEvent }): void => {
        this.events = this.events.filter((iEvent) => iEvent !== event);
        this.handleEvent('Deleted', event);
      },
    },
  ];
  // tslint:disable:typedef

  medicospostulados?: any[];
  medicosasignados?: any[];
  guardias?: any[];
  selectedguardia?: any;
  guardia?:any;
  servicio?:any;
  title = 'ng-bootstrap-modal-demo';
  closeResult!: string;
  public isCollapsed = true;
  modalOptions: NgbModalOptions;
  constructor(private serviciosService: ServiciosService,private medicosService: MedicosService, private modal: NgbModal, private guardiasService: GuardiasService,private route: ActivatedRoute, private modalService: NgbModal) {
    this.modalOptions = {
      backdrop:'static',
      backdropClass:'customBackdrop'
    };
  }

  open(content: any): void {
    this.modalService.open(content, this.modalOptions).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

  ngOnInit(): void {
    this.guardiasService.getGuardias().subscribe(data => {
      this.guardias = data;
      console.log(this.guardias);
      if (this.guardias){
        for(const guardia of this.guardias){
          this.events = [
            ...this.events,
            {
              id: guardia.id,
              title: guardia.descripcion,
              start: new Date(guardia.fechainicio),
              end: new Date(guardia.fechafin),
              color: colors.yellow,
              draggable: true,
              resizable: {
                beforeStart: true,
                afterEnd: true,
              },
            },
          ];
        }
      }
    });
  
  }


  dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void {
    if (isSameMonth(date, this.viewDate)) {
      this.activeDayIsOpen = !((isSameDay(this.viewDate, date) && this.activeDayIsOpen) ||
        events.length === 0);
      this.viewDate = date;
    }
  }

  eventTimesChanged({event, newStart, newEnd}: CalendarEventTimesChangedEvent): void {
    if(event.id && newStart && newEnd){
      this.guardiasService.actualizarGuardia(event.id, newStart.toString(), newEnd.toString()).subscribe(data=>{
        console.log(data);
      });
    }
    this.events = this.events.map((iEvent) => {
      if (iEvent === event) {
        return {
          ...event,
          start: newStart,
          end: newEnd,
        };
      }
      return iEvent;
    });
    this.handleEvent('Dropped or resized', event);
  }

  handleEvent(action: string, event: CalendarEvent): void {
    this.modal.open(this.modalContent, { size: 'lg' });
  }

  

  addEvent(): void {
    this.events = [
      ...this.events,
      {
        title: 'New event',
        start: startOfDay(new Date()),
        end: endOfDay(new Date()),
        color: colors.red,
        draggable: true,
        resizable: {
          beforeStart: true,
          afterEnd: true,
        },
      },
    ];
  }

  deleteEvent(eventToDelete: CalendarEvent) {
    this.events = this.events.filter((event) => event !== eventToDelete);
  }

  setView(view: CalendarView) {
    this.view = view;
  }

  click(event: any){
    if(event.id && event.start && event.end){
      this.guardiasService.actualizarGuardia(event.id, event.start.toString(), event.end.toString()).subscribe(data=>{
        console.log(data);
      });
    }
  }

  changeColor(event: any){
    console.log(event);
  }

  closeOpenMonthViewDay() {
    this.activeDayIsOpen = false;
  }

  quitarAsignMedico(idmedico: number): void{
    this.guardiasService.quitarAsignMedico(this.selectedguardia.id, idmedico).subscribe(data=>{
      console.log(data);
      this.actualizarMedicos();
    });
  }

  actualizarMedicos(): void{
    this.guardiasService.obtenerMedicosAsignados(this.selectedguardia.id).subscribe(data2=>{
      this.medicosasignados=data2;
      console.log("LOS MEDICOS SON: ",this.medicosasignados);
    });
    this.guardiasService.obtenerMedicosPostulados(this.selectedguardia.id).subscribe(data=>{
      if(data){
        this.medicospostulados=data;
        //esto porque no pude ordenarlo en el back
        this.medicospostulados!.sort((a, b) => (a.GuardiaMedicoPostulacion.ponderacion > b.GuardiaMedicoPostulacion.ponderacion ? -1 : 1)); 
      }
      else{
        this.medicospostulados=[];
      }
      console.log(data);
    });
    this.guardiasService.obtenerCuposFaltantes(this.selectedguardia.id).subscribe(data=>{
      this.cuposFaltantes = data;
      console.log(data);
    });
  }

  selectedGuardia(event: any): void{
    this.selectedguardia=event;
    const guardiaActual = this.guardias?.filter(guardia=> guardia.id==event.id);
    this.guardia = guardiaActual![0];
    this.serviciosService.getServicio(guardiaActual![0].idservicio).subscribe(data=>{
      this.servicio=data.servicioLocal;
      console.log("LA GUARDIA ACTUAL ES: ", guardiaActual![0], " EL SERVICIO: ", this.servicio);
    });
    this.especialidades = guardiaActual![0].Servicio!.Especialidads;
 
    this.actualizarMedicos();
  }

  agregarMedicosGuardia(): string{
    const medicospostulados: number[] = [];
    this.medicospostulados?.forEach(med=>{
      if(med.seleccionado){
        medicospostulados.push(med.id);
      }
    });
    if(this.selectedguardia){
      this.guardiasService.asignarMedicosGuardia(this.selectedguardia.id,medicospostulados).subscribe(data=>{
        console.log(data);
        this.actualizarMedicos();
      }, error => {
        console.log(error);
        this.showErrorAlert(error.error.message);
      });
    }
    return 'Save click';
  }

  showSuccessAlert() {
    Swal.fire('OK', 'Exito', 'success');
  }

  showErrorAlert(messages: string) {
    Swal.fire('Error!', messages, 'error');
  }

  cerrarGuardia(): void{
    console.log("ACA ESTOY ENTRANDO");
    this.guardiasService.cerrarGuardia(this.selectedguardia.id).subscribe(data=>{
      console.log(data);
      this.showSuccessAlert();
    },err=>{
      console.log(err);
      this.showErrorAlert(err.error.message);
    });
  }

}
