import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffingTeamComponent } from './staffing-team.component';

describe('StaffingTeamComponent', () => {
  let component: StaffingTeamComponent;
  let fixture: ComponentFixture<StaffingTeamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StaffingTeamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StaffingTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
