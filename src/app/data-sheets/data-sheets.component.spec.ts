import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataSheetrsComponent } from './data-sheetrs.component';

describe('DataSheetrsComponent', () => {
  let component: DataSheetrsComponent;
  let fixture: ComponentFixture<DataSheetrsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataSheetrsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataSheetrsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
