import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiciodomicilioAbmComponent } from './serviciodomicilio-abm.component';

describe('ServiciodomicilioAbmComponent', () => {
  let component: ServiciodomicilioAbmComponent;
  let fixture: ComponentFixture<ServiciodomicilioAbmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiciodomicilioAbmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiciodomicilioAbmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
