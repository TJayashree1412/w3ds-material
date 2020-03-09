import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PendingActionComponent } from './pending-action.component';

describe('PendingActionComponent', () => {
  let component: PendingActionComponent;
  let fixture: ComponentFixture<PendingActionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PendingActionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PendingActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
