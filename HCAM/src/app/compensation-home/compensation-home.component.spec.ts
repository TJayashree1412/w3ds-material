import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompensationHomeComponent } from './compensation-home.component';

describe('CompensationHomeComponent', () => {
  let component: CompensationHomeComponent;
  let fixture: ComponentFixture<CompensationHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompensationHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompensationHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
