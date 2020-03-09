import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompViewsComponent } from './comp-views.component';

describe('CompViewsComponent', () => {
  let component: CompViewsComponent;
  let fixture: ComponentFixture<CompViewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompViewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompViewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
