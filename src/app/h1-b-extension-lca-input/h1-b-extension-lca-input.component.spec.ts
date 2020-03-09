import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { H1BExtensionLCAInputComponent } from './h1-b-extension-lca-input.component';

describe('H1BExtensionLCAInputComponent', () => {
  let component: H1BExtensionLCAInputComponent;
  let fixture: ComponentFixture<H1BExtensionLCAInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ H1BExtensionLCAInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(H1BExtensionLCAInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
