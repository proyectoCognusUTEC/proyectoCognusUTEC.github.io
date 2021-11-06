import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicioAbmComponent } from './servicio-abm.component';

describe('ServicioAbmComponent', () => {
  let component: ServicioAbmComponent;
  let fixture: ComponentFixture<ServicioAbmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicioAbmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicioAbmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
