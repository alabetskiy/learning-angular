import { TestBed, inject } from '@angular/core/testing';

import { AuthrosService } from './authros.service';

describe('AuthrosService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthrosService]
    });
  });

  it('should be created', inject([AuthrosService], (service: AuthrosService) => {
    expect(service).toBeTruthy();
  }));
});
