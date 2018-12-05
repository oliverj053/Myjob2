import { TestBed, async, inject } from '@angular/core/testing';

<<<<<<< HEAD
import { NologinEGuard } from './nologin-u.guard';

describe('NologinEGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NologinEGuard]
    });
  });

  it('should ...', inject([NologinEGuard], (guard: NologinEGuard) => {
=======
import { NologinUGuard } from './nologin-u.guard';

describe('NologinUGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NologinUGuard]
    });
  });

  it('should ...', inject([NologinUGuard], (guard: NologinUGuard) => {
>>>>>>> parent of fcd0520... Merge branch 'master' of https://github.com/oliverj053/Myjob2
    expect(guard).toBeTruthy();
  }));
});
