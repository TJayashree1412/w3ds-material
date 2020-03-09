import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeAssignmentResponseComponent } from './employee-assignment-response.component';

describe('EmployeeAssignmentResponseComponent', () => {
  let component: EmployeeAssignmentResponseComponent;
  let fixture: ComponentFixture<EmployeeAssignmentResponseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeAssignmentResponseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeAssignmentResponseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
