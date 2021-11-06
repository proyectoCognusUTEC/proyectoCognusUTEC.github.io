import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministrativoAbmComponent } from './administrativo-abm.component';

describe('AdministrativoAbmComponent', () => {
  let component: AdministrativoAbmComponent;
  let fixture: ComponentFixture<AdministrativoAbmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdministrativoAbmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdministrativoAbmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
