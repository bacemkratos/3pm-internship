import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinancialHealthStatusComponent } from './financial-health-status.component';

describe('FinancialHealthStatusComponent', () => {
  let component: FinancialHealthStatusComponent;
  let fixture: ComponentFixture<FinancialHealthStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinancialHealthStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinancialHealthStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
