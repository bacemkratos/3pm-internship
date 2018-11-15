import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectGlobalStatusComponent } from './project-global-status.component';

describe('ProjectGlobalStatusComponent', () => {
  let component: ProjectGlobalStatusComponent;
  let fixture: ComponentFixture<ProjectGlobalStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectGlobalStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectGlobalStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
