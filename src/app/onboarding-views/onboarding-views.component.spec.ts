import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnboardingViewsComponent } from './onboarding-views.component';

describe('OnboardingViewsComponent', () => {
  let component: OnboardingViewsComponent;
  let fixture: ComponentFixture<OnboardingViewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnboardingViewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnboardingViewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
