import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectManagementInputsComponent } from './project-management-inputs.component';

describe('ProjectManagementInputsComponent', () => {
  let component: ProjectManagementInputsComponent;
  let fixture: ComponentFixture<ProjectManagementInputsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectManagementInputsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectManagementInputsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
