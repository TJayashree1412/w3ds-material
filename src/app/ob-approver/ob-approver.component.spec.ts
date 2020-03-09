import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObApproverComponent } from './ob-approver.component';

describe('ObApproverComponent', () => {
  let component: ObApproverComponent;
  let fixture: ComponentFixture<ObApproverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObApproverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObApproverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
