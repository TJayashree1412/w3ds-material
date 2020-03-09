import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImmediateActionComponent } from './immediate-action.component';

describe('ImmediateActionComponent', () => {
  let component: ImmediateActionComponent;
  let fixture: ComponentFixture<ImmediateActionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImmediateActionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImmediateActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
