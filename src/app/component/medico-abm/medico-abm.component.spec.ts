import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicoAbmComponent } from './medico-abm.component';

describe('MedicoAbmComponent', () => {
  let component: MedicoAbmComponent;
  let fixture: ComponentFixture<MedicoAbmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedicoAbmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicoAbmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
