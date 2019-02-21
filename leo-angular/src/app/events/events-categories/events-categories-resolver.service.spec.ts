import { TestBed } from '@angular/core/testing';

import { FdlEventsCategoriesResolverService } from './events-categories-resolver.service';

describe('FdlEventsCategoriesResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FdlEventsCategoriesResolverService = TestBed.get(FdlEventsCategoriesResolverService);
    expect(service).toBeTruthy();
  });
});
