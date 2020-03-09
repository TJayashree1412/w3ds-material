import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnboardReportsComponent } from './onboard-reports.component';

describe('OnboardReportsComponent', () => {
  let component: OnboardReportsComponent;
  let fixture: ComponentFixture<OnboardReportsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnboardReportsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnboardReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
