import { TestBed, inject } from '@angular/core/testing';

import { FinancialFormService } from './financial-form.service';

describe('FinancialFormService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FinancialFormService]
    });
  });

  it('should be created', inject([FinancialFormService], (service: FinancialFormService) => {
    expect(service).toBeTruthy();
  }));
});
