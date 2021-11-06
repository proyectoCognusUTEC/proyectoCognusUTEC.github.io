import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicoAltaMasivaComponent } from './medico-alta-masiva.component';

describe('MedicoAltaMasivaComponent', () => {
  let component: MedicoAltaMasivaComponent;
  let fixture: ComponentFixture<MedicoAltaMasivaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedicoAltaMasivaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicoAltaMasivaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
