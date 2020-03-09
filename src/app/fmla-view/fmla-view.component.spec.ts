import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FmlaViewComponent } from './fmla-view.component';

describe('FmlaViewComponent', () => {
  let component: FmlaViewComponent;
  let fixture: ComponentFixture<FmlaViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FmlaViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FmlaViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
