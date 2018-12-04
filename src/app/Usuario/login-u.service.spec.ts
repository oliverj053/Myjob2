import { TestBed } from '@angular/core/testing';

import { LoginUService } from './login-u.service';

describe('LoginUService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LoginUService = TestBed.get(LoginUService);
    expect(service).toBeTruthy();
  });
});
