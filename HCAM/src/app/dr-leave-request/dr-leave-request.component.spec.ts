import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrLeaveRequestComponent } from './dr-leave-request.component';

describe('DrLeaveRequestComponent', () => {
  let component: DrLeaveRequestComponent;
  let fixture: ComponentFixture<DrLeaveRequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrLeaveRequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrLeaveRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
