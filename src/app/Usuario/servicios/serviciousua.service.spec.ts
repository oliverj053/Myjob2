import { TestBed } from '@angular/core/testing';

import { ServiciousuaService } from './serviciousua.service';

describe('ServiciousuaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServiciousuaService = TestBed.get(ServiciousuaService);
    expect(service).toBeTruthy();
  });
});
