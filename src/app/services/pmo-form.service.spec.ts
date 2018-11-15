import { TestBed, inject } from '@angular/core/testing';

import { PmoFormService } from './pmo-form.service';

describe('PmoFormService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PmoFormService]
    });
  });

  it('should be created', inject([PmoFormService], (service: PmoFormService) => {
    expect(service).toBeTruthy();
  }));
});
