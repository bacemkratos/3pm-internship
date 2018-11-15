import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinancialInputsComponent } from './financial-inputs.component';

describe('FinancialInputsComponent', () => {
  let component: FinancialInputsComponent;
  let fixture: ComponentFixture<FinancialInputsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinancialInputsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinancialInputsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
