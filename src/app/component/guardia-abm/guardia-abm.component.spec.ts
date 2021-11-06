import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuardiaAbmComponent } from './guardia-abm.component';

describe('GuardiaAbmComponent', () => {
  let component: GuardiaAbmComponent;
  let fixture: ComponentFixture<GuardiaAbmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuardiaAbmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GuardiaAbmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
