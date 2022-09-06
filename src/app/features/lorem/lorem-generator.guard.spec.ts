import { TestBed } from '@angular/core/testing';

import { LoremGeneratorGuard } from './lorem-generator.guard';

describe('LoremGeneratorGuard', () => {
  let guard: LoremGeneratorGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(LoremGeneratorGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
