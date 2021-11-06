import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoServicioAltaMasivaComponent } from './tipo-servicio-alta-masiva.component';

describe('TipoServicioAltaMasivaComponent', () => {
  let component: TipoServicioAltaMasivaComponent;
  let fixture: ComponentFixture<TipoServicioAltaMasivaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TipoServicioAltaMasivaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoServicioAltaMasivaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
