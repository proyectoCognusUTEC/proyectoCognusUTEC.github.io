import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicarguardiaComponent } from './publicarguardia.component';

describe('PublicarguardiaComponent', () => {
  let component: PublicarguardiaComponent;
  let fixture: ComponentFixture<PublicarguardiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublicarguardiaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicarguardiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
