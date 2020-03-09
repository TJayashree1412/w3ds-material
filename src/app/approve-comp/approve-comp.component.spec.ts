import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApproveCompComponent } from './approve-comp.component';

describe('ApproveCompComponent', () => {
  let component: ApproveCompComponent;
  let fixture: ComponentFixture<ApproveCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApproveCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApproveCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
