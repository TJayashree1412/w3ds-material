import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralViewsComponent } from './general-views.component';

describe('GeneralViewsComponent', () => {
  let component: GeneralViewsComponent;
  let fixture: ComponentFixture<GeneralViewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneralViewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralViewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
