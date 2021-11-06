import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EspecialidadAbmComponent } from './especialidad-abm.component';

describe('EspecialidadAbmComponent', () => {
  let component: EspecialidadAbmComponent;
  let fixture: ComponentFixture<EspecialidadAbmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EspecialidadAbmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EspecialidadAbmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
