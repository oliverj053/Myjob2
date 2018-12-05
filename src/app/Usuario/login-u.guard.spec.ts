import { TestBed, async, inject } from '@angular/core/testing';

import { LoginUGuard } from './login-u.guard';

<<<<<<< HEAD
<<<<<<< HEAD
describe('LoginEGuard', () => {
=======
describe('LoginUGuard', () => {
>>>>>>> parent of fcd0520... Merge branch 'master' of https://github.com/oliverj053/Myjob2
=======
describe('LoginUGuard', () => {
>>>>>>> parent of fcd0520... Merge branch 'master' of https://github.com/oliverj053/Myjob2
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoginUGuard]
    });
  });

  it('should ...', inject([LoginUGuard], (guard: LoginUGuard) => {
    expect(guard).toBeTruthy();
  }));
});
