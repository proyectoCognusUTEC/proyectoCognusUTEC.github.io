import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TiposervicioAbmComponent } from './tiposervicio-abm.component';

describe('TiposervicioAbmComponent', () => {
  let component: TiposervicioAbmComponent;
  let fixture: ComponentFixture<TiposervicioAbmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TiposervicioAbmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TiposervicioAbmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
