import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnsiteHireCompComponent } from './onsite-hire-comp.component';

describe('OnsiteHireCompComponent', () => {
  let component: OnsiteHireCompComponent;
  let fixture: ComponentFixture<OnsiteHireCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnsiteHireCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnsiteHireCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
