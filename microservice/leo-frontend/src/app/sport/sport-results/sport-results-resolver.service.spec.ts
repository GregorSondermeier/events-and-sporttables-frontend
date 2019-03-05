import { TestBed } from '@angular/core/testing';

import { FdlSportResultsResolverService } from './sport-results-resolver.service';

describe('SportResultsResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FdlSportResultsResolverService = TestBed.get(FdlSportResultsResolverService);
    expect(service).toBeTruthy();
  });
});
