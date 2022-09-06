import { TestBed } from '@angular/core/testing';

import { LoremGeneratedTitleResolver } from './lorem-generated-title.resolver';

describe('LoremGeneratedTitleResolver', () => {
  let resolver: LoremGeneratedTitleResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(LoremGeneratedTitleResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
