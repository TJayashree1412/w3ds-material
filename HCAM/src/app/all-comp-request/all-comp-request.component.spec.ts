import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllCompRequestComponent } from './all-comp-request.component';

describe('AllCompRequestComponent', () => {
  let component: AllCompRequestComponent;
  let fixture: ComponentFixture<AllCompRequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllCompRequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllCompRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
