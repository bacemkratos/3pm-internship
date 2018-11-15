import { TestBed, inject } from '@angular/core/testing';

import { PresalesFormService } from './presales-form.service';

describe('PresalesFormService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PresalesFormService]
    });
  });

  it('should be created', inject([PresalesFormService], (service: PresalesFormService) => {
    expect(service).toBeTruthy();
  }));
});
