import { TestBed, inject } from '@angular/core/testing';

import { AuthIntercepterService } from './auth-intercepter.service';

describe('AuthIntercepterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthIntercepterService]
    });
  });

  it('should be created', inject([AuthIntercepterService], (service: AuthIntercepterService) => {
    expect(service).toBeTruthy();
  }));
});
