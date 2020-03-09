import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EndClientNameComponent } from './end-client-name.component';

describe('EndClientNameComponent', () => {
  let component: EndClientNameComponent;
  let fixture: ComponentFixture<EndClientNameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EndClientNameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EndClientNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
