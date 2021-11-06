import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EspecialidadAltaMasivaComponent } from './especialidad-alta-masiva.component';

describe('EspecialidadAltaMasivaComponent', () => {
  let component: EspecialidadAltaMasivaComponent;
  let fixture: ComponentFixture<EspecialidadAltaMasivaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EspecialidadAltaMasivaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EspecialidadAltaMasivaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
