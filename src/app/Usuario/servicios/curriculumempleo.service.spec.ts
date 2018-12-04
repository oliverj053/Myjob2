import { TestBed } from '@angular/core/testing';

import { CurriculumempleoService } from './curriculumempleo.service';

describe('CurriculumempleoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CurriculumempleoService = TestBed.get(CurriculumempleoService);
    expect(service).toBeTruthy();
  });
});
