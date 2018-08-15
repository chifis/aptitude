import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DivisibilityComponent } from './divisibility.component';

describe('DivisibilityComponent', () => {
  let component: DivisibilityComponent;
  let fixture: ComponentFixture<DivisibilityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DivisibilityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DivisibilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
