import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZonaAbmComponent } from './zona-abm.component';

describe('ZonaAbmComponent', () => {
  let component: ZonaAbmComponent;
  let fixture: ComponentFixture<ZonaAbmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZonaAbmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ZonaAbmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
