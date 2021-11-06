import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UbicacionAbmComponent } from './ubicacion-abm.component';

describe('UbicacionAbmComponent', () => {
  let component: UbicacionAbmComponent;
  let fixture: ComponentFixture<UbicacionAbmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UbicacionAbmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UbicacionAbmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
