import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdificioAbmComponent } from './edificio-abm.component';

describe('EdificioAbmComponent', () => {
  let component: EdificioAbmComponent;
  let fixture: ComponentFixture<EdificioAbmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EdificioAbmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EdificioAbmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
