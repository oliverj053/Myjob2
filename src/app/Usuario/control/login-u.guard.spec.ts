import { TestBed, async, inject } from '@angular/core/testing';

import { LoginUGuard } from './login-u.guard';

describe('LoginUGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoginUGuard]
    });
  });

  it('should ...', inject([LoginUGuard], (guard: LoginUGuard) => {
    expect(guard).toBeTruthy();
  }));
});
