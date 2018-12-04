import { TestBed } from '@angular/core/testing';

import { NologinUService } from './nologin-u.service';

describe('NologinUService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NologinUService = TestBed.get(NologinUService);
    expect(service).toBeTruthy();
  });
});
