import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TiposervicioComponent } from './tiposervicio.component';

describe('TiposervicioComponent', () => {
  let component: TiposervicioComponent;
  let fixture: ComponentFixture<TiposervicioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TiposervicioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TiposervicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
