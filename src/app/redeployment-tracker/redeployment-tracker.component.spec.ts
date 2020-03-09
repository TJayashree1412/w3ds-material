import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RedeploymentTrackerComponent } from './redeployment-tracker.component';

describe('RedeploymentTrackerComponent', () => {
  let component: RedeploymentTrackerComponent;
  let fixture: ComponentFixture<RedeploymentTrackerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RedeploymentTrackerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RedeploymentTrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
