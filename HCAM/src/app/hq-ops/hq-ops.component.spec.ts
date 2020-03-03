import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HqOpsComponent } from './hq-ops.component';

describe('HqOpsComponent', () => {
  let component: HqOpsComponent;
  let fixture: ComponentFixture<HqOpsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HqOpsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HqOpsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
