import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectObjectivesComponent } from './project-objectives.component';

describe('ProjectObjectivesComponent', () => {
  let component: ProjectObjectivesComponent;
  let fixture: ComponentFixture<ProjectObjectivesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectObjectivesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectObjectivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
