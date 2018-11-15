import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectHealthStatusComponent } from './project-health-status.component';

describe('ProjectHealthStatusComponent', () => {
  let component: ProjectHealthStatusComponent;
  let fixture: ComponentFixture<ProjectHealthStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectHealthStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectHealthStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
