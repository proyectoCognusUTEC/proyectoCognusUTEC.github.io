import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdificioAltaMasivaComponent } from './edificio-alta-masiva.component';

describe('EdificioAltaMasivaComponent', () => {
  let component: EdificioAltaMasivaComponent;
  let fixture: ComponentFixture<EdificioAltaMasivaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EdificioAltaMasivaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EdificioAltaMasivaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
