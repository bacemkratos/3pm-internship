import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectTermsComponent } from './project-terms.component';

describe('ProjectTermsComponent', () => {
  let component: ProjectTermsComponent;
  let fixture: ComponentFixture<ProjectTermsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectTermsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectTermsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
