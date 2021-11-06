import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiciodomicilioComponent } from './serviciodomicilio.component';

describe('ServiciodomicilioComponent', () => {
  let component: ServiciodomicilioComponent;
  let fixture: ComponentFixture<ServiciodomicilioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiciodomicilioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiciodomicilioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
