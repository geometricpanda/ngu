import { TestBed } from '@angular/core/testing';

import { LoremGeneratorResolver } from './lorem-generator.resolver';

describe('LoremGeneratorResolver', () => {
  let resolver: LoremGeneratorResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(LoremGeneratorResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
