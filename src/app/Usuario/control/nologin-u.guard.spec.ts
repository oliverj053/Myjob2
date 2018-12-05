import { TestBed, async, inject } from '@angular/core/testing';

import { NologinUGuard } from './nologin-u.guard';

describe('NologinUGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NologinUGuard]
    });
  });

  it('should ...', inject([NologinUGuard], (guard: NologinUGuard) => {
    expect(guard).toBeTruthy();
  }));
});
