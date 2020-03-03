import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllCompHistoryComponent } from './all-comp-history.component';

describe('AllCompHistoryComponent', () => {
  let component: AllCompHistoryComponent;
  let fixture: ComponentFixture<AllCompHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllCompHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllCompHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
