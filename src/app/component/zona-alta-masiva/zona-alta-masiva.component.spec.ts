import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZonaAltaMasivaComponent } from './zona-alta-masiva.component';

describe('ZonaAltaMasivaComponent', () => {
  let component: ZonaAltaMasivaComponent;
  let fixture: ComponentFixture<ZonaAltaMasivaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZonaAltaMasivaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ZonaAltaMasivaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
