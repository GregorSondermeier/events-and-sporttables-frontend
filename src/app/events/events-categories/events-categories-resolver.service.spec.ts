import { TestBed } from '@angular/core/testing';

import { GsEventsCategoriesResolverService } from './events-categories-resolver.service';

describe('GsEventsCategoriesResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GsEventsCategoriesResolverService = TestBed.get(GsEventsCategoriesResolverService);
    expect(service).toBeTruthy();
  });
});
