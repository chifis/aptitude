import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimerUpDownComponent } from './timer-up-down.component';

describe('TimerUpDownComponent', () => {
  let component: TimerUpDownComponent;
  let fixture: ComponentFixture<TimerUpDownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimerUpDownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimerUpDownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
