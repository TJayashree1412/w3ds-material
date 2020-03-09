import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RedeploymentCompletionChecklistComponent } from './redeployment-completion-checklist.component';

describe('RedeploymentCompletionChecklistComponent', () => {
  let component: RedeploymentCompletionChecklistComponent;
  let fixture: ComponentFixture<RedeploymentCompletionChecklistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RedeploymentCompletionChecklistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RedeploymentCompletionChecklistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
