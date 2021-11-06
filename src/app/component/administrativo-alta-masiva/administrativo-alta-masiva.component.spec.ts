import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministrativoAltaMasivaComponent } from './administrativo-alta-masiva.component';

describe('AdministrativoAltaMasivaComponent', () => {
  let component: AdministrativoAltaMasivaComponent;
  let fixture: ComponentFixture<AdministrativoAltaMasivaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdministrativoAltaMasivaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdministrativoAltaMasivaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
